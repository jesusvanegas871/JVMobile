
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MiBotonProps {
  titulo: string;
  icono: keyof typeof Ionicons.glyphMap;
  mensaje: string;
}

export default function MiBoton({
  titulo,
  icono,
  mensaje,
}: MiBotonProps) {
  const manejarPresion = () => {
    Alert.alert(titulo, mensaje);
  };

  return (
    <TouchableOpacity
      style={styles.boton}
      onPress={manejarPresion}
      activeOpacity={0.8}
    >
      <Ionicons name={icono} size={20} color="#FFFFFF" />
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#263B63',
    padding: 14,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginVertical: 5,
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
