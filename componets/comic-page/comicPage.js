import { FlatList, StatusBar, View } from "react-native"
import Header from "../header/header"


const ComicPage = ({pages}) =>{
    return (
        <View>
           <Header></Header>
            <FlatList horizontal = {true}></FlatList> 
        </View>
        
    )
}