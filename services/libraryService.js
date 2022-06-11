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
    )
}