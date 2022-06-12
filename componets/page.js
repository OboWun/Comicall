import React, { useMemo, useRef, useEffect, useState } from 'react';
import { Animated, Image, useWindowDimensions, View } from 'react-native';
import { CONNECTION } from '../constants';

const Page = ({ path, isModal }) => {

    const window = useWindowDimensions();

    const clearPath = useMemo(() => path
        .split('')
        .map(symbol => symbol === '\\' ? '/' : symbol)
        .join(''),
        [path]);

    return (
            <Animated.Image
                style={{
                    width: window.width,
                    height: '100%'
                }}
                resizeMethod='scale'
                resizeMode='contain'
                source={{ uri: `${CONNECTION}/storage/?path=${clearPath}` }}
                blurRadius={isModal ? 2 : 0}
            />
        
    )
}

export default Page;