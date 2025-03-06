import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookExchange = () => {
    const navigation = useNavigation();

    const books = [
        {
            title: "All The Light We Cannot See",
            author: "Anthony Doerr",
            image: "https://m.media-amazon.com/images/I/81RBTG28sCL._AC_UY218_.jpg",
            rating: "★★★★☆",
            votes: "2,345 voters"
        },
        {
            title: "Where The Crawdads Sing",
            author: "Delia Owens",
            image: "https://loft.org/sites/default/files/images/where_the_crawdads_sing.jpg",
            rating: "★★★★★",
            votes: "1,288 voters"
        }
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>BookBuddies</Text>
                <TouchableOpacity style={styles.notificationButton}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1827/1827392.png' }}
                        style={styles.notificationIcon}
                    />
                </TouchableOpacity>
            </View>

            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271220.png' }}
                    style={styles.backIcon}
                />
            </TouchableOpacity>

            {/* Search Input */}
            <TextInput
                style={styles.searchInput}
                placeholder="Search for here..."
            />

            {/* Book List */}
            <View style={styles.bookList}>
                {books.map((book, index) => (
                    <View key={index} style={styles.bookItem}>
                        <Image
                            source={{ uri: book.image }}
                            style={styles.bookImage}
                        />
                        <View style={styles.bookDetails}>
                            <Text style={styles.bookTitle}>{book.title}</Text>
                            <Text style={styles.bookAuthor}>By {book.author}</Text>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.bookRating}>{book.rating}</Text>
                                <Text style={styles.bookVotes}>{book.votes}</Text>
                            </View>
                            <Text style={styles.bookDescription}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique
                            </Text>
                            <TouchableOpacity style={styles.addToCartButton}>
                                <Text style={styles.addToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C6EEFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center', // จัดให้อยู่ตรงกลางแนวนอน
        alignItems: 'center', // จัดให้อยู่ตรงกลางแนวตั้ง
        padding: 40,
        borderBottomColor: '#ddd',
        backgroundColor: '#C6EEFF',
        marginTop: -2,
        width: '100%',
    },    
    headerTitle: {
        fontSize: 24,
        padding:30,
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#3E494A',
    },
    notificationButton: {
        backgroundColor: 'transparent',
        paddingLeft: 10,
    },
    notificationIcon: {
        width: 24,
        height: 24,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: 'transparent',
    },
    backIcon: {
        width: 30,
        height: 30,
        marginTop: 68,
    },
    searchInput: {
        width: '80%',
        maxWidth: 600,
        alignSelf: 'flex-end',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 999,
        fontSize: 16,
        marginTop: -55,
        right: 20,
    },
    bookList: {
        marginTop: 50,
    },
    bookItem: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'flex-start',
        marginBottom: 30,
        marginTop: -3
    },
    bookImage: {
        width: 115,
        height: 176,
        marginBottom: 5,
        marginTop: 15,
    },
    bookDetails: {
        marginLeft: 20,
        marginTop: 5,
        flex: 5,
    },
    bookTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bookAuthor: {
        fontSize: 18,
        marginBottom: 10,
        marginTop: -10
    },
    ratingContainer: {
        flexDirection: 'row',
        marginBottom: -20,
        marginTop: -30,
    },
    bookRating: {
        fontSize: 20,
        color: 'orange',
        marginRight: 20,
        marginTop: 27,
    },
    bookVotes: {
        fontSize: 16,
        marginTop: 30
    },
    bookDescription: {
        fontSize: 16,
        marginBottom: 10,
        marginTop: 30
    },
    addToCartButton: {
        backgroundColor: '#3F51B5',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    addToCartText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default BookExchange;