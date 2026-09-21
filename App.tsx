import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { StudentCard } from './src/components/StudentCard';
import { ScanCounter } from './src/components/ScanCounter';
import { StudentProfile } from './src/types/student';

const studentData: StudentProfile = {
  name: 'JUAN CARLOS D. DELA CRUZ',
  idNumber: '2024-008492-MT',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3rd Year — Section A',
  guangPassId: 'GP-9982',
  campus: 'Main Campus (Guang-guang, Mati City)'
};

export default function App() {
  const [count, setCount] = useState<number>(3);
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>DAVAO ORIENTAL STATE UNIVERSITY</Text>
          <Text style={styles.headerSub}>FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY</Text>
          
          <View style={styles.pillBadge}>
            <Text style={styles.pillText}>OFFICIAL STUDENT DIGITAL PASS • AY 2026–2027</Text>
          </View>
        </View>

        {/* Student Card Component */}
        <StudentCard student={studentData} isActive={isActive} />

        {/* Gate Counter Log Component */}
        <ScanCounter 
          count={count} 
          onIncrement={() => setCount(prev => prev + 1)} 
          onReset={() => setCount(0)} 
        />

        {/* Pass Suspension Toggle Button */}
        <Pressable 
          style={[styles.toggleBtn, { backgroundColor: isActive ? '#FEE2E2' : '#D1FAE5' }]} 
          onPress={() => setIsActive(prev => !prev)}
        >
          <Text style={[styles.toggleText, { color: isActive ? '#991B1B' : '#065F46' }]}>
            {isActive ? '⚠️ Simulate Pass Suspension' : '✅ Reactivate Pass'}
          </Text>
        </Pressable>

        {/* Peer Component Demo Button */}
        <Pressable style={styles.peerBtn} onPress={() => alert('Peer Component Demo Clicked!')}>
          <Text style={styles.peerText}>Show Peer Component Demo</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E2E8F0',
  },
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  header: { 
    backgroundColor: '#008080', 
    padding: 16, 
    borderRadius: 8, 
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#D97706',
    marginBottom: 10,
  },
  headerTitle: { color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 14 },
  headerSub: { color: '#E0F2FE', fontSize: 9, marginTop: 2, textAlign: 'center' },
  pillBadge: { 
    backgroundColor: '#005F5F', 
    paddingHorizontal: 12, 
    paddingVertical: 4, 
    borderRadius: 12, 
    marginTop: 10 
  },
  pillText: { color: '#E0F2FE', fontSize: 9, fontWeight: 'bold' },
  toggleBtn: { 
    marginTop: 12, 
    padding: 12, 
    borderRadius: 6, 
    alignItems: 'center' 
  },
  toggleText: { fontWeight: 'bold', fontSize: 13 },
  peerBtn: { 
    marginTop: 8, 
    backgroundColor: '#FFFFFF', 
    padding: 12, 
    borderRadius: 6, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#CBD5E1' 
  },
  peerText: { color: '#0F766E', fontWeight: 'bold', fontSize: 13 }
});