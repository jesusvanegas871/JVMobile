
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TarjetaHobbyProps {
  titulo: string;
  icono: keyof typeof Ionicons.glyphMap;
  descripcion: string;
  detalle: string;
}

export default function TarjetaHobby({
  titulo,
  icono,
  descripcion,
  detalle,
}: TarjetaHobbyProps) {
  const mostrarDetalle = () => {
    Alert.alert(titulo, detalle);
  };

  return (
    <TouchableOpacity
      style={styles.tarjeta}
      onPress={mostrarDetalle}
      activeOpacity={0.8}
    >
      <Ionicons
        name={icono}
        size={32}
        color="#6D5AE6"
      />

      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.descripcion}>
        {descripcion}
      </Text>

      <Text style={styles.indicacion}>
        Toca para conocer más
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 12,
  },
  descripcion: {
    fontSize: 14,
    color: '#475569',
    marginTop: 7,
  },
  indicacion: {
    fontSize: 12,
    color: '#6D5AE6',
    marginTop: 12,
    fontWeight: '600',
  },
});
