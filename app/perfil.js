import { View, Text, StyleSheet } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTexto}>JD</Text>
      </View>
      <Text style={styles.titulo}>João D. Aluno</Text>
      <Text style={styles.descricao}>RM: 12345 - FIAP Campus Paulista</Text>
      <Text style={styles.descricao}>Saldo Cantina: R$ 50,00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#E83D84', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  avatarTexto: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  descricao: { fontSize: 16, color: '#555', marginBottom: 5 },
});