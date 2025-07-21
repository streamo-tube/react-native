import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const MOVIES = [
  {
    id: '1',
    title: 'Cybernetic Takedown',
    vj: 'VJ Junior',
    image: 'https://via.placeholder.com/120x180.png?text=Cybernetic',
    category: 'Action',
  },
  {
    id: '2',
    title: 'Desert Fury',
    vj: 'VJ Mark',
    image: 'https://via.placeholder.com/120x180.png?text=Desert+Fury',
    category: 'Action',
  },
  {
    id: '3',
    title: 'Street Velocity',
    vj: 'VJ Kevo',
    image: 'https://via.placeholder.com/120x180.png?text=Street+Velocity',
    category: 'Action',
  },
  {
    id: '4',
    title: 'Desert',
    vj: 'VJ Kevo',
    image: 'https://via.placeholder.com/120x180.png?text=Street+Velocity',
    category: 'Adventure',
  },
  {
    id: '5',
    title: 'Street Traveler',
    vj: 'VJ Kevo',
    image: 'https://via.placeholder.com/120x180.png?text=Street+Velocity',
    category: 'Adventure',
  },
  {
    id: '6',
    title: ' Velocity',
    vj: 'VJ Kevo',
    image: 'https://via.placeholder.com/120x180.png?text=Street+Velocity',
    category: 'Adventure',
  },
  {
    id: '7',
    title: 'try',
    vj: 'VJ Kevo',
    image: 'https://via.placeholder.com/120x180.png?text=Street+Velocity',
    category: 'Drama',
  },
  {
    id: '8',
    title: 'Street Velocity',
    vj: 'VJ Kevo',
    image: 'https://via.placeholder.com/120x180.png?text=Street+Velocity',
    category: 'Drama',
  },
  {
    id: '9',
    title: 'Street Velocity',
    vj: 'VJ Kevo',
    image: 'https://via.placeholder.com/120x180.png?text=Street+Velocity',
    category: 'Drama',
  },
  {
    id: '10',
    title: 'Street Velocity',
    vj: 'VJ Kevo',
    image: 'https://via.placeholder.com/120x180.png?text=Street+Velocity',
    category: 'Comedy',
  },
  {
    id: '11',
    title: 'Street Velocity',
    vj: 'VJ Kevo',
    image: 'https://via.placeholder.com/120x180.png?text=Street+Velocity',
    category: 'Comedy',
  },
  {
    id: '12',
    title: 'Street Velocity',
    vj: 'VJ Kevo',
    image: 'https://via.placeholder.com/120x180.png?text=Street+Velocity',
    category: 'Comedy',
  },
];

const CATEGORIES = ['Action', 'Adventure', 'Drama', 'Comedy'];
const VJS = [...new Set(MOVIES.map((movie) => movie.vj))];

const index = () =>{
    return (
        <ScrollView style={styles.container}>
             <Text style={styles.header}>Movies</Text>
       
             <TextInput
               placeholder="Search movies, categories, or VJs..."
               placeholderTextColor="#999"
               style={styles.searchInput}
             />
       
             <Text style={styles.subHeader}>Browse by Category</Text>
       
             {CATEGORIES.map((category) => (
               <View key={category}>
                 <Text style={styles.categoryTitle}>{category}</Text>
                 <FlatList
                   horizontal
                   data={MOVIES.filter((movie) => movie.category === category)}
                   keyExtractor={(item) => item.id}
                   showsHorizontalScrollIndicator={false}
                   renderItem={({ item }) => (
                     <TouchableOpacity style={styles.movieCard}>
                       <Image
                         source={{ uri: item.image }}
                         style={styles.movieImage}
                         resizeMode="cover"
                       />
                       <Text style={styles.movieTitle}>{item.title}</Text>
                       <Text style={styles.movieVJ}>{item.vj}</Text>
                     </TouchableOpacity>
                   )}
                 />
               </View>
             ))}
       
             <Text style={styles.subHeader}>Browse by VJ</Text>
       
             {VJS.map((vj) => (
               <View key={vj}>
                 <Text style={styles.categoryTitle}>{vj}</Text>
                 <FlatList
                   horizontal
                   data={MOVIES.filter((movie) => movie.vj === vj)}
                   keyExtractor={(item) => item.id}
                   showsHorizontalScrollIndicator={false}
                   
                   renderItem={({ item }) => (
                     <TouchableOpacity style={styles.movieCard}>
                       <Image
                         source={{ uri: item.image }}
                         style={styles.movieImage}
                         resizeMode="cover"
                       />
                       <Text style={styles.movieTitle}>{item.title}</Text>
                       <Text style={styles.movieVJ}>{item.category}</Text>
                     </TouchableOpacity>
                   )}
                 />
               </View>
             ))}
       
           </ScrollView>
    )
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
  subHeader: {
    color: '#4a90e2',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  movieCard: {
    marginRight: 12,
    width: 120,
  },
  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  movieTitle: {
    color: '#fff',
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  movieVJ: {
    color: '#aaa',
    fontSize: 12,
  },
});


export default index