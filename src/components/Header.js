import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from
"react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const Header = ({ title }) => {
    const navigation = useNavigation();

    return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#78C3FB" />
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}
style={styles.icon}>
        <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity style={styles.icon}>
    <Ionicons name="notifications-outline" size={24} color="black"
/>

            </TouchableOpacity>
        </View>
    </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#87CEEB",
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingTop: StatusBar.currentHeight || 20, // เผื่อไว้สำหรับอุปกรณ์ที่ไม่มี
    StatusBar
    },
        title: {
            fontSize: 20,
            fontWeight: "bold",
            color: "#3E494A",
    },
    icon: {
        padding: 5,
        },
    });
    
    export default Header;