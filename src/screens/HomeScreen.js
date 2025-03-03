import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons, AntDesign, FontAwesome, Feather } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const book = {
    image: "https://images.ctfassets.net/4cd45et68cgf/66jHylETPIz9txlh9atRry/099e37aa5e0005f39d896fd40ca0c564/all-the-light-we-cannot-see-9781501173219_hr20210920-4510-1vleniz.jpeg?w=2000",
    title: "All the Light We Cannot See",
    category: "Best Literature & Fiction",
    author: "By Delia Owens",
    postedBy: "Posted By Mark Lee",
    description: `NOW A NETFLIX LIMITED SERIES — from producer and director Shawn Levy (Stranger Things) starring Mark Ruffalo, Hugh Laurie, and newcomer Aria Mia Loberti ...`,
  };

  const recommendedBooks = [
    { id: 1, image: "https://www.ofm.co.th/blog/wp-content/uploads/2022/01/%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2-Le-Petit-Prince.jpg" },
    { id: 2, image: "https://www.ofm.co.th/blog/wp-content/uploads/2022/01/%E0%B8%84%E0%B8%B1%E0%B8%A1%E0%B8%A0%E0%B8%B5%E0%B8%A3%E0%B9%8C%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%84%E0%B8%B8%E0%B9%89%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2.jpg" },
    { id: 3, image: "https://www.ofm.co.th/blog/wp-content/uploads/2022/01/i-decided-to-live-as-myself.jpg" },
  ];

  return (
    <View style={styles.container}>
     

      <ScrollView contentContainerStyle={styles.content}>
        {/* name.book */}
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Image source={{ uri: book.image }} style={styles.bookImage} />

        <Text style={styles.category}>{book.category}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <Text style={styles.postedBy}>{book.postedBy}</Text>

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="shoppingcart" size={24} color="black" />
            <Text style={styles.iconLabel}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("ChatScreen")}>
            <Ionicons name="chatbubble-outline" size={24} color="black" />
            <Text style={styles.iconLabel}>Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="heart-o" size={24} color="black" />
            <Text style={styles.iconLabel}>Favorite</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("ReportScreen")}>
            <Feather name="flag" size={24} color="black" />
            <Text style={styles.iconLabel}>Report</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="share-social-outline" size={24} color="black" />
            <Text style={styles.iconLabel}>Share</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>{book.description}</Text>

        <Text style={styles.recommendedTitle}>You may also like</Text>
        <View style={styles.recommendedRow}>
          {recommendedBooks.map((item) => (
            <View key={item.id} style={styles.recommendedItem}>
              <Image source={{ uri: item.image }} style={styles.recommendedImage} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#C6EEFF" },
  content: { paddingHorizontal: 20, paddingVertical: 80, alignItems: "center" },

  bookTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10, 
  },
  bookImage: {
    width: 150,
    height: 230,
    borderRadius: 10,
    marginBottom: 10,
  },
  category: { fontSize: 16, color: "blue", textAlign: "center", marginTop: 5 },
  author: { fontSize: 16, fontWeight: "500", textAlign: "center", marginVertical: 3 },
  postedBy: { fontSize: 14, color: "gray", textAlign: "center", marginBottom: 10 },

  iconRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
    marginBottom: 15,
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
  },
  iconLabel: { fontSize: 12, marginTop: 3, color: "black", textAlign: "center" },

  description: {
    fontSize: 14,
    color: "#333",
    textAlign: "justify",
    lineHeight: 20,
    marginTop: 2,
  },

  recommendedTitle: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 10,
  },

  recommendedRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  recommendedItem: {
    width: "30%",
    alignItems: "center",
  },

  recommendedImage: {
    width: 110, 
    height: 160,
    borderRadius: 5,
  },
});

