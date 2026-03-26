import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🍕 Cantina FIAP</Text>
      <Text style={styles.subtitulo}>Reserve seu lanche e pule a fila!</Text>
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => router.push('/cardapio')}
      >
        <Text style={styles.botaoTexto}>Ver Cardápio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: 20 },
  titulo: { fontSize: 32, fontWeight: 'bold', marginBottom: 10, color: '#E83D84' },
  subtitulo: { fontSize: 16, color: '#666', marginBottom: 30, textAlign: 'center' },
  botao: { backgroundColor: '#E83D84', padding: 16, borderRadius: 12, width: '100%', alignItems: 'center' },
  botaoTexto: { color: '#fff', fontSize: 18, fontWeight: '600' },
});