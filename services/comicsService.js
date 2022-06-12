import axios from "axios";
import { CONNECTION } from "../constants";

export const ComicsService = {
    read: async (token, comicsId) => await axios.get(
        `${CONNECTION}/api/comics/read`,
        {
            headers: { 'Authorization': `Bearer ${token}` },
            params: { 'comicsId': comicsId }
        }
    ),

    setBookmark: async (token, comicsId, page) => await axios.patch(
        `${CONNECTION}/api/comics/setBookmark`,
        null,
        {
            headers: { 'Authorization': `Bearer ${token}` },
            params: { 'comicsId': comicsId, 'pageNumber': page }
        }
    )
}