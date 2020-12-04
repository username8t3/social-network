const UPDATE_NEW_MESSAGE_BODY= 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi Hi'},
        {id: 3, message: 'Hi Hi Hi Hi'},
        {id: 4, message: 'Hi Hi Hi Hi Hi Hi'},
        {id: 5, message: 'Hi Hi Hi Hi Hi Hi Hi Hi'},
    ],
    dialogs: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Marina'},
        {id: 3, name: 'Alena'},
        {id: 4, name: 'Alina'},
        {id: 5, name: 'Maria'},
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;
