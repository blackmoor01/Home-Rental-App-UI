import {View, Text, ImageBackground, Image, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import { Ionicons,Feather } from '@expo/vector-icons';
import styles from "../Home/styles";


const DetailScreen = () => {
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={{flex:1,alignItems:"center"}}>
                    <Image source={require('../../../assets/Dreamsville.png')} style={{height:350,width:"90%"}}></Image>
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:"700",margin:20}}>Description</Text>
                    <Text style={{marginLeft:20}}>The 3 level house that has modern design, has a large pool and a garage that fits up to four cars.
                        <Text style={{color:"#0A8ED9",fontWeight:"bold"}}>Show more</Text>
                    </Text>
                </View>

                <View style={{flexDirection:"row",marginTop:20,margin:20}}>
                    <Image source={require('../../../assets/Profile-photo.png')} style={{height:50,width:50,borderRadius:"100%"}}/>
                    <View style={{flexDirection:"row"}}>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:18,fontWeight:"500"}}>Garry Allen</Text>
                            <Text>Owner</Text>
                        </View>
                        <View style={{flexDirection:"row",marginLeft:"25%"}}>
                            <View style={[styles.optionButton,{marginRight:10,backgroundColor: "#0A8ED9"}]}>
                                <Ionicons name="call-outline" size={24} color="white" />
                            </View>
                            <View style={[styles.optionButton,{backgroundColor: "#0A8ED9"}]}>
                                <Feather name="message-circle" size={24} color="white" />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:20,margin:20}}>
                    <Text style={{fontSize:20,fontWeight:"700"}}>Gallery</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",margin:20}}>
                    <Image source={require('../../../assets/interior1.jpg')} style={styles.pictureList} />
                    <Image source={require('../../../assets/interior2.jpg')} style={styles.pictureList} />
                    <Image source={require('../../../assets/interior3.jpg')} style={styles.pictureList}/>
                    <ImageBackground source={require('../../../assets/interior4.jpg')} style={styles.pictureList}>
                        <Text style={{color:"white",fontWeight:"700"}}>+5</Text>
                    </ImageBackground>
                </View>
                <View>
                    <Image source={require('../../../assets/Map.png')} style={{height:300,width:"100%"}}/>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
                        <View>
                            <Text style={{color:"grey"}}>Price</Text>
                            <Text style={{fontSize:20,fontWeight:"700"}}>Rp. 2,500,000.00 / Year </Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{backgroundColor:"#0A8ED9",borderRadius:20}}>
                                <Text style={{fontSize:20,fontWeight:"700",padding:20}}>Rent Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};

export default DetailScreen;