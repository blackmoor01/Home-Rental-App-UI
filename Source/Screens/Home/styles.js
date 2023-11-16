import {Dimensions} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

const {width} = Dimensions.get("screen");
const styles = {
    Input:{
        backgroundColor:"#f2eeed",
        height:50,
        flex:1,
        borderRadius:10,
        alignContent:"center",
        flexDirection:"row",
        alignItems:"center",
        marginRight:20
    },

    optionButton:{
        backgroundColor: "#A0DAFB",
        height:50,
        width:50,
        borderRadius: 10,
        justifyContent:"center",
        alignItems: "center"
    },

    categoryListContainer:{
        marginTop:40,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal:10,
    },

    categoryListText:{
        padding:10,
        fontWeight:500,
    },

    activeCategoryListText:{
        backgroundColor:"#A0DAFB"
    },

    minorCategoryListText:{
        padding:10,
        fontWeight:300,
    },

    minorActiveCategoryListText:{
        fontWeight:400,
        fontSize:18
    },

    optionListContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20,
        paddingHorizontal: 20,
    },

    optionCard:{
        height:250,
        width:width/2 + 60,
        //elevation:15,
       // backgroundColor:"#f2eeed",
        borderRadius:20,
        alignItems:"center",
       // paddingTop:10,
       // paddingHorizontal:10,
        margin:10,
        marginLeft:-50

    },

    optionCardImage:{
        height:50,
        width:50
    },

    pictureList:{
        backgroundColor: "#1b6ccf",
        height:72,
        width:72,
        borderRadius: 10,
        justifyContent:"center",
        alignItems: "center"
    },


    SuggestionList:{
        backgroundColor: "#A0DAFB",
        height:50,
        width:50,
        borderRadius: 10,
        justifyContent:"center",
        alignItems: "center"
    },
};

export default styles;