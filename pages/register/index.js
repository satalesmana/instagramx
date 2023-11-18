import { AppLogo, IconFacebook } from '../../assets'
import { PrimaryButton, LoadingUi } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react';
import CApi from '../../lib/CApi';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    TextInput,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { 
  setRegisterEmail, 
  setRegisterFullName,
  setRegisterUsername,
  setRegisterPassword
} from '../../store/reducer/registerSlice'

function RegisterScreen({navigation}) {
  const register = useSelector((state) => state.register)
  const [isLoading, setLoading]= React.useState(false)
  const dispatch = useDispatch()

  const onhandleLoginButton = ()=>{
    navigation.navigate('Login')
  }

  const submitRegister = async () => {
    try{
      setLoading(true)
      const body= {
        "dataSource": "Cluster0",
        "database": "izonovel",
        "collection": "anggota",
        "document": register
      }
      
      const respose = await CApi.post('/action/insertOne',body)
      setLoading(false)
      if(respose) {
        alert('Data berhasil disimpan')
      }
    }catch(error){
      setLoading(false)
      console.error('error',error)
      alert(error.message)
    }
    
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
              value={register.email}
              onChangeText={(val)=>dispatch(setRegisterEmail(val))}
              style={[style.input, {marginTop:20}]}
              placeholder="Mobile Number or Email"
            />

            <TextInput
              value={register.fullName}
              onChangeText={(val)=>dispatch(setRegisterFullName(val))}
              style={[style.input, {marginTop:10}]}
              placeholder="Full Name"
            />

            <TextInput
              value={register.userName}
              onChangeText={(val)=>dispatch(setRegisterUsername(val))}
              style={[style.input, {marginTop:10}]}
              placeholder="User Name"
            />

            <TextInput
              value={register.password}
              onChangeText={(val)=>dispatch(setRegisterPassword(val))}
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
      <LoadingUi loading={isLoading}/>
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
