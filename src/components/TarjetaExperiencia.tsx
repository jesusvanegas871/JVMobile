
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface TarjetaExperienciaProps {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
}

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
}: TarjetaExperienciaProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.cargo}>{cargo}</Text>
      <Text style={styles.empresa}>{empresa}</Text>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.descripcion}>
        {descripcion}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cargo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  empresa: {
    fontSize: 15,
    color: '#475569',
    marginTop: 7,
  },
  periodo: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 5,
  },
  descripcion: {
    fontSize: 14,
    color: '#475569',
    marginTop: 10,
    lineHeight: 21,
  },
});
