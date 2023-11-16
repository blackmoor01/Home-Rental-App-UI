import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import {Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import styles from "./styles";
import {LinearGradient} from "expo-linear-gradient";
import HomeScreen from "../Home";
import Home from "../Home";

const Menu = () => {
    const navigation = useNavigation();
    const HomePage = () => {
        navigation.navigate("HomeScreen")
    }
    return(
        <SafeAreaView >
            <LinearGradient colors={["#0A8ED9","#A0DAFB"]}>
                <ScrollView>
                    <View style={{marginTop:"10%"}}>
                        <View style={styles.menuListContainer}>
                            <MaterialCommunityIcons name={"home-minus-outline"} size={24} color={"white"} />
                            <Text style={styles.menuListText} onPress={HomePage} >Home</Text>
                        </View>

                        <View style={styles.menuListContainer}>
                            <Ionicons name="person-outline" size={24} color="white" />
                            <Text style={styles.menuListText}>Profile</Text>
                        </View>

                        <View style={styles.menuListContainer}>
                            <Octicons name="location" size={24} color="white" />
                            <Text style={styles.menuListText}>Nearby</Text>
                        </View>

                        <View style={{backgroundColor:"grey",width:"50%",height:1,marginBottom:20}} />

                        <View style={styles.menuListContainer}>
                            <FontAwesome name="bookmark-o" size={24} color="white" />
                            <Text style={styles.menuListText}>Bookmark</Text>
                        </View>

                        <View style={styles.menuListContainer}>
                            <MaterialIcons name="notifications" size={24} color="white" />
                            <Text style={styles.menuListText}>Notification</Text>
                        </View>

                        <View style={styles.menuListContainer}>
                            <Feather name="message-circle" size={24} color="white" />
                            <Text style={styles.menuListText}>Message</Text>
                        </View>

                        <View style={{backgroundColor:"grey",width:"50%",height:1,margin:10}} />

                        <View style={styles.menuListContainer}>
                            <MaterialIcons name="settings" size={24} color="white" />
                            <Text style={styles.menuListText}>Setting</Text>
                        </View>

                        <View style={styles.menuListContainer}>
                            <Ionicons name="help-circle-outline" size={24} color="white" />
                            <Text style={styles.menuListText}>Help</Text>
                        </View>

                        <View style={styles.menuListContainer}>
                            <FontAwesome name="power-off" size={24} color="white" />
                            <Text style={styles.menuListText}>Logout</Text>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
};

export default Menu;