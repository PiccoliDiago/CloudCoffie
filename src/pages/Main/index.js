import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Alert, TouchableOpacity, Dimensions, TextInput, Easing, Animated, View, Image, Text, Platform, ImageBackground, ScrollView, FlatList } from 'react-native'

import { DEFAULT_TITLE, DEFAULT_USER_STRUCT, DEFAULT_URL, DEFAULT_URL_SOCKET } from '../../helper'
import getUser from '../../service/Usuario'
import Style from './style'

import TabNav from './../../components/TabNav'
import Card from './../../components/Card'

import IconF from 'react-native-vector-icons/FontAwesome5';
import Moment from 'moment/min/moment-with-locales';
import io from 'socket.io-client'
import AsyncStorage from '@react-native-community/async-storage';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { MAP_STYLE_RETRO } from '../../helper';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

import coffee1 from '../../assets/coffee_1.jpg'

export default function Main() {

    const [login, setLogin] = useState(false)

    const [home, setHome] = useState(true)
    const [map, setMap] = useState(true)
    const [notifications, setNotifications] = useState(true)
    const [config, setConfig] = useState(true)

    const [iconSearch, setIconSearch] = useState("search") //
    const [search, setSearch] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        Moment.locale('pt-br');
        findUser()
        //logout()
    }, [])

    const tabnav = useSelector(state => state.tabnav)

    useEffect(() => {

        setHome(false)
        setMap(false)
        setNotifications(false)
        setConfig(false)

        if (tabnav == "home") setHome(true)
        else if (tabnav == "map") setMap(true)
        else if (tabnav == "notifications") setNotifications(true)
        else if (tabnav == "config") setConfig(true)

    }, [tabnav])

    findUser = async () => {

        var user = await getUser()
        dispatch({ type: "SET_USER", data: user })

        // if (user.id == 0) {
        //    setLogin(true)
        //    return
        //}

        //socketConnection(user, "")
    }

    socketConnection = (user, token) => {

        var arrLatng = []
        var socket = io.connect(DEFAULT_URL_SOCKET, {
            autoConnect: true,
            transports: ['websocket'],
            jsonp: false,
            forceNew: true,
            // query: { user: user.auth, token: token },
            secure: true
        })

        socket.connect()

        socket.on('connect', msg => {
            console.log('con')
        })

        socket.on('userInvalidToken', msg => {
            console.log('userInvalidToken')
            console.log(msg)
        })

        socket.on('userNewTerminal', msg => {
            console.log('userNewTerminal')
        })

        socket.on('position', msg => {
            var aux = msg
            aux.name = "Three Pixels Sistemas";
            aux.address = "Rua Jardim Euroa, 972 - E"
            dispatch({ type: 'SET_SELECTED', data: aux })
        })

        socket.on('disconnect', msg => {
            console.log('disconnect')
            console.log(msg)
        })

    }

    var machines = [
        { 
            name: "Three Pixels Sistemas", 
            address: "Rua Jardim Euroa, 972 - E", 
            createdAt: "2020-09-10T14:04:24.276Z", 
            gps: { 
                coordinate: { latitude: -27.108408, longitude: -52.610650 }, 
                date: "2021-06-10T14:04:24.275Z"
            }, 
            index: "5f5a3268466668", 
            operations: [], 
            weight: [],
            tracker: { 
                serial: "1111111" 
            }, 
            updatedAt: "2020-09-10T14:04:24.276Z", 
             
        }
    ]

    renderMachines = (item) => {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => {
                dispatch({ type: 'SET_SELECTED', data: item })
            }}>
                <Card machine={item} />
            </TouchableOpacity>
        )
    }

    cleanSearch = () => {
        if (search.length != 0) changeSearch("")
    }

    changeSearch = (text) => {
        setSearch(text)
        if (text.length == 0) setIconSearch("search")
        else setIconSearch("trash")
    }

    return (
        <View style={Style.Content}>

            {home && <>
                <Image source={coffee1} style={Style.ImageBackground} />
                <View style={Style.Opacity} />

                <View style={Style.Box}>

                    <View style={Style.ViewPesquisa}>

                        <TouchableOpacity style={Style.IconSearch} onPress={() => {
                            cleanSearch()
                        }}>
                            <IconF name={iconSearch} color={"#fff"} size={20} />
                        </TouchableOpacity>
                        <TextInput
                            style={Style.TextPesquisa}
                            placeholder="Buscar"
                            placeholderTextColor="#555"
                            value={search}
                            onChangeText={text => changeSearch(text)}
                        />
                    </View>

                    <FlatList
                        style={Style.FlatList}
                        showsHorizontalScrollIndicator={false}
                        data={machines}
                        keyExtractor={item => item.index.toString()}
                        renderItem={renderMachines}
                    />

                </View>

            </>}

            {map && <MapView
                style={{
                    height: HEIGHT,
                    width: WIDTH,
                }}
                provider={PROVIDER_GOOGLE}
                customMapStyle={MAP_STYLE_RETRO}
                initialRegion={{
                    latitude: -27.099587,
                    longitude: -52.616281,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.015
                }}>
                {/* <Marker
                    coordinate={{
                        latitude: machine.coordinate.latitude,
                        longitude: machine.coordinate.longitude,
                    }}
                    anchor={{ x: 0.5, y: 0.5 }}>


                </Marker> */}

            </MapView>}


            <TabNav />

        </View>
    )


}