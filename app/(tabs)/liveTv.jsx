import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LiveTv() {
  const [activeTab, setActiveTab] = useState('SeeMe');

  const renderContent = () => {
    switch (activeTab) {
      case 'SeeMe':
        return (
          <View style={styles.contentContainer}>
            <Image style={styles.placeholderImage} source={{ uri: 'https://via.placeholder.com/300x200' }} />
            <Text style={styles.contentTitle}>Your Feed is Empty</Text>
            <Text style={styles.contentSubText}>Be the first to upload a video!</Text>
          </View>
        );
      case 'MeTo':
        return (
          <View style={styles.contentContainer}>
            <Image style={styles.placeholderImage} source={{ uri: 'https://via.placeholder.com/300x200' }} />
            <Text style={styles.contentTitle}>No Videos Yet</Text>
            <Text style={styles.contentSubText}>Be the first to share your content with the community!</Text>
          </View>
        );
      case 'LiveTv':
        return (
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Image style={styles.placeholderImage} source={{ uri: 'https://via.placeholder.com/300x200' }} />
            <Text style={styles.contentTitle}>NBS TV</Text>
            <Text style={styles.contentSubText}>Watch live broadcast from a curated selection of TV stations around the world. Select a channel below to begin streaming.</Text>
            <View style={styles.channelCardList}>
              {['NBS TV - Local News', 'NTV - NTV Uganda', 'Al Jazeera - International News', 'BBC - BBC World News'].map((channel) => (
                <TouchableOpacity key={channel} style={styles.channelCard}>
                  <Text style={styles.channelText}>{channel}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        );
      case 'LiveStudio':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Live Studio Content</Text>
            <Text style={styles.contentSubText}>Go live and engage your audience!</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabBar}>
        {['SeeMe', 'MeTo', 'LiveTv', 'LiveStudio'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contentArea}>{renderContent()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f20' },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#16213e',
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#1f1f30',
  },
  activeTab: {
    backgroundColor: '#4a90e2',
  },
  tabText: {
    color: '#aaa',
    fontSize: 14,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contentArea: { flex: 1 },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  placeholderImage: {
    width: '100%',
    maxWidth: 350,
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  contentSubText: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
  },
  channelCardList: {
    width: '100%',
    alignItems: 'center',
  },
  channelCard: {
    width: '90%',
    backgroundColor: '#1f1f30',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  channelText: {
    color: '#fff',
    fontSize: 16,
  },
});
