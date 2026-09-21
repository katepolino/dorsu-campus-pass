import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

interface ScanCounterProps {
  count: number;
  onIncrement: () => void;
  onReset: () => void;
}

export const ScanCounter: React.FC<ScanCounterProps> = ({ count, onIncrement, onReset }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Campus Gate Verification Log</Text>
    
    <View style={styles.counterDisplay}>
      <Text style={styles.label}>Today's Gate Entries:</Text>
      <Text style={styles.value}>{count}</Text>
    </View>

    <View style={styles.btnRow}>
      <Pressable style={styles.btnPrimary} onPress={onIncrement}>
        <Text style={styles.btnText}>+1 Scan at Gate</Text>
      </Pressable>
      <Pressable style={styles.btnSecondary} onPress={onReset}>
        <Text style={styles.btnSecText}>Reset Scans</Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#0F172A',
    marginBottom: 12,
  },
  counterDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  label: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '500',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F766E',
  },
  btnRow: {
    flexDirection: 'row',
    gap: 10,
  },
  btnPrimary: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
  },
  btnSecondary: {
    backgroundColor: '#E2E8F0',
    padding: 10,
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  btnSecText: {
    color: '#334155',
    fontWeight: 'bold',
    fontSize: 12,
  },
});