import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

export default function App() {
  const devices = useCameraDevices();
  const backCamera = devices.find(device => device.position === 'back');
  const cameraRef = useRef<Camera>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  if (!backCamera) return <Text>Buscando câmeras...</Text>;

  async function takePhoto() {
    if (!cameraRef.current) return;

    try {
      const photo = await cameraRef.current.takePhoto({
        flash: 'off',
      });
      setPhotoUri(photo.path);
      console.log('Foto tirada:', photo.path);
    } catch (error) {
      console.error('Erro ao tirar foto:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        device={backCamera}
        isActive={true}
        ref={cameraRef}
        photo={true}
      />
      <Button title="Tirar Foto" onPress={takePhoto} />
      {photoUri && <Text style={styles.text}>Foto salva em: {photoUri}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  text: { padding: 10, color: '#333' },
});
