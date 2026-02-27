import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MovieCard({ show, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: show.image?.medium }} style={styles.poster} />
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>{show.name}</Text>
        <Text style={styles.network}>{show.network?.name || 'Unknown'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', marginVertical: 10, alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 12, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5 },
  poster: { width: 120, height: 160, borderRadius: 8, backgroundColor: '#ddd' },
  info: { flex: 1, marginLeft: 14, paddingRight: 12 },
  title: { fontSize: 16, fontWeight: '700', color: '#fff' },
  network: { fontSize: 12, color: '#ddd', marginTop: 6 }
});
