import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const MUSIC_TRACKS = [
  { id: '1', title: 'Midnight Drive', artist: 'Synthwave Dreams', image: 'https://via.placeholder.com/150x150.png?text=Midnight+Drive' },
  { id: '2', title: 'Ocean Breeze', artist: 'Chill Vibes Only', image: 'https://via.placeholder.com/150x150.png?text=Ocean+Breeze' },
  { id: '3', title: 'Coffee Shop Jazz', artist: 'Jazzy Moods', image: 'https://via.placeholder.com/150x150.png?text=Coffee+Shop+Jazz' },
  { id: '4', title: 'Forest Lullaby', artist: 'Nature Sounds', image: 'https://via.placeholder.com/150x150.png?text=Forest+Lullaby' },
  { id: '5', title: 'Cybernetic Pulse', artist: 'Future Funk', image: 'https://via.placeholder.com/150x150.png?text=Cybernetic+Pulse' },
  { id: '6', title: 'Desert Sands', artist: 'World Beats', image: 'https://via.placeholder.com/150x150.png?text=Desert+Sands' },
];

export default function Music() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Music</Text>

      <TextInput
        placeholder="Search songs, artists..."
        placeholderTextColor="#999"
        style={styles.searchInput}
      />

      <FlatList
        data={MUSIC_TRACKS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.trackCard}>
            <Image
              source={{ uri: item.image }}
              style={styles.trackImage}
              resizeMode="cover"
            />
            <Text style={styles.trackTitle}>{item.title}</Text>
            <Text style={styles.trackArtist}>{item.artist}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f20',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#1f1f30',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    marginBottom: 24,
  },
  trackCard: {
    flex: 1,
    margin: 8,
  },
  trackImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  trackTitle: {
    color: '#fff',
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  trackArtist: {
    color: '#aaa',
    fontSize: 12,
  },
});
