import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const [name, setName] = useState('');
  const { login } = useContext(AuthContext);

  return (
    <LinearGradient colors={['#667eea', '#764ba2', '#f093fb']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🎬 MovieApp</Text>
        <Text style={styles.subtitle}>Your TV Show Companion</Text>
        <TextInput placeholder="Enter your name" value={name} onChangeText={setName} style={styles.input} placeholderTextColor="#999" />
        <TouchableOpacity style={styles.button} onPress={() => login(name || 'Guest')}>
          <Text style={styles.buttonText}>Enter App</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  card: { backgroundColor: 'rgba(255,255,255,0.15)', padding: 32, borderRadius: 20, width: '100%', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: '700', color: '#fff', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#e0e0e0', marginBottom: 24 },
  input: { width: '100%', padding: 14, borderWidth: 1, borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 10, marginBottom: 16, color: '#fff', fontSize: 16 },
  button: { backgroundColor: 'rgba(255,255,255,0.3)', padding: 14, borderRadius: 10, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 }
});
