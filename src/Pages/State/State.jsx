import React from 'react';
import Typography from 'Components/Typography/Typography';
import Counter from '../../Components/Counter/Counter';
import ButtonUp from 'Utils/ButtonUp/ButtonUp';
const State = () => {
    const exampleText = `State (состояние) в React – это объект простого JS, позволяющий отслеживать данные компонента. Состояние компонента может меняться. Смена состояния компонента зависит от функциональности приложения. Изменения могут основываться на ответе от пользователя, новых сообщениях с сервера, ответа сети и т.д.

    ~Состояние компонента должно быть приватным для компонента и контролироваться им. Изменения состояния компонента необходимо делать внутри компонента – инициализация и обновление состояния компонента.

    \`\`\`
    class App extends React.Component {
        constructor(props) {
            super(props)
            this.state = { username: 'johndoe' }
        }
        render() {
            return (
                <div> { this.state.username } </div>
            )
        }
    };
    \`\`\`
    Единственный допустимый способ обновления состояния компонента – через setState().

    Так нельзя менять состояние: this.state.username='Mark'

    1 способ изменить state:

    \`\`\`
    this.setState({username:'Mark'});
    \`\`\`
    2 способ изменить state:

    \`\`\`
    this.setState(() => ({ username: 'Mark' }))
    \`\`\`
    В функциональных компонентах state создается с помощью хука useState()

    Чтобы воспользоваться им, необходимо импортировать useState из 'react':

    \`\`\`
    import {useState} from 'react';
    \`\`\`
    Хук useState() принимается в качестве параметра первоначальное значение для переменной, а возвращает массив, содержащий переменную и функцию, которая изменяет эту переменную.

    При объявлении state часто используют деструктурирующее присваивание:

    \`\`\`
    const [name, setName] = useState('Mark');
    \`\`\`
    ~Примером работы со state является счётчик, который изменяется при нажатии на кнопку.
    `;

    const exampleText2= `Код имеет следующий вид:

    \`\`\`
import React, { useState } from 'react';
import { CounterContainer, CountButton, CountText } from './styled.jsx';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleDecrement = () => setCount(count - 1);
    const handleIncrement = () => setCount(count + 1);

    return (
        <CounterContainer>
            <CountButton onClick={handleDecrement}>-1</CountButton>
            <CountText>Счётчик: {count}</CountText>
            <CountButton onClick={handleIncrement}>+1</CountButton>
        </CounterContainer>
    );
};

export default Counter;
    \`\`\`
`

    return (
        <div>
            <div id="top" style={{ position: 'relative', top: 0 }}></div>

            <Typography title="State (UseState)">
                {exampleText}
            </Typography>
            <Counter />
            <Typography >
                {exampleText2}
            </Typography>
            <ButtonUp />
        </div>
    );
};

export default State;
