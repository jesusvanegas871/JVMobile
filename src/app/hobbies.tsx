
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import TarjetaHobby from '../components/TarjetaHobby';

export default function Hobbies() {
  const hobbies = [
    {
      id: '1',
      titulo: 'Tecnología y programación',
      icono: 'code-slash' as const,
      descripcion: 'Explorar herramientas y crear soluciones digitales.',
      detalle:
        'Me gusta aprender nuevos lenguajes de programación, desarrollar proyectos y descubrir tecnologías que permitan solucionar problemas.',
    },
    {
      id: '2',
      titulo: 'Deportes y actividad física',
      icono: 'fitness-outline' as const,
      descripcion: 'Mantenerme activo y desarrollar disciplina.',
      detalle:
        'Disfruto realizar actividad física y practicar deportes. Me interesa mantener una vida activa y fortalecer habilidades como la constancia y el trabajo en equipo.',
    },
    {
      id: '3',
      titulo: 'Videojuegos',
      icono: 'game-controller-outline' as const,
      descripcion: 'Entretenimiento y exploración de mundos digitales.',
      detalle:
        'Me gustan los videojuegos y me interesa conocer cómo se desarrollan, desde su programación hasta sus interfaces y experiencias interactivas.',
    },
  ];

  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contenido}
      >
        <View style={styles.encabezado}>
          <View>
            <Text style={styles.etiqueta}>
              MÁS SOBRE MÍ
            </Text>
            <Text style={styles.titulo}>
              Mis intereses
            </Text>
          </View>

          <Ionicons
            name="heart-outline"
            size={32}
            color="#6D5AE6"
          />
        </View>

        <Text style={styles.descripcion}>
          Además de mi formación académica y mis
          conocimientos tecnológicos, tengo diferentes
          intereses que hacen parte de mi desarrollo
          personal.
        </Text>

        <View style={styles.lista}>
          {hobbies.map((hobby) => (
            <TarjetaHobby
              key={hobby.id}
              titulo={hobby.titulo}
              icono={hobby.icono}
              descripcion={hobby.descripcion}
              detalle={hobby.detalle}
            />
          ))}
        </View>

        <Text style={styles.pie}>
          Mis intereses también impulsan mi aprendizaje.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  contenido: {
    padding: 22,
    paddingBottom: 35,
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  etiqueta: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#64748B',
    marginBottom: 7,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  descripcion: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
    marginBottom: 25,
  },
  lista: {
    gap: 5,
  },
  pie: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 15,
  },
});
