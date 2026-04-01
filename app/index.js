import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>🍔</Text>
        <Text style={styles.titulo}>Cantina FIAP</Text>
        <Text style={styles.subtitulo}>Sua pausa para o café, sem filas e sem estresse.</Text>
      </View>

      <View style={styles.menuRapido}>
        <TouchableOpacity style={styles.cardGrande} onPress={() => router.push('/cardapio')}>
          <Ionicons name="restaurant" size={40} color="#fff" />
          <Text style={styles.cardTexto}>Ver Cardápio</Text>
        </TouchableOpacity>

        <View style={styles.linha}>
          <TouchableOpacity style={styles.cardPequeno} onPress={() => router.push('/perfil')}>
            <Ionicons name="wallet" size={24} color="#E83D84" />
            <Text style={styles.cardTextoPequeno}>Saldo</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.cardPequeno}>
            <Ionicons name="time" size={24} color="#E83D84" />
            <Text style={styles.cardTextoPequeno}>Histórico</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA', padding: 20 },
  header: { marginTop: 60, marginBottom: 40, alignItems: 'center' },
  emoji: { fontSize: 50 },
  titulo: { fontSize: 32, fontWeight: '800', color: '#1A1A1A', marginTop: 10 },
  subtitulo: { fontSize: 16, color: '#777', textAlign: 'center', marginTop: 10, paddingHorizontal: 20 },
  menuRapido: { gap: 15 },
  cardGrande: { backgroundColor: '#E83D84', height: 180, borderRadius: 25, justifyContent: 'center', alignItems: 'center', elevation: 8, shadowColor: '#E83D84', shadowOpacity: 0.3, shadowRadius: 10 },
  cardTexto: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  linha: { flexDirection: 'row', gap: 15 },
  cardPequeno: { flex: 1, backgroundColor: '#fff', height: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#eee' },
  cardTextoPequeno: { color: '#333', fontWeight: '600', marginTop: 5 }
});