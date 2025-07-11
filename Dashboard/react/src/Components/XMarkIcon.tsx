import styled from 'styled-components';

const XMarkIcon = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <span className="X" />
        <span className="Y" />
        <div className="close">Close</div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    position: relative;
    width: 6em;
    height: 4em;
    border: none;
    background: none;
  }

  .X {
    content: '';
    position: absolute;
    top: 50%;
    left: 33%;
    width: 2em;
    height: 1.5px;
    background-color: #fff;
    transform: rotate(45deg);
  }

  .Y {
    content: '';
    position: absolute;
    top: 50%;
    left: 33%;
    width: 2em;
    height: 1.5px;
    background-color: #fff;
    transform: rotate(-45deg);
  }

  .close {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -40%;
    left: 70%;
    width: 3em;
    height: 1.7em;
    font-size: 16px;
    background-color: rgb(254, 255, 225);
    color: #000;
    border: 1px solid #000;
    pointer-events: none;
    opacity: 0;
  }

  .button:hover {
    background-color: rgb(210, 0, 0);
  }

  .button:active {
    background-color: rgb(130, 0, 0);
  }

  .button:hover > .close {
    animation: close 0.2s forwards 1.25s;
  }

  @keyframes close {
    100% {
      opacity: 1;
    }
  }`;

export default XMarkIcon;
