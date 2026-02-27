import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Calendar from 'expo-calendar';

export default function CalendarScreen() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        const ids = calendars.map(c => c.id);
        const now = new Date();
        const later = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 365);
        const ev = await Calendar.getEventsAsync(ids, now, later);
        setEvents(ev);
      } catch (e) {
        console.warn(e);
      }
    })();
  }, []);

  return (
    <LinearGradient colors={['#667eea', '#a8edea', '#fed6e3']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <Text style={styles.header}>📅 Your Scheduled Episodes</Text>
      <FlatList data={events} keyExtractor={(i) => i.id} renderItem={({ item }) => (
        <View style={styles.event}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{new Date(item.startDate).toLocaleString()}</Text>
        </View>
      )} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 16, color: '#fff' },
  event: { padding: 14, borderBottomWidth: 1, borderColor: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: 8, borderRadius: 8 },
  title: { fontWeight: '600', color: '#fff', fontSize: 16 },
  date: { color: '#e0e0e0', marginTop: 6, fontSize: 14 }
});
