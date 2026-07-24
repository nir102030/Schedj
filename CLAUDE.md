# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Schedj — a React Native app (Expo SDK 36, from ~2020) for scheduling projects/meetings/tasks
across participants, with Firebase Realtime Database as the backend and device-calendar
integration for free/busy time slot suggestions.

This is an old, unmaintained codebase. Dependencies are pinned to 2020-era versions
(React 16.9, Expo SDK 36, react-navigation v4). Do not casually upgrade packages — version
bumps here are likely to break the legacy `react-navigation` / `expo` APIs in use. Yarn and
npm lockfiles are both present (`yarn.lock` and `package-lock.json`).

## Commands

This project uses the legacy Expo SDK 36 toolchain (predates the modern `npx expo` CLI), so
these scripts expect a globally installed `expo-cli`, not the current `expo` package.

```
yarn install       # or npm install
expo start         # or: npm start
expo start --android
expo start --ios
expo start --web
expo eject
```

There is no test suite, no lint script, and no CI configured in this repo.

## Architecture

**Navigation** (`App.js`): a single nested navigator tree built with `react-navigation` v4 /
`react-navigation-stack`, not the newer `@react-navigation/*` packages (also present in
`package.json` but unused — don't switch imports between them). Top-level flow:
`ResolveAuth` (checks `firebase.auth().onAuthStateChanged`) → `loginFlow` (SignUp/LogIn) or
`mainFlow` (splash `OpenS` → the main app stack with all feature screens).

**State**: plain Redux (`src/redux/store.js`), no middleware/thunk. `src/reducers/index.js`
combines one reducer per domain: `projects`, `meetings`, `tasks`, `topics`, `users`,
`calendars`. Action creators in `src/actions/index.js` are plain sync objects
(`{ type, payload }`) — there is no async action layer.

**Data/Firebase split**: async work and Firebase I/O live in `src/firebase/*API.js`
(one file per domain: `projectsAPI`, `meetingsAPI`, `tasksAPI`, `topicsAPI`, `usersAPI`,
`calendarAPI`), *not* in Redux actions. Screens/components call these functions directly and
pass in the connected Redux action creators (e.g. `addProject`, `editProject`) as callback
arguments, which the API function invokes after reading/writing Firebase. Several of these
functions also read current state directly via `store.getState()` (imported from
`src/redux/store.js`) to decide whether an incoming DB record should be dispatched as an
`add` or an `edit`. When touching this layer, preserve that add-vs-edit dedup logic — it's
easy to introduce duplicate Redux entries otherwise.

The backend is Firebase **Realtime Database** (`firebase.database()`), not Firestore.
`src/firebase/config.js` holds the Firebase project config and `firebaseInit()`.

**Calendar/scheduling logic** (`src/calendar/calendarAPI.js`, distinct from
`src/firebase/calendarAPI.js`): pulls each user's device calendar events via `expo-calendar`,
merges them with in-app meeting events, and computes free time slots (`findFreeTimeSlots`)
and calendar-marking colors (`createMarkedDates`, red/yellow/green by slot density) used to
suggest meeting times across a project's participants.

**Push notifications** (`src/firebase/notifications.js`): registers for an Expo push token
and stores it on the user's Firebase record; sending a notification POSTs directly to the
Expo push API (`https://exp.host/--/api/v2/push/send`) rather than going through Firebase
Cloud Messaging.

**Screens vs components**: `src/screens/*` (grouped by feature: `AuthScreens`,
`ProjectScreens`, `MeetingScreens`, `TaskScreens`, `CalendarScreens`, `Invitations`,
`General`) are the routed, `connect()`-wrapped containers; `src/components/*` (grouped the
same way, plus `genericComponents` for shared form controls like pickers/inputs/buttons) are
the presentational pieces they render.

Domain relationships: a **Project** has participants (referenced by email) and contains
**Meetings** and **Tasks**/**Topics**; **Users** have a `calendar` of busy events used by the
scheduling logic above.
