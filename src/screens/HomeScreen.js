import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView,
Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';


  const { width, height } = Dimensions.get('window'); // ใช้ขนาดของหน้าจอ

  const ProfileScreen = ({ navigation }) => {
    const isVerified = false;

const handleVerifyIdentity = () => {
  Alert.alert("Verification", "Identity verification processinitiated.");
  };

  const handleLogout = () => {
  Alert.alert("Logout", "You have been logged out.");
};

return (
  <ScrollView style={styles.container}>
    <Header title="BookBuddies" /> {/* เพิ่ม title ที่จะใช้แสดงชื่อแอพ */}
  <View style={styles.profileSection}>
    <Image
      source={{ uri:'https://stat.ameba.jp/user_images/20241202/22/5040-kaze/cd/89/j/o1080081015517028237.jpg?caw=800' }}
      style={styles.profileImage}
    />
    <Text style={styles.name}>Fujii Kaze</Text>
    <Text style={styles.uid}>UID: TH-123-456</Text>
    <Text style={styles.email}>callmelnwza@gmail.com</Text>
    <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
    </TouchableOpacity>
  </View>

    <View style={styles.verificationSection}>
      <Text style={styles.sectionTitle}>Verification Status</Text>
    <View style={styles.verificationItem}>
      <Icon name="cancel" size={20} color="red" />
    <Text style={styles.verificationText}>Identity Confirmation: Not
  Confirmed</Text>
  </View>
  <TouchableOpacity style={styles.verifyButton} onPress={() =>
navigation.navigate('IdentityVerificationScreen')}>
      <Text style={styles.verifyButtonText}>Verify Identity</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.menu}>
    <TouchableOpacity style={styles.menuItem} onPress={() =>
navigation.navigate('ExchangingHistory')}>
    <Text>Book Management</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItem} onPress={() =>
navigation.navigate('ExchangingHistory')}>
    <Text>Exchanging History</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItem}>
    <Text>View Wallet</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItem}>
    <Text>Posted for Sell</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItem}>
    <Text>Add Facebook</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItem}>
    <Text>Add Line</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItem} onPress={() =>
navigation.navigate('ContactUs')}>
    <Text>Contact Us</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItem}>
    <Text>Register to Sell</Text>
  </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.logoutButton}
onPress={handleLogout}>
      <Text style={styles.logoutButtonText}>Log Out</Text>
    </TouchableOpacity>
  </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: width * 0.05, // ใช้ 5% ของขนาดหน้าจอเป็น padding
  backgroundColor: '#f8f9fa',
},
profileSection: {
alignItems: 'center',
marginBottom: height * 0.02, // 2% ของขนาดหน้าจอ
backgroundColor: '#fff',
padding: height * 0.02, // 2% ของขนาดหน้าจอ
borderRadius: 5,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 4,
elevation: 4,
},
profileImage: {
    width: height * 0.12, // ใช้ 12% ของความสูงเป็นขนาดรูปภาพ
    height: height * 0.12, // ใช้ 12% ของความสูงเป็นขนาดรูปภาพ
    borderRadius: height * 0.06, // ให้เป็นวงกลม
    marginBottom: height * 0.02, // ระยะห่างจากชื่อ
},
name: {
    fontSize: width * 0.05, // ขนาดตัวอักษร 5% ของความกว้าง
    fontWeight: 'bold',
},
uid: {
    fontSize: width * 0.035, // ขนาดตัวอักษร 3.5% ของความกว้าง
    color: 'gray',
},
email: {
    fontSize: width * 0.035, // ขนาดตัวอักษร 3.5% ของความกว้าง
    color: 'gray',
},
editButton: {
    marginTop: height * 0.01, // ระยะห่างจากข้อความ
    paddingVertical: height * 0.015, // เพิ่ม padding ใหญ่ขึ้น
    paddingHorizontal: width * 0.1, // ขนาดพอดีกับปุ่ม
    backgroundColor: '#007bff',
    borderRadius: 20,
    alignItems: 'center',
},
editButtonText: {
    color: 'white',
    fontSize: width * 0.04, // ขนาดตัวอักษร
},
verificationSection: {
    backgroundColor: '#fff',
    padding: height * 0.02, // เพิ่ม padding เพื่อความสวยงาม
    borderRadius: 10,
    marginBottom: height * 0.02, // เพิ่ม margin เพื่อไม่ให้ติดกัน
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
},
sectionTitle: {
    fontSize: width * 0.045, // ขนาดตัวอักษร 4.5% ของความกว้าง
    fontWeight: 'bold',
    marginBottom: height * 0.02, // ระยะห่างจากข้อความ
},
verificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.015, // ระยะห่างจากรายการ
},
verificationText: {
    marginLeft: width * 0.02, // ระยะห่างจากไอคอน
    fontSize: width * 0.04, // ขนาดตัวอักษร
    color: 'red',
},
verifyButton: {
    marginTop: height * 0.02, // เพิ่มระยะห่างจากรายการ
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1, // ปรับขนาดปุ่มให้เหมาะสม
    backgroundColor: '#28a745',
    borderRadius: 20,
    alignItems: 'center',
},
verifyButtonText: {
    color: 'white',
    fontSize: width * 0.04, // ขนาดตัวอักษร
},
menu: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: height * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
},
menuItem: {
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.1, // ปรับให้พอดีกับขนาดหน้าจอ
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
},
logoutButton: {
    marginTop: height * 0.02,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    backgroundColor: '#dc3545',
    borderRadius: 20,
    alignItems: 'center',
},
logoutButtonText: {
    color: 'white',
    fontSize: width * 0.04, // ขนาดตัวอักษร
  },
});
export default ProfileScreen;