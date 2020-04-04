import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import React, {useState} from 'react'

const GoogleSignInButton = () => {
    const [userInfo, setUserInfo] = useState();
    //GoogleSignin.configure();
    //console.log(userInfo);
    signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          setUserInfo(userInfo);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (f.e. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
    };
    return(
        <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
            disabled={this.state.isSigninInProgress} 
        />
    )
}
    
export default GoogleSignInButton;
  