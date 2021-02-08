import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
  _state: {
    dialogsPage: {
      users: [
        { id: 1, name: "Трансформер Трансформов" },
        { id: 2, name: "Иван Иванов" },
        { id: 3, name: "Петр Петров" },
        { id: 4, name: "Сидр Сидоров" },
        { id: 5, name: "Большое-длинное-имя И фамилия" },
        { id: 6, name: "Дядя Стёпа" },
        { id: 7, name: "Кот Котов" },
      ],
      messages: [
        { id: 1, message: "Задача этого приветственного письма — показать вашу благодарность и признательность." },
        { id: 2, message: "Почему это важно? Конечно, мы как маркетологи тратим время на создание писем, мы постоянно находимся в поисках новых идей, чтобы произвести впечатление на наших клиентов с помощью рассылок, и стараемся влюбить их в наш бренд. Им же остается только открывать и читать наши письма." },
        { id: 3, message: "Пожалуйста, выражайте искреннее уважение к клиентам." },
        { id: 4, message: "Как мы говорили выше, приветственное письмо задает тон ваших отношений с клиентами. Будьте собой и покажите себя в первом письме с самой лучшей стороны." },
        { id: 5, message: "Кроме того, ваш стиль — возможно, именно то, что подписчики хотят увидеть, открыв вашу первую рассылку." },
      ],
      newMessageText: ''
    },
    profilePage: {
      posts: [
        { id: 1, message: 'Привет, как твои дела?', likeCount: getRandomInt(100), dislikeCount: getRandomInt(10) },
        { id: 2, message: 'Когда начнем писать на реакте?', likeCount: getRandomInt(100), dislikeCount: getRandomInt(10) },
        { id: 3, message: 'Реакт, это интересно', likeCount: getRandomInt(40), dislikeCount: getRandomInt(10) },
        { id: 4, message: 'Дальше действвать будем мы!', likeCount: getRandomInt(50), dislikeCount: getRandomInt(10) },
        { id: 5, message: 'Привет, как твои дела?', likeCount: getRandomInt(50), dislikeCount: getRandomInt(10) },
      ],
      newPostText: ''
    },
    sideBar: {
      friends:
        [
          { id: 1, name: 'Артём Артёмов', avatar: 'https://avatarko.ru/img/avatar/9/serial_8759.jpg' },
          { id: 2, name: 'Пётр Петров', avatar: 'https://avatarko.ru/img/avatar/31/muzhchina_shlyapa_galstuk_30949.jpg' },
          { id: 3, name: 'Макарон Макарошкин', avatar: 'https://avatarko.ru/img/avatar/13/film_muzhchina_12224.jpg' },
        ]

    }
  },
  _callSubscriber() {
    console.log('state was changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sideBar = sidebarReducer(this._state.sideBar, action)

    this._callSubscriber(this._state)

  },
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default store
window.store = store