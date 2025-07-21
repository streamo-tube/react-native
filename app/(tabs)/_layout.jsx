import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'index':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'kirabo-ai':
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              break;
            case 'liveTv':
              iconName = focused ? 'tv' : 'tv-outline';
              break;
            case 'music':
              iconName = focused ? 'musical-notes' : 'musical-notes-outline';
              break;
            case 'movies':
              iconName = focused ? 'film' : 'film-outline';
              break;
            default:
              iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#16213e', // Dark blue background
          borderTopWidth: 0,
          height: 60,
        },
        tabBarActiveTintColor: '#4a90e2', // Light blue active color
        tabBarInactiveTintColor: '#aaa', // Grey inactive color
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="kirabo-ai" />
      <Tabs.Screen name="liveTv" />
      <Tabs.Screen name="music" />
      <Tabs.Screen name="movies" />
    </Tabs>
  );
}
