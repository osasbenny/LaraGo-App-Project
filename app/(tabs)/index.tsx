import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { MapPin, Mic, Search } from 'lucide-react-native';

export default function HomeScreen() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <View style={styles.container}>
      {Platform.OS !== 'web' ? (
        <View style={styles.map}>
          <Text style={styles.mapPlaceholder}>Map will be displayed here on mobile devices</Text>
        </View>
      ) : (
        <View style={styles.webMap}>
          <Text style={styles.mapPlaceholder}>Interactive map coming soon for web</Text>
        </View>
      )}
      
      <View style={styles.searchContainer}>
        <View style={styles.searchHeader}>
          <Text style={styles.greeting}>Hello! 👋</Text>
          <Text style={styles.question}>Where would you like to go?</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <MapPin size={20} color="#007AFF" />
            <TextInput
              style={styles.input}
              placeholder="Current location"
              value={origin}
              onChangeText={setOrigin}
            />
            <TouchableOpacity>
              <Mic size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.inputWrapper}>
            <MapPin size={20} color="#FF3B30" />
            <TextInput
              style={styles.input}
              placeholder="Where to?"
              value={destination}
              onChangeText={setDestination}
            />
            <TouchableOpacity>
              <Mic size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.searchButton}>
          <Search size={20} color="#fff" />
          <Text style={styles.searchButtonText}>Find Routes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webMap: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholder: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666',
  },
  searchContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  searchHeader: {
    marginBottom: 20,
  },
  greeting: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666',
  },
  question: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#333',
    marginTop: 4,
  },
  inputContainer: {
    gap: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 12,
    gap: 12,
  },
  input: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    gap: 8,
  },
  searchButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});