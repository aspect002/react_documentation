
import React from 'react';
import { ImageContainer } from './styled';

const CircularImage = ({ src, alt }) => {
  return (
    <ImageContainer>
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </ImageContainer>
  );
};

export default CircularImage;
