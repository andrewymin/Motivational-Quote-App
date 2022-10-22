import React, { useState, useEffect } from 'react';
import colors from '../colors';
import QuoteComponent from '../QuoteComponent';
import { TouchableOpacity, Text, View, StyleSheet, ImageBackground } from 'react-native';

function Quotes(props) {

    const [quotedata, setQuotedata] = useState([{quote: "Press Button for Quote", author: "App"}]);
    const [list, setList] = useState([]);
    const [url, setUrl] = useState({uri: 'https://picsum.photos/200/300'});

    const numOfImageUrls = 29;

    useEffect(()=>{
      fetch('https://picsum.photos/v2/list')
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      }).then(jsonRes => {
        const urlList= jsonRes.map(item => item.download_url)
        // console.log(urlList)
        setList(urlList)
      })
    }, [])


    const nextUrlImage = () => {
      let i = Math.floor(Math.random()*numOfImageUrls)
      let imageUrl = list[i];
      setUrl({uri: imageUrl});
    }

    const getRandomQuote = async () => {
        try {
          const response = await fetch(
            'https://zenquotes.io/api/random'
          );
          const data = await response.json();
        //   console.log(quoteData)
          setQuotedata([{
            quote: data[0].q,
            author: data[0].a,
          }])
        } catch (error) {
          console.error(error);
        }
      };

    function handleQuote (){
        getRandomQuote()
        nextUrlImage()
    }

    return (
        <View style={styles.quoteBody}>
        {/* // <View> */}
          <ImageBackground source={url} resizeMode="cover" style={styles.quoteBody}></ImageBackground>
            {quotedata.map((quoteItem, index)=>
              <QuoteComponent 
                key={index}
                id={index}
                q={quoteItem.quote}
                a={quoteItem.author}
              />)}
            <TouchableOpacity style={styles.quoteButton} onPress={handleQuote}>
              <Text style={styles.buttonText}>Quote</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    quoteBody: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: colors.primary,
        zIndex: -1,
    },
    quoteButton: {
        // backgroundColor: '#D8D9CF',
        position: 'absolute',
        bottom: '10%',
        alignSelf: 'center',
        zIndex: 0,
        borderRadius: 5,
        backgroundColor: colors.secondary,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: '600',
        padding: 8,
        color: colors.tertiary,
    }
});

export default Quotes;