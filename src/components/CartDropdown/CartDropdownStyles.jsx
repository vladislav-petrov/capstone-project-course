import styled from 'styled-components';
import Button from '../Button/Button';

export const CartDropdownWrapper = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartDropdownItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: none;
`;

export const CartDropdownEmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  text-align: center;
  color: grey;
`;

export const CartDropdownCheckoutButton = styled(Button)`
  margin-top: auto;
`;
