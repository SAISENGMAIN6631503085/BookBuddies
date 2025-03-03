import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ReportScreen = () => {
  const navigation = useNavigation();
  const [selectedReason, setSelectedReason] = useState(null);

  const reasons = [
    "Products that are considered fraudulent",
    "Using images of other people's products",
    "The product was delivered too late",
    "Prohibited item",
    "Pirated products",
    "Others",
  ];

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.heading}>Make Report</Text>
      </View>

      {/* main body */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Select Reason</Text>

        {reasons.map((reason, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.reasonButton, selectedReason === reason && styles.selectedButton]}
            onPress={() => {
              setSelectedReason(reason);
              navigation.navigate("ReportDetails", { reason }); // nevigator
            }}
          >
            <Text style={styles.reasonText}>{reason}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#C6EEFF" },
  header: {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#6BC9FF", 
    paddingVertical: 8, // high
    marginTop: 80, // ลดช่องว่างด้านบน
    borderRadius: 10, 
    marginHorizontal: 10,
    elevation: 4,
    justifyContent: "center",
  },
  backButton: {
    padding: 8, 
    marginLeft: 10,
    marginRight: 15,
  },
  heading: {
    fontSize: 18, 
    fontWeight: "bold",
    color: "#000",
    flex: 2,
    paddingVertical: 5, 
  },
  content: { paddingHorizontal: 15, paddingTop: 20, alignItems: "center" },
  label: { fontSize: 16, fontWeight: "500", alignSelf: "flex-start", marginBottom: 8 }, 
  reasonButton: {
    width: "100%",
    paddingVertical: 15, 
    backgroundColor: "#FFFFFF",
    borderRadius: 10, 
    marginBottom: 12, 
    alignItems: "center",
  },
  selectedButton: { backgroundColor: "#9BDBF9" },
  reasonText: { fontSize: 14, fontWeight: "400" },
});

export default ReportScreen;
