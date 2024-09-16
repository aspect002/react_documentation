import styled from 'styled-components';

export const CounterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
`;

export const CountButton = styled.button`
    background-color: transparent;
    color: #007bff;
    border: 2px solid #007bff;
    border-radius: 20px;
    width: 50px;
    height: 30px;
    font-size: 16px;
    cursor: pointer;
    margin: 0 5px;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: rgba(0, 123, 255, 0.1);
    }
`;

export const CountText = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 0 10px; 
`;
