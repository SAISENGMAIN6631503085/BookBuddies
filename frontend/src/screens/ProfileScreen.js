import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://stat.ameba.jp/user_images/20241202/22/5040-kaze/cd/89/j/o1080081015517028237.jpg?caw=800' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Fujii Kaze</Text>
        <Text style={styles.uid}>UID: TH-123-456</Text>
        <Text style={styles.email}>callmelnwza@gmail.com</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Verification Status Section */}
        <View style={styles.verificationSection}>
          <Text style={styles.verificationText}>
            Verification Status: <Text style={styles.notConfirmed}>Not Confirmed</Text>
          </Text>
          <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Personal Information Section */}
      <View style={styles.personalInfoSection}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoItem}>
          <Ionicons name="lock-closed" size={20} color="#666" style={styles.infoIcon} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Password</Text>
            <Text style={styles.infoValue}>*******</Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="call" size={20} color="#666" style={styles.infoIcon} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>095-123-4567</Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="location" size={20} color="#666" style={styles.infoIcon} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Address</Text>
            <Text style={styles.infoValue}>
              333 Moo.1 Tha sud, Mueang Chiang Rai, Chiang Rai 57100
            </Text>
          </View>
        </View>
      </View>

      {/* Menu Section */}
      <View style={styles.menu}>
        {[
          'Book Management',
          'Exchanging History',
          'View Wallet',
          'Posted for Sell',
          'Add Facebook',
          'Add Line',
          'Contact Us',
          'Register to Sell',
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.replace(/\s+/g, ''))}
          >
            <Text style={styles.menuText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6EEFF',
  },
  profile: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#C6EEFF',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#3366FF',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
 },
  uid: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#3366FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 300,
    marginTop: 10,
  },
  editText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  verificationSection: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  verificationText: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
  notConfirmed: {
    color: 'red',
    fontWeight: 'bold',
  },
  verifyButton: {
    backgroundColor: '#00E366',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 300,
  },
  verifyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  personalInfoSection: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoIcon: {
    marginRight: 10,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
  menu: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 300,
    margin: 20,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;