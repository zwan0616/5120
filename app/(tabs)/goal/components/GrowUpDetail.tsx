import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView,
  Dimensions
} from 'react-native';
import { ArrowRight } from 'lucide-react';
import { Goal } from '../types';

const { width } = Dimensions.get('window');

export default function GrowUpDetail({ goal }: { goal: Goal }) {
  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Foods for 🌱 {goal.title}</Text>
        <Text style={styles.heroSubtitle}>{goal.description}</Text>
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
              <View style={styles.imageContainer}>
                <Image 
                  source={{ uri: food.image }} 
                  style={styles.foodImage} 
                  resizeMode="contain"
                />
              </View>
              <View style={styles.foodInfo}>
                <View style={styles.foodTitleRow}>
                  <Text style={styles.foodName}>{food.name}</Text>
                  <Text style={styles.star}>★★</Text>
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
            {/* Bad Choice */}
            <View style={styles.choiceColumn}>
              <View style={styles.badImageContainer}>
                <Image 
                  source={{ uri: goal.tryLess.image }} 
                  style={styles.badImage} 
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.choiceName}>{goal.tryLess.name}</Text>
            </View>

            {/* Transition */}
            <View style={styles.transitionColumn}>
              <Text style={styles.tipText}>{goal.tryLess.alternative.tip}</Text>
              <ArrowRight color="#3b82f6" size={32} />
              <Text style={styles.tryThisText}>TRY THIS INSTEAD!</Text>
            </View>

            {/* Good Choice */}
            <View style={styles.choiceColumn}>
              <View style={styles.goodImageContainer}>
                <Image 
                  source={{ uri: goal.tryLess.alternative.image }} 
                  style={styles.goodImage} 
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.goodChoiceName}>{goal.tryLess.alternative.name}</Text>
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
  },
  heroSection: {
    marginBottom: 32,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#36392c',
    textAlign: 'center',
    lineHeight: 40,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#64748b',
    fontWeight: '600',
    marginTop: 8,
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
    backgroundColor: '#4CAF50',
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
  imageContainer: {
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
    fontSize: 14,
  },
  badge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#2E7D32',
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
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
  },
  choiceColumn: {
    alignItems: 'center',
  },
  badImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#f1f5f9',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginBottom: 8,
  },
  badImage: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  choiceName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#64748b',
  },
  transitionColumn: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 20,
    marginBottom: 12,
  },
  tryThisText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#3b82f6',
    marginTop: 8,
    letterSpacing: 1,
  },
  goodImageContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#E3F2FD',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 12,
    borderWidth: 6,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  goodImage: {
    width: '100%',
    height: '100%',
  },
  goodChoiceName: {
    fontSize: 22,
    fontWeight: '900',
    color: '#36392c',
  },
});
