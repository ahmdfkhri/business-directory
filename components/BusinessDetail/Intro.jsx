import { Image, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Intro({business}) {
  const router = useRouter();
  return (
    <View>
      <View style={{
        position: "absolute",
        zIndex: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,

      }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <Image source={{uri: business?.imageUrl}} style={{
        width: '100%',
        height: 340,
      }}/>
      <View style={{
        padding: 20,
        marginTop: -20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
      }}>
        <Text style={{
          fontSize: 26,
          fontFamily: 'outfit-bold',
        }}>{business.name}</Text>
        <Text style={{
          fontSize: 18,
          fontFamily: 'outfit',
        }}>{business.address}</Text>
      </View>
    </View>
  )
}