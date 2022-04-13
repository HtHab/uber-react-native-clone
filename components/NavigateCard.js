import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import NavFavourites from './NavFavourites';

const NavigateCard = () =>{
    const navigation = useNavigation();
    return (
        <View style={tw`bg-white flex-1`}>
            <Text style={[tw`text-center py-4 text-xl`]} >GoodMorning, Dude</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <GooglePlacesAutocomplete
                    styles={toInputBoxStyles}
                    fetchDetails={true}
                    placeholder='Where to?'
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("RideOptionsCard")}>
                <Text style={[tw`text-center py-4`, {color: 'dodgerblue'}]}>Navigate</Text>
            </TouchableOpacity>
            <NavFavourites />

        <View style={tw`flex-row justify-evenly bg-white mt-auto py-2 border-t border-gray-100`}>
            <TouchableOpacity 
            onPress={() => navigation.navigate("RideOptionsCard")}
            style={tw`flex flex-row bg-black justify-between rounded-full w-24 px-4 py-3`}>
                <Icon name="car" color="white" type="font-awesome" size={16} />
                <Text style={tw`text-white text-center`}>Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex flex-row bg-white justify-between rounded-full w-24 px-4 py-3`}>
                <Icon name="fast-food-outline" color="black" type="ionicon" size={16} />
                <Text style={tw`text-black text-center`}>Eats</Text>
            </TouchableOpacity>
        </View>

        </View>
    );
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})