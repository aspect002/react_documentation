// Components/CircularImageStyles.js
import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 1000;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  animation: spin 6s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
