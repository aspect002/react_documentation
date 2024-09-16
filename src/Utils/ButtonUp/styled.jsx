import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Плавный переход */

  &:hover {
    transform: translateX(-50%) translateY(-5px); /* Подъем кнопки */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Увеличение тени */
  }
`;
