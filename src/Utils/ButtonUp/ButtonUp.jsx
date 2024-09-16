
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './styled'; 

const ButtonUp = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const currentPath = window.location.pathname;
    navigate(currentPath);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  return (
    <Button onClick={handleClick}>
      Вверх
    </Button>
  );
};

export default ButtonUp;
