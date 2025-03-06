// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Modal } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";
// import * as ImagePicker from 'expo-image-picker';

// export default function ReportDetailsScreen({ route }) {
//   const navigation = useNavigation();
//   const { reason } = route.params;
//   const [message, setMessage] = useState("");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false); // ✅ เพิ่ม state สำหรับ Modal

//   const handleSubmit = () => {
//     setModalVisible(true); // pop up when click send
//   };

//   const pickImage = async () => {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert('Permission needed', 'Sorry, we need camera roll permissions to make this work!');
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <Ionicons name="chevron-back" size={24} color="#000" />
//         </TouchableOpacity>
//         <Text style={styles.heading}>Make Report</Text>
//       </View>
  
//       <ScrollView contentContainerStyle={styles.content}>
//         <Text style={styles.label}>Selected Reason</Text>
//         <View style={styles.reasonBox}>
//           <Text style={styles.reasonText}>{reason}</Text>
//         </View>
  
//         <Text style={styles.label}>Report Message</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Please elaborate on your reason"
//           multiline
//           value={message}
//           onChangeText={setMessage}
//         />

//         <Text style={styles.label}>Supporting Images</Text>
//         <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
//           <Ionicons name="cloud-upload-outline" size={20} color="#4A3ED3" style={styles.uploadIcon} />
//           <Text style={styles.uploadButtonText}>Add File</Text>
//         </TouchableOpacity>
  
//         {selectedImage && (
//           <View style={styles.imagePreview}>
//             <Image source={{ uri: selectedImage }} style={styles.image} />
//           </View>
//         )}
  
//         <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
//           <Text style={styles.sendText}>Send</Text>
//         </TouchableOpacity>
//       </ScrollView>

//       {/* PopUp Modal */}
//       <Modal animationType="slide" transparent={true} visible={modalVisible}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalBox}>
//             <Text style={styles.modalTitle}>Thank you for your attention</Text>
//             <Text style={styles.modalMessage}>Your report has been submitted successfully!</Text>
//             <TouchableOpacity
//               style={styles.modalButton}
//               onPress={() => {
//                 setModalVisible(false);
//                 navigation.navigate("Home");
//               }}
//             >
//               <Text style={styles.modalButtonText}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );  
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#C6EEFF" },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#6BC9FF",
//     paddingVertical: 8,
//     marginTop: 80,
//     borderRadius: 10,
//     marginHorizontal: 10,
//     elevation: 4,
//     justifyContent: "center",
//   },
//   backButton: {
//     padding: 8,
//     marginLeft: 10,
//     marginRight: 15,
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#000",
//     flex: 2,
//     paddingVertical: 5,
//   },

//   content: { paddingHorizontal: 15, paddingTop: 20 },

//   label: { 
//     fontSize: 16, 
//     fontWeight: "600", 
//     marginBottom: 5, 
//     color: "#333" 
//   },

//   reasonBox: {
//     backgroundColor: "#9BDBF9",  
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   reasonText: { fontSize: 14, color: "black", fontWeight: "bold" },

//   input: {
//     height: 140, 
//     borderWidth: 1,
//     borderColor: "#333",
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     paddingTop: 10,
//     backgroundColor: "#F5F5F5",
//     textAlignVertical: "top",
//     fontSize: 14,
//     marginBottom: 20,
//   },

//   uploadButton: {
//     backgroundColor: "#fff", 
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   uploadIcon: { marginRight: 8 },
//   uploadButtonText: { fontSize: 16, color: "#4A3ED3" },

//   imagePreview: { marginBottom: 20, alignItems: "center" },
//   image: { width: 150, height: 150, borderRadius: 10, marginBottom: 10 },

//   sendButton: {
//     backgroundColor: "#4A3ED3",
//     paddingVertical: 12,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 15,
//   },
//   sendText: { fontSize: 16, color: "white", fontWeight: "bold" },

//   // popUp Modal
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)", // ฉากหลังโปร่งแสง
//   },
//   modalBox: {
//     width: 300,
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
//   modalMessage: { fontSize: 14, textAlign: "center", marginBottom: 20 },
//   modalButton: {
//     backgroundColor: "#4A3ED3",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   modalButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
// });
