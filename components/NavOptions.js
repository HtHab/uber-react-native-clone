import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        title: "Get A ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
]

const NavOptions = () =>{

    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>(
                <TouchableOpacity 
                onPress={() => navigation.navigate(item.screen)}
                style={[tw`bg-gray-200 p-2 m-2 pl-6 pb-8 pt-4`, {height: 250, justifyContent: 'center',marginLeft: 20,}]}>
                    <Image 
                    style={{ width: 120, height: 120, resizeMode:"contain", }}
                    source={{ uri: item.image }}
                    />
                    <Text style={tw`mt-2 font-semibold text-lg`}>{item.title}</Text>
                    <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright" color="white" type="antdesign" />

                </TouchableOpacity>
            )}
        />
    );
}

export default NavOptions;