import styled from 'styled-components';

export const Info = styled.div`
  display: flex;

  -webkit-animation: cssAnimation 5s forwards;
  animation: cssAnimation 5s forwards;

  @keyframes cssAnimation {
    0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes cssAnimation {
    0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const Message = styled.div`
  display: flex;
  justify-content: center;
`;
