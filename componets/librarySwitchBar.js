import React, { useRef } from 'react'
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Animated,
    Easing,
    Image
} from 'react-native'
import Icon from '../shared/icon';

const LibrarySwitchBar = ({ state, descriptors, navigation }) => {


    const transformAnim = useRef(new Animated.Value(0)).current;

    const pressHandler = () => {
        const nextIndex = Math.abs(state.index - 1)
        navigation.navigate({ name: state.routes[nextIndex].name, merge: true });
        handlerAnimate(!nextIndex)
    }

    const handlerAnimate = (event) => {
        Animated.timing(transformAnim, {
            toValue: event ? 0 : 75,
            duration: 100,
            easing: Easing.ease,
            useNativeDriver: false
        }).start();
    }

    return (
        <View style={styles.tabbar}>
            <TouchableWithoutFeedback onPress={pressHandler}>
                <View style={styles.switch}>
                    <View style={styles.background}>
                        <View style={styles.container}>
                            <Icon iconImg={require('../assets/switch/MyLibrary.png')}></Icon>
                            <Icon iconImg={require("../assets/switch/GlobalLibrary.png")}></Icon>
                        </View>
                    </View>
                    <Animated.View style={[styles.handler, { left: transformAnim }]}>
                        <Image source={require('../assets/switch/Books.png')} />
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: '#FFC204',
        height: 74,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    background: {
        backgroundColor: "#BEBEBE",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 21,
        borderColor: "#363636",
        height: "100%"
        //box-shadow нужно добавить
    },
    switch: {
        width: 147,
        height: 37,
        position: "relative",
    },
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 13,
        paddingTop: 6,
    },
    handler: {
        backgroundColor: "#363636",
        borderRadius: 29,
        height: '100%',
        width: 71,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',

    }
})


export default LibrarySwitchBar;