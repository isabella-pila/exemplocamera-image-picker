import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Tipagem
import { RootStackParamList } from './NavigationTypes';

// O navegador de Abas
import { MainTabNavigator } from './MainTabNavigator';

// Telas Modais
import ImagePickerCameraScreen from '../screens/ImagePickerCameraScreen';
import ImagePickerGalleryScreen from '../screens/ImagePickerGalleryScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* O fluxo principal de abas */}
        <Stack.Screen 
          name="MainTabs" 
          component={MainTabNavigator} // <-- Usando o TabNavigator importado
          options={{ headerShown: false }} 
        />
        
        {/* Telas Modais (acima de tudo) */}
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen 
            name="ImagePickerCamera" 
            component={ImagePickerCameraScreen} 
            options={{ title: 'Tirar Foto' }} 
          />
          <Stack.Screen 
            name="ImagePickerGallery" 
            component={ImagePickerGalleryScreen} 
            options={{ title: 'Escolher da Galeria' }} 
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}