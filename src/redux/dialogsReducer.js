const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let text = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: text }],
            }
        }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageText) =>
    ({ type: SEND_MESSAGE, newMessageText })


export default dialogsReducer