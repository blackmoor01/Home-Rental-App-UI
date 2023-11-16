import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    Pressable,
    Image,
    ScrollView,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { MaterialIcons,EvilIcons,Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const HomeScreen = () => {
    const navigation = useNavigation();
    const DetailPage = () => {
        navigation.navigate('DetailScreen')
    }
    const ListCategories = () => {
        const [selectedCategoryIndex,setSelectedCategoryIndex] = useState(0)
        const categoryList = ['House', 'Apartment', 'Hotel', 'Villa'];
        return(
            <View style={styles.categoryListContainer}>
                {categoryList.map((category,index)=>(
                    <TouchableOpacity key={index} onPress={()=>setSelectedCategoryIndex(index)}>
                        <Text style={[
                            styles.categoryListText,(index === selectedCategoryIndex && styles.activeCategoryListText)]}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    };
    const MinorListCategories = () => {
        const minorCategoryList = ['Near from you', 'see more'];
        const [selectedMinorCategoryIndex,setSelectedMinorCategoryIndex] = useState(0);
        return(
            <View style={styles.categoryListContainer}>
                {minorCategoryList.map((minor,index)=>(
                    <Pressable key={index} onPress={()=>setSelectedMinorCategoryIndex(index)}>
                        <Text style={[
                            styles.minorCategoryListText,(index === selectedMinorCategoryIndex && styles.minorActiveCategoryListText )
                        ]}>{minor}</Text>
                    </Pressable>
                ))}
            </View>
        )
    };

    const MiniminorListCategories = () => {
        const minorCategoryList = ['Best for you', 'see more'];
        const [selectedMinorCategoryIndex,setSelectedMinorCategoryIndex] = useState(0);
        return(
            <View style={styles.categoryListContainer}>
                {minorCategoryList.map((minor,index)=>(
                    <Pressable key={index} onPress={()=>setSelectedMinorCategoryIndex(index)}>
                        <Text style={[
                            styles.minorCategoryListText,(index === selectedMinorCategoryIndex && styles.minorActiveCategoryListText )
                        ]}>{minor}</Text>
                    </Pressable>
                ))}
            </View>
        )
    };

    return(
        <SafeAreaView>
            <LinearGradient colors={["#0A8ED9","#A0DAFB"]}>
                <ScrollView>
                    <View style={{marginLeft:"4%"}}>
                        <Text style={{color:"grey",marginTop:"5%"}}>Location</Text>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{color:"dark",fontSize:30}}>Jakarta</Text>
                            <MaterialIcons name="expand-more" size={24} color="grey" style={{marginTop:"2%"}} />
                            <MaterialIcons name="notifications" size={30} color={"white"} style={{marginLeft:"55%"}} />
                        </View>
                    </View>

                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        paddingHorizontal:20,
                    }}>
                        <View style={styles.Input}>
                            <EvilIcons name="search" size={24} color="white" />
                            <TextInput placeholder={"Search address, or near you"} />
                        </View>
                        <View style={styles.optionButton}>
                            <LinearGradient colors={["#A0DAFB","#0A8Ed9"]}/>
                            <Ionicons name="options-outline" size={24} color="white" />
                        </View>
                    </View>
                    <ListCategories/>
                    <MinorListCategories/>

                    <View style={{flex:1,justifyContent:"center",flexDirection:"row",marginLeft:"42%"}}>
                        <Pressable onPress={DetailPage}>
                            <ImageBackground source={require('../../../assets/DreamsvileHouse.png')} style={styles.optionCard}/>
                        </Pressable>
                        <ImageBackground source={require('../../../assets/AscotHouse.png')} style={styles.optionCard}/>
                    </View>

                    <MiniminorListCategories/>
                    <View style={{marginLeft:20}}>
                        <View style={{flexDirection:"row"}}>
                            <Image source={require('../../../assets/exterior1.jpg')} style={{height:80,width:80,borderRadius:20,marginBottom:20}}/>
                            <View style={{margin:10,marginTop:-1}}>
                                <Text style={{fontSize:18,fontWeight:"700"}}>Orchad House</Text>
                                <Text style={{marginTop:10,color:"blue"}}>Rp. 2,500,000.000 / Year</Text>
                                <View style={{flexDirection:"row"}}>
                                    <View style={{flexDirection:"row",marginRight:20}}>
                                        <FontAwesome5 name="bed" size={24} color="black" />
                                        <Text style={{marginTop:6,marginLeft:5}}>6 Bedroom</Text>
                                    </View>
                                    <View style={{flexDirection:"row"}}>
                                        <FontAwesome name="bathtub" size={24} color="black" />
                                        <Text style={{marginTop:6,marginLeft:5}}>4 Bathroom</Text>
                                    </View>
                                </View>
                            </View>
                            </View>

                        <View style={{flexDirection:"row"}}>
                            <Image source={require('../../../assets/exterior2.jpg')} style={{height:80,width:80,borderRadius:20,marginBottom:10}}/>
                            <View style={{margin:10,marginTop:-1}}>
                                <Text style={{fontSize:18,fontWeight:"700"}}>The Hollies House</Text>
                                <Text style={{marginTop:10,color:"blue"}}>Rp. 2,000,000.000 / Year</Text>
                                <View style={{flexDirection:"row"}}>
                                    <View style={{flexDirection:"row",marginRight:20}}>
                                        <FontAwesome5 name="bed" size={24} color="black" />
                                        <Text style={{marginTop:6,marginLeft:5}}>5 Bedroom</Text>
                                    </View>
                                    <View style={{flexDirection:"row"}}>
                                        <FontAwesome name="bathtub" size={24} color="black" />
                                        <Text style={{marginTop:6,marginLeft:5}}>2 Bathroom</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Image source={require('../../../assets/exterior3.jpg')} style={{height:80,width:80,borderRadius:20,marginBottom:10}}/>
                            <View style={{margin:10,marginTop:-1}}>
                                <Text style={{fontSize:18,fontWeight:"700"}}>The Sea Breezes House</Text>
                                <Text style={{marginTop:10,color:"blue"}}>Rp. 2,500,000.000 / Year</Text>
                                <View style={{flexDirection:"row"}}>
                                    <View style={{flexDirection:"row",marginRight:20}}>
                                        <FontAwesome5 name="bed" size={24} color="black" />
                                        <Text style={{marginTop:6}}>6 Bedroom</Text>
                                    </View>
                                    <View style={{flexDirection:"row"}}>
                                        <FontAwesome name="bathtub" size={24} color="black" />
                                        <Text style={{marginTop:6}}>4 Bathroom</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                </ScrollView>
            </LinearGradient>
        </SafeAreaView>

    )
};

export default HomeScreen;