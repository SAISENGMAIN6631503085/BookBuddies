import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileSection = () => {
  return (
    <View style={styles.profileSection}>
      <Image
        source={{ uri: 'https://stat.ameba.jp/user_images/20241202/22/5040-kaze/cd/89/j/o1080081015517028237.jpg?caw=800' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Fujii Kaze</Text>
      <Text style={styles.uid}>UID: TH-123-456</Text>
      <Text style={styles.email}>callmelnwza@gmail.com</Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  uid: {
    fontSize: 16,
    color: 'gray',
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  editButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ProfileSection;