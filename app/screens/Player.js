import { StyleSheet, FlatList, Text, View, Image, Dimensions, Pressable } from "react-native";
import { Ionicons } from "react-native-vector-icons/Ionicons";
import React from "react";
import songs from "../../model/data";

const {height, width} = Dimensions.get("window");

export default function Player () {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FlatList
                    data={songs}
                    renderItem={({item}) => (
                        <View>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={item.artwork} />
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={{color: 'white'}}>{item.title}</Text>
                                <Text style={{color: '#737373'}}>{item.artist}</Text>
                            </View>
                        </View>
                    )}
                    horizontal
                    pagingEnabled
                />
            </View>

            <View style={styles.bottomContainer}>
                <Pressable>
                    <Ionicons name="play-skip-back-outline" color="#00ffff" />
                </Pressable>

                <Pressable>
                    <Ionicons name="ios-play-circle" color="#00ffff" />
                </Pressable>

                <Pressable>
                    <Ionicons name="play-skip-forward-outline" color="#00ffff" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    mainContainer: {
        flex: 1
    },

    imageContainer: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        height: 340,
        width: 300,
        borderRadius: 15
    },

    bottomContainer: {

    }
});