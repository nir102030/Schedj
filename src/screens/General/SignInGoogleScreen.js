import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native"
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession()

export default function SignInGoogleScreen({ navigation }) {
  const [signedIn, setSignedIn] = useState(false)
  const [name, setName] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "191398892218-afnfptov13nj42jr1h7irsgq5l50jn9g.apps.googleusercontent.com",
    scopes: ["profile", "email"]
  })

  useEffect(() => {
    if (response?.type !== "success") return
    const fetchProfile = async () => {
      try {
        const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
          headers: { Authorization: `Bearer ${response.authentication.accessToken}` }
        })
        const profile = await res.json()
        setSignedIn(true)
        setName(profile.name)
        setPhotoUrl(profile.picture)
      } catch (e) {
        console.log("error", e)
      }
    }
    fetchProfile()
  }, [response])

  return (
    <View style={styles.container}>
      {signedIn ? (
        <LoggedInPage name={name} photoUrl={photoUrl} navigation={navigation} />
      ) : (
        <LoginPage signIn={() => promptAsync()} disabled={!request} />
      )}
    </View>
  )
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} disabled={props.disabled} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
      <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>props.navigation.navigate('OpenS')}>
          <Image source={require('../../../assets/images/loginWith.png')} style={styles.loginWith}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  },
  TouchableOpacity: {
    flexDirection:'row-reverse',
    flex:1
  }, 
  loginWith: {
    height:200,
    width:450,
    marginVertical:28,
    marginRight:30,
    }
});