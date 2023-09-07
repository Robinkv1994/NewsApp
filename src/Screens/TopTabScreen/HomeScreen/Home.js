import { ActivityIndicator, Linking, StyleSheet, Text, ToastAndroid, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import NewsCard from '../../../Components/NewsCard/NewsCard'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import moment from 'moment';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../Utils/screenResponsive'
import { colors } from '../../../Utils/colors'
import { useRoute, useNavigation } from '@react-navigation/native';


const Home = () => {
  const [newResponse, setNewsResponse] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, seterror] = useState(false)
  const route = useRoute()
  const searchText=route.params?.searchText
  console.log(searchText)
  const apiKey = 'ac1c068e5b524357aae6c429cb1822f9';
  let apiUrl;

  if (searchText) {
    apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&q=${searchText}&apiKey=${apiKey}`;
  } else {
    apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
  }

  const handlenews = async () => {
    setLoading(true)
    try {
      await axios.get(apiUrl).then((response) => {
        if (response) {
          console.log(response.data)
          setNewsResponse(response.data?.articles)
          setLoading(false)
          seterror(false)
        } else {
          setLoading(false)
          seterror(true)
          ToastAndroid.show('Something went wrong', ToastAndroid.LONG)
        }

      })
    } catch (error) {
      console.log(error.message)
      setLoading(false)
      seterror(true)

    }
  }

  useEffect(() => {
    handlenews()
  }, [searchText])



  const listHeader = () => {
    if (!loading && !newResponse.length) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <Image source={require('../../../assets/nodata.png')} style={styles.imagestyle} />
          <Text style={styles.textStyle}>No news found </Text>
        </View>
      )
    }

  }



  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {loading && (
          <ActivityIndicator style={{ marginTop: 40 }} size={30} color={'red'} />
        )}
        {error && (
          <View style={styles.imageView}>
            <Image source={require('../../../assets/error.png')} style={styles.imagestyle} />
            <Text style={styles.textStyle}>Unable to load the news ,please try later</Text>
          </View>
        )}


        <FlatList data={newResponse}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={listHeader}
          renderItem={({ item }) => {

            const timeAgo = moment(item.publishedAt).fromNow();
            return (

              <NewsCard title={item.title} image={item.urlToImage ? item.urlToImage : 'https://t3.ftcdn.net/jpg/04/34/72/82/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'} time={timeAgo} onPress={() => Linking.openURL(item.url)} />
            )
          }} />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imagestyle: {
    height: SCREEN_HEIGHT / 4,
    width: SCREEN_WIDTH / 2
  },
  textStyle: {
    color: colors.BRANDCOLOR2
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

})