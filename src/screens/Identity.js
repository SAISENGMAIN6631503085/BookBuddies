import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, TouchableOpacity,
StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // สำหรับการใช้ไอ
คอน
import { useNavigation } from '@react-navigation/native'; // สำหรับการใช้

Navigation
import Header from "../components/Header";

export default function IdentityProofForm() {
    const [formData, setFormData] = useState({
    firstName: "Gojo",
    lastName: "Satoru",
    passportNumber: "PAxxxxxx90",
    country: "Thailand",
    city: "Chiang Rai",
    birthdate: "",
    passportIssue: "",
    passportExpiry: "",
    cardNumber: "01-08 678987",
    residence: "Gojo Clan",
    cardIssue: "",
    cardExpiry: "",
});

const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
};

const navigation = useNavigation(); // React Navigation Hook

// ฟังก์ชันเลือกไฟล์
const handleFileUpload = (fileType) => {
    Alert.alert(`Uploading ${fileType}`);
};

return (
    <ScrollView contentContainerStyle={styles.container}>
        <Header title="BookBuddies" />
        <Text style={styles.subheading}>Please fill the information below
for proof of Identity</Text>


    {/* แบ่งเป็น 2 คอลัมน์ */}
    <View style={styles.row}>
        <View style={styles.column}>
        {/* ข้อมูลส่วนตัว */}
    <TextInput
    style={styles.input}
    value={formData.firstName}
    onChangeText={(text) => handleChange("firstName", text)}
    placeholder="First Name"
/>
    <TextInput
    style={styles.input}
    value={formData.lastName}
    onChangeText={(text) => handleChange("lastName", text)}
    placeholder="Last Name"
/>
    <TextInput
    style={styles.input}
    value={formData.passportNumber}
    onChangeText={(text) => handleChange("passportNumber", text)}
    placeholder="Passport Number"
    />
</View>

<View style={styles.column}>
{/* ข้อมูลส่วนตัว */}
<TextInput
    style={styles.input}
    value={formData.country}
    onChangeText={(text) => handleChange("country", text)}
    placeholder="Country"
/>
<TextInput
    style={styles.input}
    value={formData.city}
    onChangeText={(text) => handleChange("city", text)}
    placeholder="City"
    />
<TextInput
    style={styles.input}
    value={formData.birthdate}
    onChangeText={(text) => handleChange("birthdate", text)}
    placeholder="Birthdate (dd/mm/yyyy)"
        />
    </View>
</View>

{/* ส่วนที่เหลือจะเป็นฟอร์มแบบเดิม */}
<TextInput
    style={styles.input}
    value={formData.passportIssue}
    onChangeText={(text) => handleChange("passportIssue", text)}
    placeholder="Date of Passport Issue (dd/mm/yyyy)"
/>

<TextInput
style={styles.input}
value={formData.passportExpiry}
onChangeText={(text) => handleChange("passportExpiry", text)}
placeholder="Date of Passport Expiry (dd/mm/yyyy)"
/>
<Text style={styles.subheading}>Citizenship Card</Text>
<TextInput
    style={styles.input}
    value={formData.cardNumber}
    onChangeText={(text) => handleChange("cardNumber", text)}
    placeholder="Card Number"
/>
<TextInput
    style={styles.input}
    value={formData.residence}
    onChangeText={(text) => handleChange("residence", text)}
    placeholder="Place of Residence"
/>
<TextInput
    style={styles.input}
    value={formData.cardIssue}
    onChangeText={(text) => handleChange("cardIssue", text)}
    placeholder="Date of Card Issue (dd/mm/yyyy)"
/>
<TextInput
    style={styles.input}
    value={formData.cardExpiry}
    onChangeText={(text) => handleChange("cardExpiry", text)}
    placeholder="Date of Card Expiry (dd/mm/yyyy)"
/>
{/* ฟอร์มสำหรับการอัปโหลดเอกสาร */}
    <Text style={styles.subheading}>Document Uploads</Text>
    <FileUpload label="Upload your scanned passport here" onUpload={()=> handleFileUpload("passport")} />
    <FileUpload label="Upload a photo of your actual face here"
onUpload={() => handleFileUpload("face photo")} />
    <FileUpload label="Upload your scanned citizenship card"
onUpload={() => handleFileUpload("citizenship card")} />


{/* ปุ่มส่งข้อมูล */}
    <Button title="Submit" onPress={() => Alert.alert("Form Submitted")}
/>
    </ScrollView>
    );
}
// คอมโพเนนต์สำหรับอัปโหลดไฟล์
function FileUpload({ label, onUpload }) {
    return (
        <TouchableOpacity style={styles.fileUploadContainer}
onPress={onUpload}>
        <Icon name="upload" size={24} color="gray" />
        <Text style={styles.fileUploadText}>{label}</Text>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
    flexGrow: 4,
    padding: 10, // Reduced padding to fit better
    backgroundColor: "white",
},
backButton: {
    position: "absolute",
    top: 10, // Reduced top spacing
    left: 10, // Reduced left spacing
    backgroundColor: "black",

},
heading: {
    fontSize: 14, // Reduced font size
    fontWeight: "bold",
    marginBottom: 40, // Reduced margin
    textAlign: "center",
},
subheading: {
    marginTop: 20, // Reduced margin
    fontSize: 14, // Reduced font size
    fontWeight: "bold",
},
row: {
    flexDirection: "row", // ให้แสดงแบบสองคอลัมน์
    justifyContent: "space-between", // จัดเรียงให้คอลัมน์อยู่ห่างกัน
},
column: {
    flex: 1, // ให้แต่ละคอลัมน์มีความกว้างเท่าๆ กัน
    marginRight: 10, // ระยะห่างระหว่างคอลัมน์
},
input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8, // Reduced padding
    marginVertical: 6, // Reduced vertical margin
    fontSize: 14, // Reduced font size
},
fileUploadContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6, // Reduced margin
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8, // Reduced padding
},
fileUploadText: {
    marginLeft: 8, // Reduced left margin
    fontSize: 14, // Reduced font size
    color: "gray",
    },

});