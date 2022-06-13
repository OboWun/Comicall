import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Genre from '../componets/genre';
import { CONNECTION, LOADING } from '../constants'
import { READ_COMICS } from '../routes/libraryNavigator';
import Icon from '../shared/icon';
import LoadingIndicator from '../shared/loadingIndicator';
import PrimaryButton from '../shared/primaryButton';
import { addComics } from '../store/userLibrary/asyncActioncs';

const ComicsInfo = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const { posterPath, name, id, authorName, publishYear, genres, description } = route.params;

    const dispatch = useDispatch();
    const { token } = useSelector(state => state.user);
    const { userComics, addComicsState } = useSelector(state => state.userLibrary);

    const clearPath = useMemo(() => posterPath
        .split('')
        .map(symbol => symbol === '\\' ? '/' : symbol)
        .join(''),
        [route.params.posterPath]);

    const isInLibrary = userComics.findIndex(comics => comics.id === id) != -1;

    const addComicsHandler = () => dispatch(addComics({ token: token, comicsId: id }));


    const buildAddIcon = () => {
        if (addComicsState == LOADING) return <LoadingIndicator />
        if (isInLibrary) return <Image style={styles.image} source={require('../assets/icons/added.png')} />
        return <Image style={styles.image} source={require('../assets/icons/add.png')} />
    }

    const read = () => {
        if (!isInLibrary) addComicsHandler();
        navigation.navigate(READ_COMICS, { id: id, author: authorName })
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image
                    loadingIndicatorSource={require('../assets/loadingSource.png')}
                    style={{ width: 180, height: 258, resizeMode: 'contain' }}
                    source={{ uri: `${CONNECTION}/storage/?path=${clearPath}` }} />
                <View style={styles.column}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{name}</Text>
                        <TouchableOpacity onPress={addComicsHandler} disabled={isInLibrary}>
                            <View style={styles.iconWrapper}>
                                {buildAddIcon()}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.mediumText}>{authorName}</Text>
                    <Text style={styles.smallText}>{publishYear}</Text>
                    <View style={{ marginTop: 27 }}>
                        <PrimaryButton
                            title='Начать читать'
                            eventHandlet={read}
                            isLoading={addComicsState == LOADING}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.gentesContainer}>
                {genres.map(genre => <Genre key={genre.name} name={genre.name} />)}
            </View>
            <Text style={styles.title}>Краткое описание</Text>
            <Text style={styles.descriptionText}>{description}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 9,
        paddingVertical: 22,
        backgroundColor: '#FFFFFF'
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        flex: 1
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    title: {
        fontFamily: 'caveat-bold',
        fontSize: 36,
        lineHeight: 45,
        color: '#363636',
        flexWrap: 'wrap',
        marginRight: 20,
    },

    iconWrapper: {
        width: 32,
        height: 32,
        marginRight: 10,
        marginTop: 10,
    },

    image: {
        height: '100%',
        resizeMode: 'cover'
    },
    mediumText: {
        marginTop: 17,
        fontFamily: 'caveat-medium',
        fontSize: 18,
        lineHeight: 18,
        color: 'rgba(54, 54, 54, 0.8)',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    smallText: {
        color: '#000000',
        fontFamily: 'caveat-medium',
        fontSize: 14,
        lineHeight: 16,
        marginTop: 3,
    },
    gentesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    descriptionText: {
        fontFamily: 'caveat-medium',
        fontSize: 24,
        lineHeight: 30,
        color: 'rgba(54, 54, 54, 0.8)'
    }



})

export default ComicsInfo;