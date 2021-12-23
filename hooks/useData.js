import React, { useCallback, useEffect, useState } from "react";
import data from "../data/data";

const useData = () =>{
    const [localData, setData] = useState({...data});


    const addNote =  (id, page, text) =>  {
        setData({
            ...localData, 
            comics: localData.comics.map((comic) => {
                if(comic.id == id){
                    return {
                        ...comic,
                        notes: [...comic.notes, {page: page, text: text}]
                    }
                }
                return comic;
            })
        });
    }

    const addMarkbook = (id, page) =>{
        
        setData({
            ...localData, 
            comics: localData.comics.map((comic) => {
                if(comic.id == id){
                    return {
                        ...comic,
                        initialPage: page
                    }
                }
                return comic;
            })
        })

        console.log("Initial page of this: " + localData.comics[id].initialPage)
    }

    return {
        data: localData, 
        addNote,
        addMarkbook
    }
    
}

export default useData