import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Cardapio() {
  const [reserva, setReserva] = useState(null);

  const lanches = [
    { id: 1, nome: 'Coxinha Suprema', preco: 'R$ 8,00' },
    { id: 2, nome: 'Pão de Queijo Recheado', preco: 'R$ 6,50' },
    { id: 3, nome: 'Hambúrguer Artesanal', preco: 'R$ 15,00' }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cardápio do Dia</Text>
      
      {lanches.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.itemNome}>{item.nome}</Text>
          <Text style={styles.itemPreco}>{item.preco}</Text>
          <TouchableOpacity 
            style={styles.botaoReserva} 
            onPress={() => setReserva(item.nome)}
          >
            <Text style={styles.botaoTexto}>Reservar</Text>
          </TouchableOpacity>
        </View>
      ))}

      {reserva && (
        <View style={styles.feedback}>
          <Text style={styles.feedbackTexto}>✅ Sucesso! {reserva} reservado.</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#f9f9f9', padding: 15, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#eee' },
  itemNome: { fontSize: 18, fontWeight: 'bold' },
  itemPreco: { fontSize: 16, color: '#E83D84', marginVertical: 5 },
  botaoReserva: { backgroundColor: '#E83D84', padding: 8, borderRadius: 5, alignItems: 'center' },
  botaoTexto: { color: '#fff', fontWeight: 'bold' },
  feedback: { marginTop: 20, padding: 15, backgroundColor: '#d4edda', borderRadius: 8 },
  feedbackTexto: { color: '#155724', fontWeight: 'bold', textAlign: 'center' }
});