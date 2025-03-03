import React, { useState } from "react";
import { 
  View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image, 
  KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "You're inquiring about this book", sender: "system", timestamp: "Today" },
    { id: 2, text: "Hi, Are there any other products?", sender: "user", timestamp: "Just now" },
    { id: 3, text: "Yes sir, you can add this book to your cart.", sender: "other", timestamp: "Just now" }
  ]);

  const sendMessage = () => {
    if (inputText.trim() === "") return;
    const newMessage = { id: messages.length + 1, text: inputText, sender: "user", timestamp: "Just now" };
    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} // iOS ใช้ padding, Android ใช้ height
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            {/* 🔹 Header */}
            <View style={styles.userHeader}>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={24} color="#000" />
              </TouchableOpacity>
              <Image source={{ uri: 'https://warpfins.com/wp-content/uploads/2023/05/11-69.jpg' }} style={styles.profileImage} />
              <View style={styles.headerContent}>
                <Text style={styles.headerTitle}>Mark Lee</Text>
                <Text style={styles.headerSubtitle}>Active 4 minutes ago</Text>
              </View>
            </View>

            {/* 📜 ข้อความแชท (ScrollView) */}
            <ScrollView style={styles.chatContainer} contentContainerStyle={{ paddingBottom: 10 }}>
              {messages.map(message => (
                <View key={message.id} style={[
                  styles.messageRow,
                  message.sender === "user" ? styles.userMessageRow : styles.otherMessageRow
                ]}>
                  <View style={[
                    styles.messageBubble,
                    message.sender === "user" ? styles.userBubble : styles.otherBubble
                  ]}>
                    <Text style={styles.messageText}>{message.text}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Type a message..."
                value={inputText}
                onChangeText={setInputText}
              />
              <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                <Ionicons name="paper-plane" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C6EEFF",
    paddingTop: 80,
  },
  userHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#78C3FB",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  backButton: {
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#555",
  },
  dateContainer: {
    alignSelf: "center",
    backgroundColor: "#E1ECF4",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 12,
    color: "#333",
  },
  bookInfoContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  bookImage: {
    width: 50,
    height: 70,
    borderRadius: 5,
    marginRight: 10,
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  bookAuthor: {
    fontSize: 12,
    color: "#555",
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  messageRow: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "flex-end",
  },
  userMessageRow: {
    justifyContent: "flex-end",
  },
  otherMessageRow: {
    justifyContent: "flex-start",
  },
  messageBubble: {
    maxWidth: "70%",
    padding: 12,
    borderRadius: 20,
  },
  userBubble: {
    backgroundColor: "#78C3FB",
    borderBottomRightRadius: 0,
  },
  otherBubble: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 13,
    alignItems: "center",
    marginBottom: 70,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    elevation: 2,
  },
  sendButton: {
    backgroundColor: "#5856D7",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    elevation: 2,
  },
});

export default ChatScreen;
