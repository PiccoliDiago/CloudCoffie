import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var mWidth = width / 2

const Style = StyleSheet.create({
    Content: {
        width: width,
        height: height,
    },
    Opacity: {
        position: "absolute",
        width: width,
        height: height,
        backgroundColor: "#222",
        opacity: 0.9,
        zIndex: 1
    },
    ImageBackground: {
        width: width,
        height: height,
        position: "absolute",
    },
    Box: {
        flex: 1,
        zIndex: 2,
        marginTop: 60,
        marginBottom: 100,
    },
    ViewPesquisa: {
        backgroundColor: '#fff',
        height: 45,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 15,
        paddingRight: 15,
        flexDirection: "row",
        overflow: "hidden"
    },
    IconSearch: {
        backgroundColor: "#99512f",
        width: 45,
        borderColor: "#fff",
        borderWidth: 1.5,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    TextPesquisa: {
        color: "#222",
        width: "100%",
        fontSize: 17,
        marginLeft: 10
    },
    FlatList: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        marginTop: 15,
    }
})

export default Style