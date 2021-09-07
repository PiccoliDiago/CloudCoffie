import React, { useState, useEffect } from 'react'
import { Dimensions, ScrollView, Image, View, TouchableOpacity, Text, Easing, Animated } from 'react-native'
import Style from './style'

import IconF from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';

import Machine from '../Machine'

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

import { Calendar, LocaleConfig } from 'react-native-calendars';

export default TabNav = () => {

    const [open, setOpen] = useState(false)

    const [home, setHome] = useState(true)
    const [map, setMap] = useState(false)
    const [notifications, setNotifications] = useState(false)
    const [config, setConfig] = useState(false)

    const [daySelected, setDaySelected] = useState('');
    const onDayPress = (day) => {
        setDaySelected(day.dateString);
    };

    const [machine, setMachine] = useState(false)
    const [total, setTotal] = useState(false)
    const [grahp, setGraph] = useState(false)

    const [heightTab, setheightTab] = useState(new Animated.Value(0))

    const iconSize = 30
    const iconColor = "#222"

    const dispatch = useDispatch()
    const tabnav = useSelector(state => state.tabnav)
    const selectedMachine = useSelector(state => state.selected)

    useEffect(() => {

        LocaleConfig.locales['br'] = {
            monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
            monthNamesShort: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
            today: 'Hoje\'Hj'
        };

        LocaleConfig.defaultLocale = 'br';

    }, [])

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

    useEffect(() => {

        if (selectedMachine !== false) {
            Animated.timing(
                heightTab, {
                toValue: HEIGHT - 50,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false
            }).start()

            setMachine(true)
            setTotal(false)
        }

        if (!selectedMachine) {
            Animated.timing(
                heightTab, {
                toValue: 100,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false
            }).start()

            setOpen(false)
            setMachine(false)
            setTotal(false)
        }

    }, [selectedMachine])

    changeTab = (tab) => {
        dispatch({ type: "SET_TAB", data: tab })
    }

    changeInTab = (tab) => {

        if (tab == 'machine') {
            setTotal(false)
            setMachine(true)
            setGraph(false)
        }
        else if (tab == 'total') {
            setTotal(true)
            setMachine(false)
            setGraph(false)
        }
        else if (tab == 'graph') {
            setTotal(false)
            setMachine(false)
            setGraph(true)
        }
    }

    return (
        <Animated.View style={{ ...Style.TabNav, height: heightTab, }} >

            {!selectedMachine && <View style={{ flexDirection: "row" }}>

                {!home && <TouchableOpacity onPress={() => changeTab("home")} activeOpacity={0.8} style={Style.ViewTab}>
                    <IconF name="mug-hot" style={Style.Icon} color={iconColor} size={iconSize} />
                </TouchableOpacity>}

                {home && <View style={Style.ViewTab}>
                    <View style={Style.ViewInfo}>
                        <Text style={Style.TextInfo}>Início</Text>
                    </View>
                </View>}

                {!map && <TouchableOpacity onPress={() => changeTab("map")} activeOpacity={0.8} style={Style.ViewTab}>
                    <IconF name="map-marked-alt" style={Style.Icon} color={iconColor} size={iconSize} />
                </TouchableOpacity>}

                {map && <View style={Style.ViewTab}>
                    <View style={Style.ViewInfo}>
                        <Text style={Style.TextInfo}>Mapa</Text>
                    </View>
                </View>}

                {!notifications && <TouchableOpacity onPress={() => changeTab("notifications")} activeOpacity={0.8} style={Style.ViewTab}>
                    <IconF name="bell" style={Style.Icon} color={iconColor} size={iconSize} />
                </TouchableOpacity>}

                {notifications && <View style={Style.ViewTab}>
                    <View style={Style.ViewInfo}>
                        <Text style={Style.TextInfo}>Alertas</Text>
                    </View>
                </View>}

                {!config && <TouchableOpacity onPress={() => changeTab("config")} activeOpacity={0.8} style={Style.ViewTab}>
                    <IconF name="user-cog" style={Style.Icon} color={iconColor} size={iconSize} />
                </TouchableOpacity>}

                {config && <View style={Style.ViewTab}>
                    <View style={Style.ViewInfo}>
                        <Text style={Style.TextInfo}>Usuário</Text>
                    </View>
                </View>}

            </View>}

            {selectedMachine !== false && <View>

                <View style={{ flexDirection: "row" }}>

                    {!machine && <TouchableOpacity onPress={() => changeInTab("machine")} activeOpacity={0.8} style={Style.ViewTab}>
                        <IconF name="digital-tachograph" style={Style.Icon} color={iconColor} size={iconSize} />
                    </TouchableOpacity>}

                    {machine && <View style={Style.ViewTab}>
                        <View style={Style.ViewInfo}>
                            <Text style={Style.TextInfo}>Maquina</Text>
                        </View>
                    </View>}

                    {!total && <TouchableOpacity onPress={() => changeInTab("total")} activeOpacity={0.8} style={Style.ViewTab}>
                        <IconF name="cash-register" style={Style.Icon} color={iconColor} size={iconSize} />
                    </TouchableOpacity>}

                    {total && <View style={Style.ViewTab}>
                        <View style={Style.ViewInfo}>
                            <Text style={Style.TextInfo}>Totais</Text>
                        </View>
                    </View>}

                    {!grahp && <TouchableOpacity onPress={() => changeInTab("graph")} activeOpacity={0.8} style={Style.ViewTab}>
                        <IconF name="chart-pie" style={Style.Icon} color={iconColor} size={iconSize} />
                    </TouchableOpacity>}

                    {grahp && <View style={Style.ViewTab}>
                        <View style={Style.ViewInfo}>
                            <Text style={Style.TextInfo}>Gráficos</Text>
                        </View>
                    </View>}

                    <TouchableOpacity onPress={() => {
                        dispatch({ type: 'SET_SELECTED', data: false })
                    }} activeOpacity={0.8} style={Style.ViewTab}>
                        <IconF name="times-circle" style={Style.Icon} color={iconColor} size={iconSize} />
                    </TouchableOpacity>

                </View>

                {machine && <Machine />}

                {grahp && <>
                    <ScrollView style={Style.ViewMachine}>

                        <View style={Style.Row} />

                        <Calendar
                            minDate={'2020-05-10'}
                            maxDate={new Date()}
                            onDayPress={onDayPress}
                            markedDates={{
                                [daySelected]: {
                                    selected: true,
                                    disableTouchEvent: true,
                                    selectedColor: '#99512f',
                                    selectedTextColor: '#fff',
                                },
                            }}
                            monthFormat={'MMMM, yyyy'}
                            onMonthChange={(month) => { console.log('month changed', month) }}
                            hideArrows={false}
                            hideExtraDays={false}
                            disableMonthChange={false}
                            firstDay={1}
                            hideDayNames={false}
                            showWeekNumbers={false}
                            onPressArrowLeft={subtractMonth => subtractMonth()}
                            onPressArrowRight={addMonth => addMonth()}
                            disableAllTouchEventsForDisabledDays={true}
                            enableSwipeMonths={true}
                        />

                    </ScrollView>
                </>}

            </View>}

        </Animated.View >
    )
}