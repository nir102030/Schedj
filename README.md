# Schedj

Schedj is a React Native mobile app for scheduling group projects, meetings, and tasks — a
lightweight cross between a project manager and a "find a time that works for everyone"
scheduler. Firebase Realtime Database is the backend, and free/busy scheduling is computed
from each participant's device calendar via `expo-calendar`.

The app is available via this URL:
https://expo.io/@nir102030/projects/Schedj
And soon will be available on the Google Play Store.

## What it does

- **Auth** — sign up / log in via Firebase Auth (`ResolveAuthScreen` gates the app on auth
  state).
- **Projects** — create a project with a name, date, notes, and a reminder, and invite
  participants by email. Each invited participant must accept (and agree to share their
  schedule) or reject via an in-app invitation screen before they're counted as active.
- **Group scheduling** — the core feature. For every approved participant, the app pulls
  their device calendar events and merges them with any in-app Meeting events, then computes
  free time slots across the whole group. The month view is color-coded per day (green /
  yellow / red) by how much free time is available, so an organizer can see at a glance which
  days are easiest to schedule around; tapping a day drills into the specific free slots.
- **Meetings** — actual scheduled meetings tied to a project, with their own invitation flow.
- **Tasks & Topics** — a lightweight per-project to-do layer: Topics group Tasks, each task
  has a status.
- **Push notifications** — registers an Expo push token per user and sends invites/updates by
  POSTing directly to Expo's push API.

## Architecture

- **Navigation** (`App.js`): a single native-stack navigator (`@react-navigation/native` /
  `@react-navigation/native-stack`) covering the auth flow, splash, and all feature screens.
- **State**: plain Redux (`src/redux/store.js`), no middleware/thunk. One reducer per domain
  in `src/reducers/index.js`: `projects`, `meetings`, `tasks`, `topics`, `users`, `calendars`.
  Action creators in `src/actions/index.js` are plain sync objects.
- **Data/Firebase split**: async work and Firebase I/O live in `src/firebase/*API.js` (one
  file per domain), not in Redux actions. Screens call these functions directly and pass in
  connected Redux action creators as callbacks, which the API function invokes after
  reading/writing Firebase. This layer also contains manual add-vs-edit dedup logic that
  compares incoming DB records against current Redux state to avoid duplicate entries — easy
  to break if touched carelessly.
- **Backend**: Firebase **Realtime Database** (`firebase.database()`), not Firestore.
  `src/firebase/config.js` holds the project config and `firebaseInit()`.
- **Calendar/scheduling logic** (`src/calendar/calendarAPI.js`, distinct from
  `src/firebase/calendarAPI.js`): pulls device calendar events, merges them with in-app
  meeting events, and computes free time slots (`findFreeTimeSlots`) and calendar-marking
  colors (`createMarkedDates`) used to suggest meeting times across a project's participants.
- **Screens vs components**: `src/screens/*` (grouped by feature: `AuthScreens`,
  `ProjectScreens`, `MeetingScreens`, `TaskScreens`, `CalendarScreens`, `Invitations`,
  `General`) are the routed, `connect()`-wrapped containers; `src/components/*` are the
  presentational pieces they render.

Domain relationships: a **Project** has participants (referenced by email) and contains
**Meetings** and **Tasks**/**Topics**; **Users** have a `calendar` of busy events used by the
scheduling logic above.

## Getting started

```
yarn install       # or npm install
expo start          # or: npm start
expo start --android
expo start --ios
expo start --web
```

There is no test suite, no lint script, and no CI configured in this repo.

## Known issues

- `src/calendar/calendarAPI.js` has the free-slot search window hardcoded to **August 2020**
  (`createTimeSlots`, `createCalendarObject`), so scheduling currently looks at the wrong
  calendar month regardless of the actual date.
