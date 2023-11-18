import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { Kucing } from '../../assets/index'
import * as ImagePicker from 'expo-image-picker';


const EditProfile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [pronouns, setPronouns] = useState('')
  const [bio, setBio] = useState('')
  const [image, setImage] = useState(null);
  
  const onSave = ()=>{
    const sendData = { 
      name,
      'account_name':accountName,
      'sebutan':pronouns,
      'profile':bio 
    }

    alert(JSON.stringify(sendData))
    ToastAndroid.show('Edited Successfully!', ToastAndroid.SHORT);
    //navigation.goBack()
  }

  const changeProfilePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        marginTop:30,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{ fontSize: 35 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() =>onSave() }>
          <Ionic name="checkmark" style={{ fontSize: 35, color: '#3493D9' }} />
        </TouchableOpacity>
      </View>
      
      <ScrollView>
        <View>
          <View style={{ padding: 20, alignItems: 'center' }}>
            <TouchableOpacity onPress={changeProfilePicture}>
              <Image
                source={{ uri: image }}
                style={{ width: 80, height: 80, borderRadius: 100, marginLeft: 12, }}
              />

                <Text
                  style={{
                    color: '#3493D9',
                  }}>
                  Edit profil picture
                </Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 30 }}>
            <View>
              <Text
                style={{
                  opacity: 0.5,
                }}>
                Name
              </Text>
              <TextInput
                placeholder="name"
                value={name}
                onChangeText={(text) => setName(text)}
                style={{
                  fontSize: 16,
                  borderBottomWidth: 1,
                  borderColor: '#CDCDCD',
                }}
              />
            </View>
            <View style={{ paddingVertical: 10 }}>
              <Text
                style={{
                  opacity: 0.5,
                }}>
                Username
              </Text>
              <TextInput
                placeholder="accountname"
                value={accountName}
                onChangeText={(text) => setAccountName(text)}
                style={{
                  fontSize: 16,
                  borderBottomWidth: 1,
                  borderColor: '#CDCDCD',
                }}
              />
            </View>
            <View style={{ paddingVertical: 10 }}>
              <TextInput
                placeholder="Pronouns"
                value={pronouns}
                onChangeText={(text) => setPronouns(text)}
                style={{
                  fontSize: 16,
                  borderBottomWidth: 1,
                  borderColor: '#CDCDCD',
                }}
              />
            </View>
            <View style={{ paddingVertical: 10 }}>
              <TextInput
                placeholder="Bio"
                value={bio}
                onChangeText={(text) => setBio(text)}
                style={{
                  fontSize: 16,
                  borderBottomWidth: 1,
                  borderColor: '#CDCDCD',
                }}
              />
            </View>
          </View>
          <View style={{padding:40}}>
            <Text
              style={{
                marginVertical: 10,
                padding: 10,
                color: '#3493D9',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#EFEFEF',
              }}>
              Switch to Professional account
            </Text>
            <Text
              style={{
                marginVertical: 10,
                padding: 10,
                color: '#3493D9',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#EFEFEF',
              }}>
              Personal information setting
            </Text>
            <Text
              style={{
                marginVertical: 10,
                padding: 10,
                color: '#3493D9',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#EFEFEF',
              }}>
              Sign up for meta verified
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;