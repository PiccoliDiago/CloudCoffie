import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var mWidth = width / 2

var wView = (width - 30) / 4

const Style = StyleSheet.create({
    Content: {
        height: 160,
        marginBottom: 30,
        backgroundColor: "#292929",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,

    },
    ViewInfo: {
        flexDirection: "row",
        height: 24
    },
    ViewStatus: {
        flexDirection: "row",
        height: 25,
        position: "absolute",
        bottom: 0,
        left: 10
    },
    Icon: {
        paddingTop: 2
    },
    TextName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    TextInfo: {
        fontSize: 13,
        marginLeft: 10,
        color: "#fff",
    },
    ViewMap: {
        height: 150,
        width: 150,
        borderRadius: 85,
        borderWidth: 4,
        borderColor: "#333",
        zIndex: 1,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: -5,
        top: 5
    }

})

export default Style