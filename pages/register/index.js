import {
    AppLogo
} from '../../assets'
import {
  PrimaryButton
} from '../../components'
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    Button
} from 'react-native';

function RegisterScreen() {
  return (
    <View style={style.container}>
      <Image source={AppLogo} style={style.logoTop} />
      <Text style={style.bodyText}>Sign up to see photos and videos from yor friends.</Text>
      <PrimaryButton title="Log in with Facebook"/>
    </View>
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
      textAlign:'center',
      fontSize:16,
      color:'#6E6E6E'
    }
})

export default RegisterScreen;
