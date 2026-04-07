/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Goal } from '../index';

interface ThinkFastDetailProps {
  goal: Goal;
  onBack: () => void;
}

export default function ThinkFastDetail({ goal }: ThinkFastDetailProps) {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      {/* Mascot Tip */}
      <View style={styles.mascotTipContainer}>
        <Text style={styles.mascotTip}>{goal.mascotTip}</Text>
      </View>

      {/* Super Foods Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Super Foods</Text>
        <Text style={styles.sectionDescription}>{goal.description}</Text>
        
        {goal.superFoods.map((food, index) => (
          <View key={index} style={styles.foodCard}>
            <Image source={{ uri: food.image }} style={styles.foodImage} />
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.foodDescription}>{food.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Try Less Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Try Less Of This</Text>
        <View style={styles.tryLessCard}>
          <Image source={{ uri: goal.tryLess.image }} style={styles.tryLessImage} />
          <Text style={styles.tryLessName}>{goal.tryLess.name}</Text>
        </View>

        <View style={styles.alternativeContainer}>
          <Text style={styles.alternativeTitle}>Better Choice:</Text>
          <View style={styles.alternativeCard}>
            <Image source={{ uri: goal.tryLess.alternative.image }} style={styles.alternativeImage} />
            <View style={styles.alternativeInfo}>
              <Text style={styles.alternativeName}>{goal.tryLess.alternative.name}</Text>
              <Text style={styles.alternativeTip}>{goal.tryLess.alternative.tip}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
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
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#B45309',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 16,
  },
  foodCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  foodImage: {
    width: 100,
    height: 100,
  },
  foodInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  foodName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  foodDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  tryLessCard: {
    backgroundColor: '#FEE2E2',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  tryLessImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 12,
  },
  tryLessName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#DC2626',
  },
  alternativeContainer: {
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    padding: 16,
  },
  alternativeTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#92400E',
    marginBottom: 12,
  },
  alternativeCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alternativeImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  alternativeInfo: {
    flex: 1,
    marginLeft: 16,
  },
  alternativeName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#92400E',
    marginBottom: 4,
  },
  alternativeTip: {
    fontSize: 13,
    color: '#78350F',
    lineHeight: 18,
  },
});
