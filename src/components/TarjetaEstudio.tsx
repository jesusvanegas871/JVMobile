
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface TarjetaEstudioProps {
  titulo: string;
  institucion: string;
  periodo: string;
  descripcion: string;
  enCurso: boolean;
}

export default function TarjetaEstudio({
  titulo,
  institucion,
  periodo,
  descripcion,
  enCurso,
}: TarjetaEstudioProps) {
  return (
    <View
      style={[
        styles.tarjeta,
        enCurso && styles.tarjetaActiva,
      ]}
    >
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>{titulo}</Text>

        {enCurso && (
          <View style={styles.insignia}>
            <Text style={styles.textoInsignia}>
              En Curso
            </Text>
          </View>
        )}
      </View>

      <Text style={styles.institucion}>
        {institucion}
      </Text>

      <Text style={styles.periodo}>
        {periodo}
      </Text>

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
  tarjetaActiva: {
    backgroundColor: '#EEF2FF',
    borderColor: '#8B5CF6',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
    flexShrink: 1,
  },
  institucion: {
    fontSize: 15,
    color: '#475569',
    marginTop: 8,
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
  insignia: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  textoInsignia: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
});
