import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

const BarcodeScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [zoom, setZoom] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleZoomIn = () => {
    if (zoom < 1) {
      setZoom(z => z + 0.1);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 0) {
      setZoom(z => z - 0.1);
    }
  };

  const handleBarCodeScanned = ({ data }) => {
    console.log('Barcode:', data);
  };

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setSelectedImage(photo.uri);
      // Perform barcode recognition here to extract information from the barcode.
    }
  };

  const renderCamera = () => {
    if (hasPermission === null) {
      return <Text>Requesting permission...</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={Camera.Constants.Type.back} zoom={zoom} ref={cameraRef}>
          <View style={styles.zoomButtonsContainer}>
            <TouchableOpacity style={styles.zoomButton} onPress={handleZoomIn}>
              <Text style={styles.zoomButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.zoomButton} onPress={handleZoomOut}>
              <Text style={styles.zoomButtonText}>-</Text>
            </TouchableOpacity>
          </View>
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={[StyleSheet.absoluteFill, styles.barcodeScanner]}
          />
        </Camera>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderCamera()}
      <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
        <Text style={styles.buttonText}>Take Picture</Text>
      </TouchableOpacity>
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.selectedImage} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    width: '80%',
    height: '50%',
    alignSelf: 'center',
  },
  zoomButtonsContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    flexDirection: 'row',
  },
  zoomButton: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  zoomButtonText: {
    fontSize: 18,
  },
  barcodeScanner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 32,
    backgroundColor: '#274584',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedImage: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default BarcodeScannerScreen;
