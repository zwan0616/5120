import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView,
  Dimensions
} from 'react-native';
import type { Goal } from '../types';

const { width } = Dimensions.get('window');

export default function ThinkFastDetail({ goal }: { goal: Goal }) {
  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>Foods for 🧠 {goal.title}</Text>
          <Text style={styles.heroSubtitle}>{goal.description}</Text>
        </View>
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
              <View style={styles.foodInfo}>
                <View style={styles.foodTitleRow}>
                  <Text style={styles.foodName}>{food.name}</Text>
                  <Text style={styles.star}>★</Text>
                </View>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>GOOD CHOICE</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Try Less Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={[styles.sectionIndicator, { backgroundColor: '#FF8A65' }]} />
          <Text style={styles.sectionTitle}>Try Less</Text>
        </View>

        <View style={styles.tryLessCard}>
          <View style={styles.tryLessContent}>
            <View style={styles.badChoiceIcon}>
              <Text style={styles.badEmoji}>🍩</Text>
            </View>
            <View style={styles.tryLessInfo}>
              <Text style={styles.badName}>{goal.tryLess.name}</Text>
              <Text style={styles.alternativeTip}>{goal.tryLess.alternative.tip}</Text>
              <View style={styles.tryThisRow}>
                <Text style={styles.goodEmoji}>🫐</Text>
                <Text style={styles.tryThisText}>Try {goal.tryLess.alternative.name} instead!</Text>
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
    borderLeftColor: '#92400E',
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
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    width: '100%',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#36392c',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#3b82f6',
    fontWeight: '700',
    textAlign: 'center',
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
    backgroundColor: '#3b82f6',
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#36392c',
  },
  grid: {
    gap: 16,
  },
  foodCard: {
    backgroundColor: '#f1f5f9',
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
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
    marginRight: 20,
  },
  foodImage: {
    width: '100%',
    height: '100%',
  },
  foodInfo: {
    flex: 1,
  },
  foodTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  foodName: {
    fontSize: 20,
    fontWeight: '900',
    color: '#36392c',
  },
  star: {
    color: '#3b82f6',
    fontSize: 18,
  },
  badge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#1976D2',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
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
    alignItems: 'flex-start',
    gap: 20,
  },
  badChoiceIcon: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(59, 130, 246, 0.05)',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badEmoji: {
    fontSize: 48,
    opacity: 0.5,
  },
  tryLessInfo: {
    flex: 1,
  },
  badName: {
    fontSize: 20,
    fontWeight: '900',
    color: '#36392c',
    marginBottom: 8,
  },
  alternativeTip: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
    fontStyle: 'italic',
    lineHeight: 24,
    marginBottom: 16,
  },
  tryThisRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  goodEmoji: {
    fontSize: 24,
  },
  tryThisText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#3b82f6',
  },
});
