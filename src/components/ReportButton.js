import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ReportButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A2B0DB",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: { fontSize: 14, color: "black" },
});

export default ReportButton;
