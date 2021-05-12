import styled from 'styled-components';

export const Loader = styled.div`
  opacity: 0.6;
  position: fixed;
  top: 25%;
  left: 50%;
  border-top: 10px solid #58b647;
  border-right: 10px solid rgba(136, 136, 136, 0.2);
  border-bottom: 10px solid rgba(136, 136, 136, 0.2);
  border-left: 10px solid rgba(136, 136, 136, 0.2);
  animation: spinner 0.9s linear infinite;
  border-radius: 50%;
  z-index: 9999;
  width: 44px;
  height: 44px;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const LoadingText = styled.span`
  position: fixed;
  top: 40%;
  left: 50.5%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: #888;
`;
