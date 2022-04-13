import React from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "London eye, London, UK",
    },
]

const NavFavourites = () =>{
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={()=> (
                <View style={[tw`bg-gray-200`, {height: 0.5}]} />
            )}
            renderItem={({item: {icon, location, destination}}) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon
                        name={icon}
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        type= "ionicon"
                        size={18}
                        color="white"
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-200`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

export default NavFavourites;