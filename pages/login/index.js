import {
  AppLogo,
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
  ScrollView,
  TouchableOpacity
} from 'react-native';

function LoginScreen({navigation}) {

const onhandleLoginButton = ()=>{
  navigation.navigate('Main')
}
const onRegisterPress = () => {
  navigation.navigate('Register'); 
};


return (
  <SafeAreaView>
    <ScrollView>
      <View style={style.container}>
        <Image source={AppLogo} style={style.logoTop} />
        <Text style={style.bodyText}></Text>
        
          
          <TextInput
            style={[style.input, {marginTop:20}]}
            placeholder="Phone Number or Email"
          />


          <TextInput
            style={[style.input, {marginTop:10}]}
            placeholder="Password"
          />



        <PrimaryButton 
          style={style.loginFacebook}
          title="Login"
          onPress={onhandleLoginButton}
          />
           <Text style={style.bodyText}>
          Don't have account?
          <TouchableOpacity onPress={onRegisterPress}>
          <Text style={{color: '#1156BD'}}>
            Signup
          </Text>
          </TouchableOpacity>
        </Text>
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

export default LoginScreen;
