
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function Experiencia() {
  const experiencias = [
    {
      id: '1',
      cargo: 'Apoyo en actividades de comida rápida',
      empresa: 'Experiencia laboral informal',
      periodo: 'Experiencia previa',
      descripcion:
        'Participación en actividades relacionadas con la preparación de alimentos, atención al cliente y apoyo en tareas operativas.',
    },
    {
      id: '2',
      cargo: 'Reparto y servicio al cliente',
      empresa: 'Experiencia independiente',
      periodo: 'Experiencia previa',
      descripcion:
        'Experiencia realizando entregas, organizando recorridos y desarrollando habilidades de responsabilidad y atención al cliente.',
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
              MI RECORRIDO
            </Text>
            <Text style={styles.titulo}>
              Experiencia laboral
            </Text>
          </View>

          <Ionicons
            name="briefcase-outline"
            size={32}
            color="#6D5AE6"
          />
        </View>

        <Text style={styles.descripcion}>
          En esta sección presento algunas de mis
          experiencias y actividades laborales, mediante
          las cuales he fortalecido habilidades personales
          y profesionales.
        </Text>

        <View style={styles.resumen}>
          <Ionicons
            name="people-outline"
            size={24}
            color="#6D5AE6"
          />

          <View>
            <Text style={styles.resumenTitulo}>
              Experiencias adquiridas
            </Text>
            <Text style={styles.resumenTexto}>
              Aprendizaje y desarrollo personal
            </Text>
          </View>
        </View>

        <Text style={styles.subtitulo}>
          Mis experiencias
        </Text>

        {experiencias.map((experiencia) => (
          <TarjetaExperiencia
            key={experiencia.id}
            cargo={experiencia.cargo}
            empresa={experiencia.empresa}
            periodo={experiencia.periodo}
            descripcion={experiencia.descripcion}
          />
        ))}

        <View style={styles.pie}>
          <Text style={styles.textoPie}>
            Cada experiencia representa una oportunidad
            para aprender y mejorar.
          </Text>
        </View>
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
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  descripcion: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
    marginBottom: 20,
  },
  resumen: {
    backgroundColor: '#EDE9FE',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    marginBottom: 25,
  },
  resumenTitulo: {
    color: '#4C1D95',
    fontSize: 15,
    fontWeight: 'bold',
  },
  resumenTexto: {
    color: '#6D5AE6',
    fontSize: 13,
    marginTop: 3,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 15,
  },
  pie: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
  },
  textoPie: {
    color: '#64748B',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
  },
});
