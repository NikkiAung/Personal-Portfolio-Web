import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="blue ball" />
        <div className="red ball" />
        <div className="yellow ball" />
        <div className="green ball" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  position: absolute; // Added to position the loader
  top: 50%; // Center vertically
  left: 50%; // Center horizontally
  transform: translate(-50%, -50%); // Adjust position to truly center
  
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }

  .ball {
    --size: 16px;
    width: var(--size);
    height: var(--size);
    border-radius: 11px;
    margin: 0 10px;

    animation: 2s bounce ease infinite;
  }

  .blue {
    background-color: #4285f5;
  }

  .red {
    background-color: #ea4436;
    animation-delay: 0.25s;
  }

  .yellow {
    background-color: #fbbd06;
    animation-delay: 0.5s;
  }

  .green {
    background-color: #34a952;
    animation-delay: 0.75s;
  }

  @keyframes bounce {
    50% {
      transform: translateY(25px);
    }
  }`;

export default Loader;
