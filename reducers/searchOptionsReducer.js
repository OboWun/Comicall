import data from "../data/data";

export const searchOptionsReducer = (state, action) => {
    switch (action.type) {
        case 'addTag':
            break;
        case 'removeTag':
            break;
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