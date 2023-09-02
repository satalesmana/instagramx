import {
    StyleSheet, 
    Text, 
    TouchableOpacity,
    Image,
    View
} from 'react-native';

const PrimaryButton = ({title, onPress, style, icon}) =>{
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <View style={styles.btnContainer}>
                { icon? 
                    <Image source={icon} style={styles.icon}/> 
                    : null
                } 
                
                <Text style={styles.textStyle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: '#1877F2',
        padding: 10,
        borderRadius: 10,
        
    },
    btnContainer:{
        flexDirection:'row',
        alignItems: 'center',
    },
    textStyle:{
        color:'white',
        fontWeight:'bold'
    },
    icon:{
        width:20,
        height: 20,
        borderRadius: 5,
        marginRight: 10
    }
})
export default PrimaryButton;