//ЗДЕСЬ фильтрация,добвление комикса, удаление комикса

import axios from "axios"
import { CONNECTION_HOST, CONNECTION_PORT } from "../constants"

const CONNECTION = CONNECTION_HOST + ':' + CONNECTION_PORT

export const LibraryService = {
    searchGlobalLibrary: async ({ genres, prefix, isSearchByName }, token) => await axios.post(
        `${CONNECTION}/api/library/comics`,
        {
            genres: genres,
            prefix: prefix,
            isSearchByName: isSearchByName
        },
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    ),
    getAllGenres: async (token) => await axios.get(
        `${CONNECTION}/api/library/genres`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    ),
    getUserComics: async (token) => await axios.get(
        `${CONNECTION}/api/user/comics`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    ),
    addComics: async (token, comicsId) => await axios.post(
        `${CONNECTION}/api/user/addToLibrary`,
        null,
        {
            headers: { 'Authorization': `Bearer ${token}` },
            params: {'comicsId': comicsId}
        }
    ),
    removeComics: async (token, comicsId) => await axios.patch(
        `${CONNECTION}/api/user/removeComics`,
        null,
        {
            headers: { 'Authorization': `Bearer ${token}` },
            params: {'id': comicsId}
        }
    )
}