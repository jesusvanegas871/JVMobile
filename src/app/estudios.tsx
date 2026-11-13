
import { Ionicons } from '@expo/vector-icons';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TarjetaEstudio from '../components/TarjetaEstudio';

export default function Estudios() {
  const estudios = [
    {
      id: '1',
      titulo: 'Bachiller Académico',
      institucion: 'Educación media',
      periodo: 'Finalizado',
      descripcion:
        'Formación académica de educación secundaria, con conocimientos generales en diferentes áreas del aprendizaje.',
      enCurso: false,
    },
    {
      id: '2',
      titulo: 'Técnico en Desarrollo de Software',
      institucion: 'SENA',
      periodo: 'Finalizado',
      descripcion:
        'Formación técnica enfocada en fundamentos de programación, desarrollo de software y bases de datos.',
      enCurso: false,
    },
    {
      id: '3',
      titulo: 'Tecnología en Análisis y Desarrollo de Software',
      institucion: 'SENA',
      periodo: 'Actualmente en formación',
      descripcion:
        'Formación tecnológica orientada al análisis, diseño, desarrollo y mantenimiento de soluciones de software.',
      enCurso: true,
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
              MI TRAYECTORIA
            </Text>

            <Text style={styles.titulo}>
              Formación académica
            </Text>
          </View>

          <Ionicons
            name="school-outline"
            size={32}
            color="#6D5AE6"
          />
        </View>

        <Text style={styles.descripcion}>
          Aquí encontrarás mi formación académica y
          los estudios que he realizado para fortalecer
          mis conocimientos en el área tecnológica.
        </Text>

        <View style={styles.resumen}>
          <Ionicons
            name="book-outline"
            size={22}
            color="#6D5AE6"
          />

          <View>
            <Text style={styles.resumenTitulo}>
              Mi formación
            </Text>
            <Text style={styles.resumenTexto}>
              3 registros académicos
            </Text>
          </View>
        </View>

        <Text style={styles.subtitulo}>
          Estudios realizados
        </Text>

        {estudios.map((estudio) => (
          <TarjetaEstudio
            key={estudio.id}
            titulo={estudio.titulo}
            institucion={estudio.institucion}
            periodo={estudio.periodo}
            descripcion={estudio.descripcion}
            enCurso={estudio.enCurso}
          />
        ))}

        <View style={styles.pie}>
          <Text style={styles.textoPie}>
            La formación continua es parte de mi
            crecimiento profesional.
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
    marginTop: 10,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },

  textoPie: {
    color: '#64748B',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
  },
});
