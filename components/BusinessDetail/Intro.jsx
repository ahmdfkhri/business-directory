import { Alert, Image, Text, ToastAndroid, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";

export default function Intro({business}) {
  const router = useRouter();
  const {user} = useUser();

  const OnDelete = async() => {
    Alert.alert('Do you want to delete', 'Do you really want to delete this business?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => deleteBusiness(),
      }
    ])
  }

  const deleteBusiness = async() => {
    console.log("delete business...");
    await deleteDoc(doc(db, 'BusinessList', business?.id));
    router.back();
    ToastAndroid.show('Business Deleted Succesfully!', ToastAndroid.LONG);
  }
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
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -20,
        padding: 20,
        justifyContent: 'space-between',
      }}>
        <View style={{
          paddingTop: 20,
          marginTop: -20,
          backgroundColor: '#fff',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25
        }}>
          <Text style={{
            fontSize: 26,
            fontFamily: 'outfit-bold',
          }}>{business.name}
          </Text>  
          <Text style={{
            fontSize: 18,
            fontFamily: 'outfit',
          }}>{business.address}</Text>
        </View>
        {user?.primaryEmailAddress?.emailAddress == business?.userEmail&&
        <TouchableOpacity onPress={() => OnDelete()}>
          <Ionicons name="trash" size={24} color="red" />
        </TouchableOpacity>
        }
      </View>
    </View>
  )
}