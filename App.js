import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button, FlatList, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import SortButton from './SortButton';


export default function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [publisher, setPublisher] = useState('');
  const [isbn, setIsbn] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [image, setImage] = useState(null);


  const addBook = () => {
    setBooks([...books, { id: Date.now().toString(), title, author, publicationDate, publisher, isbn }]);
    setTitle('');
    setAuthor('');
    setPublicationDate('');
    setPublisher('');
    setIsbn('');
    setSelectedBookId(null);
    setImage(null);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const selectBook = (id) => {
    setSelectedBookId(`edit-${id}`);
  };

  const sortBooks = (sortFn) => {
    const sortedBooks = [...books].sort(sortFn);
    setBooks(sortedBooks);
    setSortOrder(sortFn);
  };



  const renderHomeScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>My Books</Text>
        <View style={styles.header}>
          <View style={styles.sortButtonsContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <View style={styles.sortButtonsContainer}>
            <SortButton label="A-Z" onPress={() => sortBooks((a, b) => a.title.localeCompare(b.title))} />
            <SortButton label="Z-A" onPress={() => sortBooks((a, b) => b.title.localeCompare(a.title))} />
            <SortButton label="Latest" onPress={() => sortBooks((a, b) => b.publicationDate.localeCompare(a.publicationDate))} />
            <SortButton label="Oldest" onPress={() => sortBooks((a, b) => a.publicationDate.localeCompare(b.publicationDate))} />
          </View>
        </View>
        <Button title="Add Book" onPress={() => setSelectedBookId('add')} />
        <FlatList
          data={books.filter((book) => {
            const searchTerms = searchQuery.toLowerCase().split(' ');
            return searchTerms.every((term) => Object.values(book).some((value) => value.toLowerCase().includes(term)));
          })}
          numColumns={1}
          renderItem={({ item }) => (
            <View style={styles.bookContainer}>
              <View style={styles.book}>
                <View style={styles.bookImageContainer}>
                  {item.image && <Image source={{ uri: item.image }} style={styles.bookImage} />}
                </View>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text>Author: {item.author}</Text>
                <Text>Publication Date: {item.publicationDate}</Text>
                <Text>Publisher: {item.publisher}</Text>
                <Text>ISBN: {item.isbn}</Text>
                <View style={styles.bookButtons}>
                  <Button title="Edit" onPress={() => selectBook(item.id)} />
                  <Button title="Delete" onPress={() => deleteBook(item.id)} />
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  };
  const renderAddBookScreen = () => {
    const selectedBookIdParts = selectedBookId.split('-');
    const isEditMode = selectedBookIdParts[0] === 'edit';
    const selectedBook = isEditMode ? books.find((book) => book.id === selectedBookIdParts[1]) : null;

    const handleTitleChange = (text) => setTitle(text !== '' ? text : (selectedBook ? selectedBook.title : ''));
    const handleAuthorChange = (text) => setAuthor(text !== '' ? text : (selectedBook ? selectedBook.author : ''));
    const handlePublicationDateChange = (text) => {
      let formattedText = text.replace(/[^0-9]/g, ''); // remove non-numeric characters

      // Limit day to 31
      if (formattedText.length > 2) {
        const day = parseInt(formattedText.slice(0, 2));
        if (day > 31) {
          formattedText = '31' + formattedText.slice(2);
        }
      }

      // Limit month to 12
      if (formattedText.length > 4) {
        const month = parseInt(formattedText.slice(2, 4));
        if (month > 12) {
          formattedText = formattedText.slice(0, 2) + '12' + formattedText.slice(4);
        }
      }

      // Format date with slashes
      if (formattedText.length > 2) {
        formattedText = formattedText.slice(0, 2) + '/' + formattedText.slice(2);
      }
      if (formattedText.length > 5) {
        formattedText = formattedText.slice(0, 5) + '/' + formattedText.slice(5);
      }

      setPublicationDate(formattedText);
    };
    const handlePublisherChange = (text) => setPublisher(text !== '' ? text : (selectedBook ? selectedBook.publisher : ''));
    const handleIsbnChange = (text) => setIsbn(text !== '' ? text : (selectedBook ? selectedBook.isbn : ''));
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    };


    const handleCancel = () => {
      setTitle('');
      setAuthor('');
      setPublicationDate('');
      setPublisher('');
      setIsbn('');
      setSelectedBookId(null);
    };

    const handleSave = () => {
      if (title.trim() === '' || author.trim() === '' || publicationDate.trim() === '' || publisher.trim() === '' || isbn.trim() === '') {
        alert('Please fill in all fields');
        return;
      }

      if (isEditMode) {
        const updatedBooks = books.map((book) => {
          if (book.id === selectedBook.id) {
            return {
              ...book,
              title,
              author,
              publicationDate,
              publisher,
              isbn,
              image,
            };
          } else {
            return book;
          }
        });
        setBooks(updatedBooks);
      } else {
        setBooks([...books, { id: Date.now().toString(), title, author, publicationDate, publisher, isbn, image }]);
      }
      setTitle('');
      setAuthor('');
      setPublicationDate('');
      setPublisher('');
      setIsbn('');
      setSelectedBookId(null);
      setImage(null);
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{isEditMode ? 'Edit Book' : 'Add Book'}</Text>
        {selectedBook && (
          <View style={styles.currentBook}>
            <Text style={styles.currentBookTitle}>{selectedBook.title}</Text>
            <Text>Author: {selectedBook.author}</Text>
            <Text>Publication Date: {selectedBook.publicationDate}</Text>
            <Text>Publisher: {selectedBook.publisher}</Text>
            <Text>ISBN: {selectedBook.isbn}</Text>
          </View>
        )}
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title ?? selectedBook?.title ?? ''}
          onChangeText={handleTitleChange}
          width={200}
        />
        <TextInput
          style={styles.input}
          placeholder="Author"
          value={author ?? selectedBook?.author ?? ''}
          onChangeText={handleAuthorChange}
          width={200}
        />
        <TextInput
          style={styles.input}
          placeholder="Publication Date (dd/mm/yyyy)"
          value={publicationDate ?? selectedBook?.publicationDate ?? ''}
          onChangeText={handlePublicationDateChange}
          maxLength={10}
          width={200}
        />
        <TextInput
          style={styles.input}
          placeholder="Publisher"
          value={publisher ?? selectedBook?.publisher ?? ''}
          onChangeText={handlePublisherChange}
          width={200}
        />
        <TextInput
          style={styles.input}
          placeholder="ISBN"
          value={isbn ?? selectedBook?.isbn ?? ''}
          onChangeText={handleIsbnChange}
          width={200}
        />
        <View style={styles.imagePreviewContainer}>
          {image && <Image source={{ uri: image }} style={styles.bookImage} />}
          <Button title="Add Image" onPress={pickImage} />
        </View>
        <View style={styles.buttons}>
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={handleCancel} color={'red'} />
        </View>
      </View>
    );
  };

  return selectedBookId ? renderAddBookScreen() : renderHomeScreen();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#0095c2',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '40%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  bookContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  book: {
    width: '95%',
    height: '95%',
    padding: 12,
    margin: 4,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    height: 40,
    overflow: 'hidden',
    ellipsizeMode: 'tail',
  },
  bookButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currentBook: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  bookInfo: {
    height: 70,
    overflow: 'hidden',
  },
  currentBookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textDecorationLine: 'underline',
  },
  header: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ff9c63',
  },
  sortButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    height: 40,
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  imagePreviewContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  bookImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});