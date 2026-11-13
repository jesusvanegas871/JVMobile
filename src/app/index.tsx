
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import MiBoton from '../components/MiBoton';

export default function Inicio() {
  const tecnologias = [
    { nombre: 'Python', icono: 'logo-python' as const },
    { nombre: 'JavaScript', icono: 'logo-javascript' as const },
    { nombre: 'SQL', icono: 'server-outline' as const },
    { nombre: 'React', icono: 'logo-react' as const },
  ];

  return (
    <SafeAreaView style={styles.contenedor}>
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contenido}
      >
        {/* Encabezado */}
        <View style={styles.encabezado}>
          <Text style={styles.etiqueta}>
            PORTAFOLIO PERSONAL
          </Text>

          <Ionicons
            name="person-circle-outline"
            size={28}
            color="#6D5AE6"
          />
        </View>

        {/* Perfil */}
        <View style={styles.perfil}>
          <View style={styles.avatar}>
            <Text style={styles.iniciales}>JV</Text>
          </View>

          <Text style={styles.nombre}>
            Jesús David Vanegas
          </Text>

          <Text style={styles.profesion}>
            Desarrollador de Software
          </Text>

          <View style={styles.etiquetaFormacion}>
            <Ionicons
              name="school-outline"
              size={16}
              color="#6D5AE6"
            />
            <Text style={styles.textoFormacion}>
              Aprendiz SENA - ADSO
            </Text>
          </View>
        </View>

        {/* Sobre mí */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>
            Sobre mí
          </Text>

          <Text style={styles.descripcion}>
            Soy técnico en Desarrollo de Software y
            actualmente curso la Tecnología en Análisis
            y Desarrollo de Software en el SENA.

            {'\n\n'}

            Me interesa la tecnología, la programación
            y la resolución de problemas. Disfruto
            desarrollando soluciones digitales y
            mejorando la experiencia visual de las
            aplicaciones. Mi objetivo es seguir creciendo
            como desarrollador y fortalecer mis
            conocimientos en desarrollo frontend y backend.
          </Text>
        </View>

        {/* Tecnologías */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>
            Tecnologías y conocimientos
          </Text>

          <View style={styles.listaTecnologias}>
            {tecnologias.map((tecnologia) => (
              <View
                key={tecnologia.nombre}
                style={styles.tarjetaTecnologia}
              >
                <Ionicons
                  name={tecnologia.icono}
                  size={22}
                  color="#6D5AE6"
                />

                <Text style={styles.textoTecnologia}>
                  {tecnologia.nombre}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Contacto */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>
            Contacto
          </Text>

          <MiBoton
            titulo="Enviar correo"
            icono="mail-outline"
            mensaje="Correo: jesusdavidvanegaslizalda"
          />

          <MiBoton
            titulo="Llamar"
            icono="call-outline"
            mensaje="Teléfono: 3138636001"
          />

          <MiBoton
            titulo="LinkedIn"
            icono="logo-linkedin"
            mensaje="Perfil de LinkedIn: jeje"
          />

          <MiBoton
            titulo="GitHub"
            icono="logo-github"
            mensaje="Repositorio del proyecto: github.com/jesusvanegas871/JVMobile"
          />
        </View>

        {/* Pie de página */}
        <Text style={styles.pie}>
          ProyectoJVMobile · 2026
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
    marginBottom: 30,
  },

  etiqueta: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#64748B',
  },

  perfil: {
    alignItems: 'center',
    marginBottom: 30,
  },

  avatar: {
    width: 105,
    height: 105,
    borderRadius: 55,
    backgroundColor: '#263B63',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },

  iniciales: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
  },

  nombre: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
  },

  profesion: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 7,
  },

  etiquetaFormacion: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDE9FE',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    marginTop: 15,
    gap: 7,
  },

  textoFormacion: {
    color: '#6D5AE6',
    fontWeight: '600',
    fontSize: 13,
  },

  seccion: {
    marginBottom: 27,
  },

  tituloSeccion: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 13,
  },

  descripcion: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 23,
    textAlign: 'justify',
  },

  listaTecnologias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  tarjetaTecnologia: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 13,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '48%',
  },

  textoTecnologia: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },

  pie: {
    textAlign: 'center',
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 10,
  },
});
