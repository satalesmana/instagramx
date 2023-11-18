import * as React from 'react';
import { 
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet
} from 'react-native';
import { Loading } from '../assets'

const LoadingUi=(props)=>{
    if(props.loading){
        return (
            <View style={style.container}>
                <Image source={Loading} style={style.imgStyle}/>
                <Text style={style.loadingText}>Loading...</Text>
            </View>
        )
    }else{
        return null
    }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#00000095', 
        width: width,
        height:height
    },
    imgStyle:{
        width:50,
        height:50,
        aspectRatio:1
    },
    loadingText:{
        color:'white',
        fontSize:20
    }
})

export default LoadingUi;