import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () =>{


    return (
        <SafeAreaView style={tw`bg-white h-full pl-2`}>
            <View style={tw`p-5`}>
                <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                }}
                source={{
                    uri: "https://links.papareact.com/gzs",
                }} />
            </View>
            <GooglePlacesAutocomplete
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 18,
                    }
                }}
                onPress={() => {
                    console.log("hello")
                }}
                placeholder='where from?'
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />

            <NavOptions />
            <NavFavourites />
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
    }
})