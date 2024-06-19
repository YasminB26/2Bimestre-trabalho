import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View } from 'react-native';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFAFA', dark: '#4169E1' }}
      headerImage={

        <Image source={require('@/assets/images/img1.jpg')}
        style={styles.headerImage}
        />

      }
      
      >

        

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">            BEM-VINDO 💘 </ThemedText>
        
        </ThemedView>
      
      <View style={{alignItems: "center", justifyContent: "center"}}>
        
        <Text style={styles.txt}>É um prazer receber você aqui! Este é o lugar onde histórias ganham vida, onde risadas ecoam e onde novas amizades florescem. No Nosso Cantinho, cada perfil é como um pedacinho de um quebra-cabeça colorido, contribuindo para tornar este espaço único e acolhedor.
Prepare-se para compartilhar suas paixões, descobrir novas inspirações e conectar-se com pessoas que compartilham seus interesses. Este é o lugar perfeito para ser você mesmo, sem filtros, sem reservas.
Então, fique à vontade para explorar, criar laços e celebrar a diversidade que nos une. Estamos emocionados para ver as histórias que você vai contar e os momentos especiais que você vai compartilhar conosco.  💙🐚
 </Text>

      </View>

        {Platform.select({
          ios: (
            <ThemedText>
              
            </ThemedText>
          ),
        })}
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 490,
    height: 250,
    resizeMode: "cover",
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 3,
  },
  txt: {
    fontSize: 17,
    color: '#000',
    textAlign: "center",
    marginTop: -5,
    alignItems: "center"
  }
});
