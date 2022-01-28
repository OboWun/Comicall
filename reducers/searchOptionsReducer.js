import data from "../data/data";

export const searchOptionsReducer = (state, action) => {
    switch (action.type) {
        //Храним как объект ПЕРЕРАБОТАТЬ АЛОРИТМ передаем tag
        case 'addTag':
            for(let tag of state.options.tags){
                if(tag.id === action.payload.id)
                    return {...state};
            }
            return {...state,
                 options: {...state.options, tags: [...state.options.tags, action.payload]}}
        //Удаляем по id, переработать АЛГОРИТМ
        case 'removeTag':
            const tempTags = state.options.tags.filter(item => item.id != action.payload)
            return {...state,
                options: {...state.options, tags: tempTags}
            }
        case 'changeRequest':
            return {...state,
                 options:{...state.options, request: action.payload}}
        case 'switchOption':
            return {...state, 
                    options: {...state.options, isTitleSearch: !state.options.isTitleSearch}}
        case 'mutateData': {
            return {...state, data: action.payload}
        }
    }
}