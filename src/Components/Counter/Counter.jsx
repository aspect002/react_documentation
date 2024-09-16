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
