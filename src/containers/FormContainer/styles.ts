import styled from 'styled-components';
export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid grey;
  border-radius: 12px;
  padding: 40px 40px;
  flex: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 15px;
  border-bottom: 1px solid grey;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  padding-bottom: 40px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 5px;
`;
