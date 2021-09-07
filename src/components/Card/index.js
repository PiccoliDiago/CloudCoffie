import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import Style from './style'

import IconF from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { MAP_STYLE_DARK, MAP_STYLE_SILVER, MAP_STYLE_NIGHT, MAP_STYLE_RETRO } from '../../helper';

export default Card = ({ machine }) => {

    machine = machine.item

    const iconSize = 13
    const iconColor = "#fff"

    return (

        <>
            <View style={Style.Content}>

                <View style={{
                    height: "100%",
                    width: "65%",
                    padding: 10
                }}>

                    <View style={{ ...Style.ViewInfo, height: 30 }}>
                        <Text numberOfLines={1} style={Style.TextName}>{machine.name}</Text>
                    </View>

                    <View style={Style.ViewInfo}>
                        <IconF name="map-signs" style={{ ...Style.Icon }} color={iconColor} size={iconSize} />
                        <Text numberOfLines={1} style={Style.TextInfo}>{machine.address}</Text>
                    </View>

                    <View style={Style.ViewInfo}>
                        <IconF name="clock" style={{ ...Style.Icon }} color={iconColor} size={iconSize} />
                        <Text numberOfLines={1} style={Style.TextInfo}>10/06/2021 08:09:09</Text>
                    </View>

                    <View style={Style.ViewInfo}>
                        <IconF name="thermometer-half" style={{ ...Style.Icon, marginLeft: 4 }} color={iconColor} size={iconSize} />
                        <Text numberOfLines={1} style={Style.TextInfo}>37Cº</Text>
                    </View>

                    <View style={Style.ViewInfo}>
                        <IconF name="exclamation-triangle" style={{ ...Style.Icon }} color={iconColor} size={iconSize - 2} />
                        <Text numberOfLines={1} style={Style.TextInfo}>Normal</Text>
                    </View>

                    <View style={Style.ViewStatus}>
                        <Icon name="circle" style={{ ...Style.Icon, marginLeft: 1 }} color={"#16c90c"} size={iconSize - 3} />
                        <Text numberOfLines={1} style={Style.TextInfo}>Ativa</Text>
                    </View>

                </View>


            </View>

            <View style={Style.ViewMap}>

                <MapView
                    style={{
                        height: 200,
                        width: 170,
                        borderRadius: 80
                    }}
                    provider={PROVIDER_GOOGLE}
                    customMapStyle={MAP_STYLE_SILVER}
                    initialRegion={{
                        latitude: machine.gps.coordinate.latitude,
                        longitude: machine.gps.coordinate.longitude,
                        latitudeDelta: 0.054,
                        longitudeDelta: 0.055
                    }}>
                    <Marker
                        coordinate={{
                            latitude: machine.gps.coordinate.latitude,
                            longitude: machine.gps.coordinate.longitude,
                        }}
                        anchor={{ x: 0.5, y: 0.5 }}>

                        {/* <Image
                            source={iconCoffee}
                            style={{
                                width: 40,
                                height: 55,
                            }} /> */}

                    </Marker>

                </MapView>
            </View>
        </>

    )

}