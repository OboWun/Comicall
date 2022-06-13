import React, { useMemo, useRef, useEffect, useState } from 'react';
import { Animated, Image, useWindowDimensions, View } from 'react-native';
import { CONNECTION } from '../constants';
import FastImage from 'react-native-fast-image';


const Page = ({ path, isModal }) => {

    const window = useWindowDimensions();

    const clearPath = useMemo(() => path
        .split('')
        .map(symbol => symbol === '\\' ? '/' : symbol)
        .join(''),
        [path]);


        
    return (
            <Image
                style={{
                    width: window.width,
                    height: '100%',
                }}
                resizeMode = {FastImage.resizeMode.cover}
                source={{ uri: `${CONNECTION}/storage/?path=${clearPath}` }}
                blurRadius = {0}
            />
        
    )
}

export default Page;