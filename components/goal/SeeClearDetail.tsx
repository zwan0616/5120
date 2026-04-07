import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView,
  Dimensions
} from 'react-native';
import type { Goal } from './types';

const { width } = Dimensions.get('window');

export default function SeeClearDetail({ goal }: { goal: Goal }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroImageContainer}>
          <Image 
            source={{ uri: goal.image }} 
            style={styles.heroImage} 
            resizeMode="contain"
          />
          <Text style={styles.heroStar}>★</Text>
        </View>
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTitle}>Foods for 👓 {goal.title}</Text>
          <Text style={styles.heroSubtitle}>{goal.description}</Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>{goal.mascotTip}</Text>
          <View style={styles.tipTriangle} />
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
                  <View style={styles.starRow}>
                    <Text style={styles.star}>★</Text>
                    <Text style={styles.star}>★</Text>
                  </View>
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
              <Image 
                source={{ uri: goal.tryLess.image }} 
                style={styles.badEmojiImage} 
                resizeMode="contain"
              />
            </View>
            <View style={styles.tryLessInfo}>
              <Text style={styles.badName}>{goal.tryLess.name}</Text>
              <Text style={styles.alternativeTip}>{goal.tryLess.alternative.tip}</Text>
              <View style={styles.tryThisRow}>
                <Image 
                  source={{ uri: goal.tryLess.alternative.image }} 
                  style={styles.goodEmojiImage} 
                  resizeMode="contain"
                />
                <Text style={styles.tryThisText}>Try {goal.tryLess.alternative.name} instead!</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 100,
  },
  heroSection: {
    marginBottom: 40,
    alignItems: 'center',
  },
  heroImageContainer: {
    width: 192,
    height: 192,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 96,
  },
  heroImage: {
    width: '80%',
    height: '80%',
  },
  heroStar: {
    position: 'absolute',
    top: 8,
    right: 16,
    fontSize: 40,
    color: '#3b82f6',
  },
  heroTextContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#36392c',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#2196F3',
    fontWeight: '700',
    marginTop: 8,
    textAlign: 'center',
  },
  tipCard: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.05)',
    maxWidth: 320,
  },
  tipText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#36392c',
    textAlign: 'center',
    lineHeight: 24,
  },
  tipTriangle: {
    position: 'absolute',
    top: -12,
    left: '50%',
    marginLeft: -12,
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    transform: [{ rotate: '45deg' }],
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: 'rgba(0,0,0,0.05)',
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
    backgroundColor: '#2196F3',
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#2196F3',
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
  starRow: {
    flexDirection: 'row',
  },
  star: {
    color: '#3b82f6',
    fontSize: 14,
    marginLeft: 2,
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
    borderColor: 'rgba(25, 118, 210, 0.2)',
  },
  tryLessContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
  },
  badChoiceIcon: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(25, 118, 210, 0.05)',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  badEmojiImage: {
    width: '100%',
    height: '100%',
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
  goodEmojiImage: {
    width: 32,
    height: 32,
  },
  tryThisText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#2196F3',
  },
});
