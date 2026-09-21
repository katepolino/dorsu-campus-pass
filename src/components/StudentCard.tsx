import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StudentProfile } from '../types/student';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, isActive }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Image 
          source={require('../../assets/profilepic.jpg')} 
          style={styles.avatar} 
        />
        <View style={styles.details}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.idNumber}>ID: {student.idNumber}</Text>
          <Text style={styles.program}>{student.program}</Text>
          <Text style={styles.yearLevel}>{student.yearLevel}</Text>
        </View>
      </View>

      {/* Inline Status Badge */}
      <View style={[styles.badge, { backgroundColor: isActive ? '#D1FAE5' : '#FEE2E2' }]}>
        <Text style={{ color: isActive ? '#065F46' : '#991B1B', fontWeight: 'bold' }}>
          ● STATUS: {isActive ? 'VERIFIED ACTIVE PASS' : 'PASS SUSPENDED'}
        </Text>
      </View>

      {/* Campus Details */}
      <Text style={styles.campus}>Campus: {student.campus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#fff', borderRadius: 12, marginVertical: 10 },
  topRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatar: { width: 70, height: 70, borderRadius: 35, marginRight: 12 },
  details: { flex: 1 },
  name: { fontWeight: 'bold', fontSize: 16, color: '#1E293B' },
  idNumber: { color: '#0F766E', fontSize: 13, fontWeight: 'bold', marginVertical: 2 },
  program: { color: '#64748B', fontSize: 12 },
  yearLevel: { color: '#64748B', fontSize: 12 },
  badge: { padding: 8, borderRadius: 6, alignItems: 'center', marginVertical: 8 },
  campus: { color: '#64748B', fontSize: 11, textAlign: 'center', marginTop: 4 }
});