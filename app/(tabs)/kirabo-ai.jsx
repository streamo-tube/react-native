import { useState } from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function KiraboAi() {
  const [inputText, setInputText] = useState('');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const drawerWidth = new Animated.Value(0);

  const toggleDrawer = () => {
    Animated.timing(drawerWidth, {
      toValue: drawerVisible ? 0 : 200,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setDrawerVisible(!drawerVisible);
    });
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Kirabo AI</Text>

        <Image
          source={{ uri: 'https://via.placeholder.com/350x200.png?text=Kirabo+AI' }}
          style={styles.bannerImage}
          resizeMode="cover"
        />

        <Text style={styles.description}>
          Welcome to Kirabo AI — your smart assistant for personalized content and recommendations.
        </Text>

        <View style={styles.cardGrid}>
          {['Ask a Question', 'Generate Image', 'Get Movie Suggestion', 'Music Recommender'].map(
            (item) => (
              <TouchableOpacity key={item} style={styles.cardButton}>
                <Text style={styles.cardText}>{item}</Text>
              </TouchableOpacity>
            )
          )}
        </View>

        <TextInput
          placeholder="Type your prompt here..."
          placeholderTextColor="#999"
          value={inputText}
          onChangeText={setInputText}
          style={styles.input}
        />

        <TouchableOpacity style={styles.drawerToggle} onPress={toggleDrawer}>
          <Text style={styles.drawerToggleText}>{drawerVisible ? 'Hide History' : 'Show History'}</Text>
        </TouchableOpacity>
      </ScrollView>

      <Animated.View style={[styles.drawer, { width: drawerWidth }]}>
        <Text style={styles.drawerHeader}>History</Text>
        {['“What is Kirabo?”', '“Show me trending music.”', '“Suggest a movie for tonight.”'].map(
          (query) => (
            <View key={query} style={styles.historyItem}>
              <Text style={styles.historyText}>{query}</Text>
            </View>
          )
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, flexDirection: 'row' },
  container: {
    flexGrow: 1,
    backgroundColor: '#0f0f20',
    padding: 16,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 20,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardButton: {
    backgroundColor: '#1f1f30',
    padding: 20,
    borderRadius: 12,
    width: '48%',
    marginBottom: 12,
  },
  cardText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#1f1f30',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  drawerToggle: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#1f1f30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  drawerToggleText: {
    color: '#fff',
    fontSize: 14,
  },
  drawer: {
    backgroundColor: '#1a1a2e',
    padding: 16,
    borderLeftWidth: 1,
    borderLeftColor: '#333',
  },
  drawerHeader: {
    color: '#4a90e2',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  historyItem: {
    backgroundColor: '#1f1f30',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  historyText: {
    color: '#aaa',
    fontSize: 14,
  },
});
