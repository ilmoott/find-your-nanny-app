export const initialState = {
    avatar: '',
    favorites: [],
    appointments: []
};

export const UserReducer = (state, action) => {

    switch(action.type){
        case 'setAvatar': 
            return { ...state, avatar: action.payload.avatar}; // essa ação posibilita trocar o avatar
        break;
        default:
            return state;
    }

}