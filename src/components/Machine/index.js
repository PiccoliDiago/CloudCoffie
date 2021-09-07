import React, { useState, useEffect } from 'react'
import { Dimensions, ScrollView, Image, View, TouchableOpacity, Text, Easing, Animated } from 'react-native'
import Style from './style'

import { useSelector, useDispatch } from 'react-redux';

import IconF from 'react-native-vector-icons/FontAwesome5';

import benedetto from '../../assets/name.png'
import cup from '../../assets/cup_4.png'
import icon_c from '../../assets/icon_c.png'

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default Machine = () => {

    const [open, setOpen] = useState(false)
    const [inAnimation, setInAnimation] = useState(false)

    const [display, setDisplay] = useState("PRONTA")
    const [htmlButtons, setHtmlButtons] = useState([]);

    const [heightOutCoffee, setHeightOutCoffee] = useState(new Animated.Value(0))

    const [heightMake1, setHeughtMake1] = useState(new Animated.Value(0))
    const [heightMake2, setHeughtMake2] = useState(new Animated.Value(0))
    const [outCoffeeOpacity, setOutCoffeeOpacity] = useState(new Animated.Value(1))

    const selectedMachine = useSelector(state => state.selected)
    const dispatch = useDispatch()

    const [mixtures, setMixtures] = useState([
        { index: 0, name: "AÇUCAR", position: 5, weight: new Animated.Value(100), color: "#dedddc" },
        { index: 1, name: "CAFÉ", position: 3, weight: new Animated.Value(100), color: "#75664f" },
        { index: 2, name: "LEITE", position: 2, weight: new Animated.Value(100), color: "#ffffff" },
        { index: 3, name: "CHOCOLATE", position: 1, weight: new Animated.Value(100), color: "#4a2f04" },
        { index: 4, name: "CAPPUCCINO", position: 0, weight: new Animated.Value(100), color: "#c49d5e" },
    ])

    const [acucarWei, setAcucarWei] = useState(100);
    const [cafeWei, setCafeWei] = useState(100);
    const [leiteWei, setLeiteWei] = useState(100);
    const [chocolateWei, setChocolateWei] = useState(100);
    const [capuccinoWei, setCapuccinoWei] = useState(100);

    var coffees = [
        { index: 0, name: "CAFÉ CURTO", color: "#1b9be0" },
        { index: 1, name: "CAFÉ LONGO", color: "#1b9be0" },
        { index: 2, name: "CAFÉ PINGADO", color: "#1b9be0" },
        { index: 3, name: "CHOCOLATE", color: "#1b9be0" },
        { index: 4, name: "CHOCOLATE COM LEITE", color: "#1b9be0" },
        { index: 5, name: "LEITE", color: "#1b9be0" },
        { index: 6, name: "CAPPUCCINO", color: "#1b9be0" },
    ]

    if (coffees.length % 2 == 1) {
        coffees.push({ index: coffees.length, name: "", color: "#1b9be0" })
    }

    useEffect(() => {

        changeLayoutCoffees(coffees)
        setOpen(true)

        return () => {
            setOpen(false)
        }
    }, [])

    useEffect(() => {
        if (open) {
            newCoffee();
        }
    }, [selectedMachine])

    changeLayoutCoffees = (cof) => {

        var aux = []
        for (var i = 0; i < cof.length; i += 2) {
            aux.push(
                <View style={Style.RowTouchable} key={i}>
                    <View style={{ ...Style.Touchable1, borderColor: cof[i].color }}>
                        <Text style={Style.TextDesc}>{cof[i].name}</Text>
                        <View style={{ ...Style.Button1, borderColor: cof[i].color, }} />
                    </View>
                    <View style={Style.Space} />
                    <View style={{ ...Style.Touchable2, borderColor: cof[i + 1].color }}>
                        <Text style={Style.TextDesc}>{cof[i + 1].name}</Text>
                        <View style={{ ...Style.Button2, borderColor: cof[i + 1].color }} />
                    </View>
                </View>
            )
        }

        setHtmlButtons(aux)

    }

    coffeeEfect = (i) => {

        setInAnimation(true)
        setDisplay(coffees[i].name)

        coffees.map(c => {
            c.color = "#000";
        })

        changeLayoutCoffees(coffees)

        Animated.timing(
            heightOutCoffee,
            {
                toValue: 120,
                duration: 1000,
                useNativeDriver: false
            }
        ).start()

        setTimeout(() => {
            Animated.timing(
                heightMake1,
                {
                    toValue: 40,
                    duration: 1000,
                    useNativeDriver: false
                }
            ).start()

            coffees[i].color = "#1b9be0";
            changeLayoutCoffees(coffees)

        }, 1000)

        setTimeout(() => {
            Animated.timing(
                heightMake2,
                {
                    toValue: 40,
                    duration: 1000,
                    useNativeDriver: false
                }
            ).start()

            coffees[i].color = "#000";
            changeLayoutCoffees(coffees)

        }, 1000 + 1000)

        setTimeout(() => {
            Animated.timing(
                heightOutCoffee,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false
                }
            ).start()

            coffees[i].color = "#1b9be0";
            changeLayoutCoffees(coffees)

        }, 1000 + 1000 + 1000)

        setTimeout(() => {

            Animated.timing(
                outCoffeeOpacity,
                {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }
            ).start()

            coffees[i].color = "#000";
            changeLayoutCoffees(coffees)

            setTimeout(() => {
                setHeughtMake1(new Animated.Value(0))
                setHeughtMake2(new Animated.Value(0))
                setHeightOutCoffee(new Animated.Value(0))

                Animated.timing(
                    outCoffeeOpacity,
                    {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true
                    }
                ).start()

                coffees.map(c => {
                    c.color = "#1b9be0";
                })

                changeLayoutCoffees(coffees)

                setInAnimation(false)
                setDisplay("PRONTA")

            }, 700)

        }, 1000 + 1000 + 1000 + 1000)

    }

    clickCoffie = (who) => {

        var operations = [];
        var ac = acucarWei - 5
        setAcucarWei(ac);

        // if (who === "CAFÉ") {
        //     operations = [[0, 0, 0, 1, 0], [0, 0, 0, 0, 0]];
        //     var acf = cafeWei - 10
        //     setCafeWei(acf);
        // }
        // else

        if (who == "AÇUCAR") {
            operations = [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]]
            var acf = cafeWei - 5
            setCafeWei(acf - 5);
            var al = leiteWei - 5
            setLeiteWei(al);
        }

        else if (who == "CHOCOLATE") {
            operations = [[0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]]
            var ach = chocolateWei - 10
            setChocolateWei(ach);
        }

        else if (who == "CAFÉ") {
            operations = [[0, 1, 1, 0, 0], [0, 1, 1, 0, 0], [0, 1, 1, 0, 0], [0, 1, 1, 0, 0], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0]]
            var al = leiteWei - 5
            setLeiteWei(al);
            var ach = chocolateWei - 5
            setChocolateWei(ach);
        }

        else if (who == "LEITE") {
            operations = [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]
            var al = leiteWei - 10
            setLeiteWei(al);
        }

        else if (who == "CAPPUCCINO") {
            operations = [[1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
            var acp = capuccinoWei - 10
            setCapuccinoWei(acp);
        }

        var aux = {
            name: "Three Pixels Sistemas",
            address: "Rua Jardim Euroa, 972 - E",
            createdAt: "2020-09-10T14:04:24.276Z",
            gps: {
                coordinate: { latitude: -27.108408, longitude: -52.610650 },
                date: "2021-06-10T14:04:24.275Z"
            },
            index: "5f5a3268466668",
            operations: operations,
            weight: [acucarWei, cafeWei, leiteWei, chocolateWei, capuccinoWei],
            tracker: {
                serial: "1111111"
            },
            updatedAt: "2020-09-10T14:04:24.276Z",
        }

        dispatch({ type: 'SET_SELECTED', data: aux })

    }

    newCoffee = () => {

        var operations = selectedMachine.operations;

        var ativos = []
        operations.map(coff => {
            coff.map((item, i) => {
                if (item == 1) {
                    const ativo = mixtures.filter((m) => m.position == i)
                    ativos.push(ativo[0].name)
                }
            })
        })

        if (ativos.length == 1) {
            if (ativos[0] == "CAFÉ") {
                const cof = coffees.filter((c) => c.name == "CAFÉ CURTO")
                coffeeEfect(cof[0].index)
            }
        }
        else {

            var unique = [...new Set(ativos)]

            if (unique.length == 1) {

                if (unique[0] == "CAFÉ") {
                    const cof = coffees.filter((c) => c.name == "CAFÉ LONGO")
                    coffeeEfect(cof[0].index)
                }

                else if (unique[0] == "CHOCOLATE") {
                    const cof = coffees.filter((c) => c.name == "CHOCOLATE")
                    coffeeEfect(cof[0].index)
                }

                else if (unique[0] == "LEITE") {
                    const cof = coffees.filter((c) => c.name == "LEITE")
                    coffeeEfect(cof[0].index)
                }

                else if (unique[0] == "CAPPUCCINO") {
                    const cof = coffees.filter((c) => c.name == "CAPPUCCINO")
                    coffeeEfect(cof[0].index)
                }
            }

            else if (unique[0] == "LEITE" && unique[1] == "CAFÉ") {
                const cof = coffees.filter((c) => c.name == "CAFÉ PINGADO")
                coffeeEfect(cof[0].index)
            }

            else if (unique[0] == "CHOCOLATE" && unique[1] == "LEITE") {
                const cof = coffees.filter((c) => c.name == "CHOCOLATE COM LEITE")
                coffeeEfect(cof[0].index)
            }
        }

        if (typeof selectedMachine.weight != 'undefined') {

            selectedMachine.weight.map((weight, i) => {

                Animated.timing(
                    mixtures[i].weight,
                    {
                        toValue: weight,
                        duration: 4500,
                        useNativeDriver: false
                    }
                ).start()

            })
        }

    }

    return (
        <ScrollView style={Style.ViewMachine}>

            <View style={Style.Row} />
            <View style={Style.MachineFundo}>

                <View style={Style.YellowMachine}>

                    <View style={Style.ViewPots}>

                        {mixtures.map(item => {

                            return (
                                <View style={Style.Pot}>
                                    <View style={Style.Tab} />
                                    <View style={Style.ViewPercentPot}>
                                        <Text style={Style.TextPercentPot}>{Math.round(item.weight._value)}%</Text>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.9} onPress={() => clickCoffie(item.name)} style={Style.ViewInfoPot}>
                                        <Text style={Style.TextInfoPot}>{item.name}</Text>
                                    </TouchableOpacity>
                                    <Animated.View style={{ ...Style.ViewIn, height: item.weight, backgroundColor: item.color }} />
                                </View>
                            )

                        })}

                    </View>

                    <View style={Style.ViewButtons}>

                        <View style={Style.ViewPanel}>
                            <Text style={Style.TextPanel}>{display}</Text>
                        </View>

                        <View style={Style.ViewTouchables}>
                            {htmlButtons.map(i => i)}
                        </View>

                        <Image source={icon_c} style={{ width: 150, height: 80 }} />

                    </View>

                    <Image source={benedetto} style={{ width: 100, height: 60 }} />

                    <View style={Style.ViewCoffee}>
                        <View style={Style.ViewSpout} />
                        <View style={Style.ViewInSpout} />
                        <Animated.View style={{ ...Style.OutCoffee, height: heightOutCoffee }} />

                        <Animated.View style={{ position: "absolute", alignItems: "center", bottom: 0, opacity: outCoffeeOpacity }}>
                            <Animated.View
                                style={{ ...Style.MakeCoffe1, height: heightMake1 }}
                            />
                            <Animated.View
                                style={{ ...Style.MakeCoffe2, height: heightMake2 }}
                            />

                            <Image source={cup} style={Style.CupPixel} />
                        </Animated.View>

                    </View>

                </View>

            </View>

        </ScrollView>
    )
}