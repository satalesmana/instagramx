import {
    AppLogo,
    IconFacebook
} from '../../assets'
import {
  PrimaryButton
} from '../../components'
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    TextInput,
    SafeAreaView,
    ScrollView
} from 'react-native';

function RegisterScreen({navigation}) {

  const onhandleLoginButton = ()=>{
    navigation.navigate('Login')
  }

  const submitRegister = () =>{
    // call api
    // tampilkan pesan
    alert('Data berhasil disimpan')
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <Image source={AppLogo} style={style.logoTop} />
          <Text style={style.bodyText}>Sign up to see photos and videos from yor friends.</Text>
          <PrimaryButton 
            icon={IconFacebook}
            style={style.loginFacebook}
            title="Log in with Facebook"
            />

            <Text style={[style.bodyText, {marginTop:20}]}>OR</Text>
            
            <TextInput
              style={[style.input, {marginTop:20}]}
              placeholder="Mobile Number or Email"
            />

            <TextInput
              style={[style.input, {marginTop:10}]}
              placeholder="Full Name"
            />

            <TextInput
              style={[style.input, {marginTop:10}]}
              placeholder="User Name"
            />

            <TextInput
              style={[style.input, {marginTop:10}]}
              placeholder="Password"
            />

          <Text style={style.bodyText}>
            People who use or service may have uploaded your contact 
            information to Instagram. 

            <Text style={{color: '#1156BD'}}>
              Learn More
            </Text>
          </Text>

            <Text style={[style.bodyText, {marginTop:20}]}>
              By signing up, you agree to our Terms, Privacy Policy and Cookies Policy
            </Text>

            <PrimaryButton 
            style={style.loginFacebook}
            onPress={submitRegister}
            title="Sign up"
            />

          <PrimaryButton 
            style={style.loginFacebook}
            title="Login"
            onPress={onhandleLoginButton}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        margin: 35
    },
    logoTop:{
        alignSelf:'center',
        marginTop:20
    },
    bodyText:{
      textAlign: 'center',
      fontSize:16,
      color:'#6E6E6E'
    },
    loginFacebook:{
      marginTop: 20
    },
    input:{
      height: 40,
      borderWidth: 1,
      padding: 10,
    }
})

export default RegisterScreen;
