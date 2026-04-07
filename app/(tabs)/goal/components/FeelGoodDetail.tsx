import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView,
  Dimensions,
  Animated
} from 'react-native';
import { ArrowRight } from 'lucide-react';
import { Goal } from '../types';

const { width } = Dimensions.get('window');

export default function FeelGoodDetail({ goal }: { goal: Goal }) {
  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>Foods for 😊 {goal.title}</Text>
          <Text style={styles.heroSubtitle}>{goal.description}</Text>
        </View>
      </View>

      {/* Mascot Tip */}
      <View style={styles.tipSection}>
        <Text style={styles.tipText}>"{goal.mascotTip}"</Text>
      </View>

      {/* Super Power Foods */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.sectionIndicator} />
          <Text style={styles.sectionTitle}>Super Power Foods</Text>
        </View>

        <View style={styles.grid}>
          {goal.superFoods.map((food, i) => (
            <View key={food.name} style={styles.foodCard}>
              <View style={styles.foodImageContainer}>
                <Image 
                  source={{ uri: food.image }} 
                  style={styles.foodImage} 
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.foodName}>{food.name}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>GOOD CHOICE</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Try Less Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={[styles.sectionIndicator, { backgroundColor: '#FFD54F' }]} />
          <Text style={styles.sectionTitle}>Try Less</Text>
        </View>

        <View style={styles.tryLessCard}>
          <View style={styles.tryLessContent}>
            <View style={styles.badImageContainer}>
              <Image 
                source={{ uri: goal.tryLess.image }} 
                style={styles.badImage} 
                resizeMode="contain"
              />
            </View>
            <View style={styles.tryLessInfo}>
              <Text style={styles.badName}>{goal.tryLess.name}</Text>
              <Text style={styles.alternativeTip}>{goal.tryLess.alternative.tip}</Text>
              <View style={styles.tryThisRow}>
                <ArrowRight color="#FBC02D" size={16} />
                <Text style={styles.tryThisText}>Try a {goal.tryLess.alternative.name} instead!</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 100,
  },
  mascotTipContainer: {
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  mascotTip: {
    fontSize: 15,
    lineHeight: 22,
    color: '#92400E',
    fontWeight: '600',
  },
  heroSection: {
    marginBottom: 32,
    alignItems: 'center',
  },
  heroCard: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    borderBottomWidth: 4,
    borderBottomColor: '#FBC02D',
    width: '100%',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FBC02D',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '600',
    textAlign: 'center',
  },
  tipSection: {
    backgroundColor: 'rgba(251, 192, 45, 0.1)',
    padding: 20,
    borderRadius: 20,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: 'rgba(251, 192, 45, 0.2)',
    transform: [{ rotate: '-1deg' }],
  },
  tipText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FBC02D',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionIndicator: {
    width: 6,
    height: 32,
    borderRadius: 3,
    backgroundColor: '#FBC02D',
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#36392c',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  foodCard: {
    width: (width - 60) / 2,
    backgroundColor: '#f1f5f9',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  foodImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 12,
  },
  foodImage: {
    width: '100%',
    height: '100%',
  },
  foodName: {
    fontSize: 18,
    fontWeight: '900',
    color: '#36392c',
    textAlign: 'center',
    marginBottom: 8,
  },
  badge: {
    backgroundColor: '#FFFDE7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: '#FBC02D',
    fontSize: 10,
    fontWeight: '900',
  },
  tryLessCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  tryLessContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  badImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#f1f5f9',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  badImage: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  tryLessInfo: {
    flex: 1,
  },
  badName: {
    fontSize: 20,
    fontWeight: '900',
    color: '#36392c',
    marginBottom: 4,
  },
  alternativeTip: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    fontStyle: 'italic',
    lineHeight: 20,
    marginBottom: 8,
  },
  tryThisRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tryThisText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FBC02D',
  },
});
