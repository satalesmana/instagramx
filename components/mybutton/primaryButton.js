import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const PrimaryButton = ({title, onPress}) =>{
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.textStyle}>{title}</Text>
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
    textStyle:{
        color:'white',
        fontWeight:'bold'
    }
})
export default PrimaryButton;