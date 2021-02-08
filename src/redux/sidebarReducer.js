
let initialState = {
    friends:
        [
            { id: 1, name: 'Артём Артёмов', avatar: 'https://avatarko.ru/img/avatar/9/serial_8759.jpg' },
            { id: 2, name: 'Пётр Петров', avatar: 'https://avatarko.ru/img/avatar/31/muzhchina_shlyapa_galstuk_30949.jpg' },
            { id: 3, name: 'Макарон Макарошкин', avatar: 'https://avatarko.ru/img/avatar/13/film_muzhchina_12224.jpg' },
        ]
}

const sidebarReducer = (state = initialState, action) => {

    return state
}

export default sidebarReducer