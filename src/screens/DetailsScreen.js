import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import * as Notifications from 'expo-notifications';
import * as Calendar from 'expo-calendar';
import * as Permissions from 'expo-permissions';

export default function DetailsScreen({ route }) {
  const { show } = route.params;
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`https://api.tvmaze.com/shows/${show.id}/episodes`);
        setEpisodes(res.data);
      } catch (e) { console.warn(e); }
    })();
  }, []);

  const nextEp = episodes.find((e) => new Date(e.airstamp) > new Date());

  async function addToCalendarAndNotify() {
    try {
      const { status: notifStatus } = await Notifications.requestPermissionsAsync();
      const { status: calStatus } = await Calendar.requestCalendarPermissionsAsync();
      if (notifStatus !== 'granted' || calStatus !== 'granted') {
        Alert.alert('Permissions required', 'Please grant calendar and notification permissions.');
        return;
      }
      const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
      const defaultCal = calendars[0];
      const startDate = nextEp ? new Date(nextEp.airstamp) : new Date(Date.now() + 24*3600*1000);
      const endDate = new Date(startDate.getTime() + 60*60*1000);
      const eventId = await Calendar.createEventAsync(defaultCal.id, {
        title: `${show.name} - ${nextEp ? nextEp.name : 'Upcoming'}`,
        startDate,
        endDate,
        timeZone: 'UTC'
      });

      await Notifications.scheduleNotificationAsync({
        content: { title: `${show.name}`, body: `Episode: ${nextEp ? nextEp.name : 'Soon'}` },
        trigger: { seconds: 10 }
      });

      Alert.alert('Added', 'Event added to your calendar and notification scheduled.');
    } catch (e) {
      console.warn(e);
      Alert.alert('Error', 'Could not add calendar event. Make sure calendar permissions are granted.');
    }
  }

  return (
    <LinearGradient colors={['#f093fb', '#f5576c', '#667eea']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 12 }}>
        <Image source={{ uri: show.image?.original }} style={styles.poster} />
        <Text style={styles.title}>{show.name}</Text>
        <Text style={styles.summary}>{(show.summary || '').replace(/<[^>]+>/g, '')}</Text>
        <Text style={styles.heading}>Next Episode</Text>
        {nextEp ? (
          <View style={styles.episodeCard}>
            <Text style={styles.episodeName}>{nextEp.name}</Text>
            <Text style={styles.episodeDate}>{new Date(nextEp.airstamp).toLocaleString()}</Text>
          </View>
        ) : <Text style={styles.noEpisode}>No upcoming episode data available.</Text>}

        <TouchableOpacity style={styles.button} onPress={addToCalendarAndNotify}>
          <Text style={styles.buttonText}>Add to Calendar & Notify</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  poster: { width: '100%', height: 300, borderRadius: 12, backgroundColor: '#222' },
  title: { fontSize: 26, color: '#fff', marginTop: 16, fontWeight: '700' },
  summary: { color: '#f0f0f0', marginTop: 12, lineHeight: 22 },
  heading: { color: '#fff', marginTop: 20, fontWeight: '700', fontSize: 18 },
  episodeCard: { backgroundColor: 'rgba(255,255,255,0.15)', padding: 12, borderRadius: 8, marginTop: 8 },
  episodeName: { color: '#fff', fontWeight: '600', fontSize: 16 },
  episodeDate: { color: '#ddd', marginTop: 4, fontSize: 14 },
  noEpisode: { color: '#ccc', marginTop: 8 },
  button: { marginTop: 24, padding: 14, backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 }
});
