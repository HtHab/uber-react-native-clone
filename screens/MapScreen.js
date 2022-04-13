import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import NavFavourites from '../components/NavFavourites';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () =>{

    const Stack = createStackNavigator();
    const navigation = useNavigation();

    return (
        <View>

            <TouchableOpacity 
            onPress={() => navigation.navigate("HomeScreen")}
            style={tw`absolute bg-gray-100 left-8 p-3 top-16 z-50 rounded-full shadow-lg`} >
                <Icon name="menu" />
            </TouchableOpacity>

            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`} >
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false }} name="NavigateCard" component={NavigateCard} />
                    <Stack.Screen options={{ headerShown: false }} name="RideOptionsCard" component={RideOptionsCard} />
                </Stack.Navigator>
            </View>
        </View>
    );
}

export default MapScreen;