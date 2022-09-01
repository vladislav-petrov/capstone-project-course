import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const CartItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 10px;
`;

export const CartItemName = styled.span`
  font-size: 16px;
  padding-bottom: 10px;
`;

export const CartItemPrice = styled.span``;
