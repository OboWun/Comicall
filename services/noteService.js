import axios from "axios";
import { CONNECTION } from "../constants";


export const NoteService = {
    create: async (pageId, note, token) => await axios.post(
        `${CONNECTION}/api/comics/note/create`,
        {
            note: note,
            pageId: pageId
        },
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    ),
    edit: async (pageId, note, token) => await axios.patch(
        `${CONNECTION}/api/comics/note/update`,
        {
            note: note,
            pageId: pageId
        },
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    ),
    remove: async (noteId, token) => await axios.delete(
        `${CONNECTION}/api/comics/note/delete`,
        {
            params: {'noteId': noteId},
            headers: {'Authorization': `Bearer ${token}`}
        }
    )

}