import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,  how are you?', likesCount: 12},
                {id: 2, message: 'iam fine thanks', likesCount: 10}
            ],
            newPostText: 'It\'s fake text. Don\'t worry about.'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Lol'},
                {id: 3, message: 'Footbol'},
                {id: 4, message: 'Privet'},
                {id: 5, message: 'Medved'},
            ],
            dialogs: [
                {id: 1, name: 'Dmitry'},
                {id: 2, name: 'Marina'},
                {id: 3, name: 'Alena'},
                {id: 4, name: 'Alina'},
                {id: 5, name: 'Maria'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State update')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // Паттерн Наблюдатель - observer
    },

    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
