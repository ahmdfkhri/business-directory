import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import Intro from '../../components/BusinessDetail/Intro';
import { db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import About from '../../components/BusinessDetail/About';
import Reviews from '../../components/Reviews';

export default function BusinessDetail() {
  const {businessid} = useLocalSearchParams();
  const [business, setBusiness] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetBusinessDetailById();
  }, [])

  const GetBusinessDetailById = async() => {
    setLoading(true);
    
    const docRef = doc(db, 'BusinessList', businessid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data: ", docSnap.data());
      setBusiness({id:docSnap.id,...docSnap.data()});
      setLoading(false);
    } else {
      console.log("No such document!");
      setLoading(false);
    }
  }
  return (
    <ScrollView>
      {loading ? <ActivityIndicator 
        size={'large'}
        color={Colors.PRIMARY}
        style={{
          marginTop: '70%',
        }}
      />:
        <View>
          {/* Intro */}
          <Intro business={business}/>
          {/* Action Buttons */}
          <ActionButton business={business}/>
          {/* About Section */}
          <About business={business}/>
          {/* Review Section */}
          <Reviews business={business}/>
        </View>
      }
    </ScrollView>
  )
}