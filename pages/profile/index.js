import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux'
import { Verified, Kucing } from '../../assets' 

function ProfileScreen({ navigation }) {
  const user = useSelector((state) => state.user)
  const onhandleLoginButton = () => {
    navigation.navigate('EditProfile');
  }
  
  const oneEditProfile = () =>{
    navigation.navigate('EditProfile',{
      userid: user.id,
      email: user.email
    })
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="arrow-back" size={30} color="black" />
          <Text style={styles.username}>{user.fullName}</Text>
          <Image
            source={Verified}
            style={{ width: 20, height: 20, marginLeft: 4 }}
          />
          <TouchableOpacity
            style={styles.messageIcon}
            onPress={() => navigation.navigate('message') }  >
            <MaterialCommunityIcons name="message-outline" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.moreIcon}
            onPress={() => {
              // Tambahkan aksi ketika ikon titik tiga horizontal ditekan
            }}
          >
            <MaterialCommunityIcons name="dots-horizontal" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Konten Profil */}
      <View style={styles.header}>
        <Image
          source={Kucing}
          style={styles.profileImage}
        />
        <View style={styles.statsText}>
          <View style={{ flexDirection: 'column', marginHorizontal: 15, alignItems: 'center' }}>
            <Text style={styles.stat}>1</Text>
            <Text style={styles.statLabel}>Posting</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', marginHorizontal: 15, alignItems: 'center' }}>
          <Text style={styles.stat}>1,075</Text>
          <Text style={styles.statLabel}>Pengikut</Text>
        </View>
        <View style={{ flexDirection: 'column', marginHorizontal: 15, alignItems: 'center' }}>
          <Text style={styles.stat}>1,110</Text>
          <Text style={styles.statLabel}>Mengikuti</Text>
        </View>
      </View>

      {/* Tombol Edit dan Share Profile */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editProfileButton} onPress={oneEditProfile}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        <View style={{ width: 16 }}></View>

        <TouchableOpacity style={styles.shareProfileButton}>
          <Text style={styles.shareProfileButtonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 9,
    marginRight: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  editProfileButton: {
    backgroundColor: 'rgb(220, 220, 220)',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'grey',
    width: 150,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  shareProfileButton: {
    backgroundColor: 'rgb(220, 220, 220)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'grey',
    width: 150,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  stat: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageIcon: {
    marginLeft: 'auto', // Untuk menggeser ikon pesan ke kanan header
    marginRight: 10,
  },
});

export default ProfileScreen;
