import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState('batman');
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const fade = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fade, { toValue: 1, duration: 3000, useNativeDriver: true }),
        Animated.timing(fade, { toValue: 0, duration: 3000, useNativeDriver: true })
      ])
    ).start();
  }, []);

  const search = async (q) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`);
      setShows(res.data.map((r) => r.show));
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { search(query); }, []);

  return (
    <LinearGradient colors={['#667eea', '#764ba2', '#f093fb']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <Animated.View style={[styles.overlay, { opacity: fade }]} />
      <View style={styles.content}>
        <TextInput style={styles.input} placeholder="Search shows..." placeholderTextColor="#aaa" value={query} onChangeText={setQuery} onSubmitEditing={() => search(query)} />
        {loading ? <ActivityIndicator size="large" color="#fff" /> : (
          <FlatList data={shows} keyExtractor={(i) => String(i.id)} renderItem={({ item }) => (
            <MovieCard show={item} onPress={() => navigation.navigate('Details', { show: item })} />
          )} />
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)' },
  content: { flex: 1, padding: 12 },
  input: { backgroundColor: 'rgba(255,255,255,0.9)', padding: 12, borderRadius: 12, marginBottom: 12, fontSize: 16, color: '#333' }
});
