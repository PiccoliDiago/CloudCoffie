import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var mWidth = width / 2
var wView = (width) / 4

const Style = StyleSheet.create({
    TabNav: {
        position: "absolute",
        bottom: 0,
        borderRadius: 30,
        backgroundColor: "#fff",
        width: width,
        //left: mWidth - (width - 30) / 2,
        elevation: 1,
        zIndex: 100,
    },
    ViewTab: {
        width: wView,
        height: 85,
        justifyContent: "center",
        alignItems: "center"
    },
    Icon: {
        shadowColor: "#222",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 1.84,
    },
    ViewInfo: {
        width: wView - 30,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#99512f", // 6f4937
        borderRadius: 10,
        shadowColor: "#333",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 1.84,
    },
    TextInfo: {
        fontSize: 15,
        color: "#fff"
    },

    ViewMachine: {
        backgroundColor: "#FFF",
        height: height,
        width: width,
    },
    Row: {
        height: 5,
        width: width,
        backgroundColor: "#e1e1e1"
    },
    MachineFundo: {
        height: 680,
        width: width / 1.1,
        backgroundColor: "#222",
        left: (width / 2) - (width / 1.1) / 2,
        top: 60,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    RowCimaMachine: {
        backgroundColor: "#999",
        height: 10,
        width: '100%',
        zIndex: 2,
    },
    YellowMachine: {
        width: (width / 1.1) / 1.1,
        height: 680,
        backgroundColor: '#e0b104',//'#ebd10e',
        position: "absolute",
        left: ((width / 1.1) / 2) - ((width / 1.1) / 2) / 1.1,
        alignItems: "center"
    },
    ViewPots: {
        height: 100,
        flexDirection: "row",
        backgroundColor: "#222",
        width: (width / 1.1) / 1.1 - 20,
    },
    Pot: {
        borderLeftColor: "#fff",
        borderLeftWidth: 1,
        borderRightColor: "#fff",
        borderRightWidth: 1,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        width: (((width / 1.1) / 1.1 - 20) / 5) - 5,
        marginLeft: 2.5,
        marginRight: 2.5,
        alignItems: "center"
    },
    Tab: {
        top: -5,
        width: 10,
        height: 5,
        backgroundColor: "#222"
    },
    ViewInfoPot: {
        position: "absolute",
        top: -30,
        height: 25,
        backgroundColor: "#fff",
        borderColor: "#222",
        borderWidth: 0.5,
        width: '100%',
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    TextInfoPot: {
        color: "#222",
        fontSize: 7,
        fontWeight: "bold",
    },
    ViewPercentPot: {
        position: "absolute",
        top: -50,
        height: 20,
        backgroundColor: "#222",
        width: '65%',
        zIndex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    TextPercentPot: {
        color: "#fff",
        fontSize: 9,
        fontWeight: "bold",
    },
    ViewButtons: {
        height: 330,
        width: (width / 1.1) / 1.1 - 20,
        top: 0,
        backgroundColor: "#222",
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        alignItems: "center"
    },
    ViewPanel: {
        height: 15,
        width: 100,
        backgroundColor: "#7ec6ed",
        marginTop: 20,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    TextPanel: {
        color: "#222",
        fontSize: 8,
        paddingLeft: 5,
        paddingRight: 5
    },
    ViewTouchables: {
        width: (width / 1.1) / 1.1 - 30,
        marginTop: 20,
    },
    RowTouchable: {
        width: '100%',
        height: 30,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "center"
    },
    Space: {
        width: "10%",
    },
    Touchable1: {
        borderWidth: 1,
        width: "43%",
        height: 30,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        paddingLeft: 5,
        paddingRight: 15
    },
    Touchable2: {
        borderWidth: 1,
        width: "43%",
        height: 30,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 5,
        paddingLeft: 15
    },
    TextDesc: {
        color: "#fff",
        fontSize: 8,
        fontWeight: "bold"
    },
    Button1: {
        position: "absolute",
        zIndex: 2,
        height: 33,
        width: 33,
        right: -10,
        backgroundColor: "#222",
        borderWidth: 3,
        borderRadius: 50
    },
    Button2: {
        position: "absolute",
        zIndex: 2,
        height: 33,
        width: 33,
        left: -10,
        backgroundColor: "#222",
        borderColor: '#1b9be0',
        borderWidth: 3,
        borderRadius: 50
    },
    ViewIn: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    ViewCoffee: {
        height: 200,
        position: "absolute",
        bottom: 0,
        width: (width / 1.5) / 1.5 - 20,
        backgroundColor: "#222",
        borderTopLeftRadius: 150,
        borderTopRightRadius: 150,
        alignItems: "center",
        borderBottomWidth: 2,
        overflow: "hidden"
    },
    ViewSpout: {
        width: 20,
        height: 10,
        backgroundColor: "#99512f"
    },
    ViewInSpout: {
        width: 30,
        height: 10,
        backgroundColor: "#95850c",
        borderColor: "#000",
        borderWidth: 2
    },
    CupPixel: {
        width: 150,
        height: 120,
        bottom: 0,
        position: "absolute",
    },
    OutCoffee: {
        width: 2,
        backgroundColor: "#c49d5e"
    },
    MakeCoffe1: {
        backgroundColor: "#c49d5e",
        width: 35,
        position: "absolute",
        bottom: 5
    },
    MakeCoffe2: {
        backgroundColor: "#c49d5e",
        width: 45,
        position: "absolute",
        bottom: 45
    },

})

export default Style