import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Bus, Navigation, Clock, Wallet } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const features = [
  {
    icon: Bus,
    title: 'Public Transit Routes',
    description: 'Get step-by-step directions for buses, BRT, keke, and danfo',
  },
  {
    icon: Navigation,
    title: 'Live Traffic Updates',
    description: 'Real-time traffic data to plan your journey better',
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Find the fastest routes with our AI-powered suggestions',
  },
  {
    icon: Wallet,
    title: 'Fare Estimates',
    description: 'Know the cost before you travel',
  },
];

export default function Onboarding() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>LaraGo</Text>
        <Text style={styles.subtitle}>Your AI Transit Assistant</Text>
      </View>

      <View style={styles.features}>
        {features.map((feature, index) => (
          <Animated.View
            key={feature.title}
            entering={FadeInDown.delay(index * 200)}
            style={styles.featureCard}
          >
            <feature.icon size={32} color="#007AFF" />
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
          </Animated.View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    color: '#007AFF',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: '#666',
    marginTop: 8,
  },
  features: {
    marginTop: 60,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    width: width - 40,
  },
  featureText: {
    marginLeft: 16,
  },
  featureTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  featureDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 40,
  },
  buttonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#fff',
  },
});