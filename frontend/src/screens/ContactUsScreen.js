import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const ContactUsScreen = () => {
  const handleSendMessage = () => {
    Alert.alert("Message Sent", "Your message has been sent successfully.");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Contact Information */}
      <View style={styles.contactInfo}>
        <Text style={styles.title}>Contact Us</Text>
        <View style={styles.contactItem}>
          <Ionicons name="call" size={20} color="#3366FF" style={styles.contactIcon} />
          <Text style={styles.contactText}>+012 345 678</Text>
        </View>
        <View style={styles.contactItem}>
          <Ionicons name="mail" size={20} color="#3366FF" style={styles.contactIcon} />
          <Text style={styles.contactText}>bookbuddies@gmail.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Ionicons name="location" size={20} color="#3366FF" style={styles.contactIcon} />
          <Text style={styles.contactText}>View on <Text style={styles.link}>Google Map</Text></Text>
        </View>
      </View>

      {/* Contact Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Get in Touch</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={20} color="#3366FF" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#999" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="call" size={20} color="#3366FF" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" placeholderTextColor="#999" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={20} color="#3366FF" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" placeholderTextColor="#999" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="chatbubbles" size={20} color="#3366FF" style={styles.inputIcon} />
          <TextInput
            style={styles.textArea}
            placeholder="Message"
            multiline
            numberOfLines={4}
            textAlignVertical="top" // Ensures text starts at the top
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>SEND MESSAGE</Text>
        </TouchableOpacity>
      </View>

      {/* Image Section */}
      <Image
        source={{ uri: 'https://vietnamteachingjobs.com/wp-content/uploads/2023/09/reading-levels-2.jpg' }} // Replace with your image URL
        style={styles.image}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#C6EEFF', 
  },
  contactInfo: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '# 333',
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactIcon: {
    marginRight: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    color: '#3366FF',
    textDecorationLine: 'underline',
  },
  formContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#F0F8FF', 
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  textArea: {
    flex: 1,
    height: 100,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#F0F8FF', // Light background for text area
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sendButton: {
    backgroundColor: '#3366FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginTop: 20,
  },
});

export default ContactUsScreen;