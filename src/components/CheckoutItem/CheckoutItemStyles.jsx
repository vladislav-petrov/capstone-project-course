import styled from 'styled-components';

export const CheckoutItemWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled.span`
  width: 23%;
`;

export const Quantity = styled.span`
  width: 23%;
  display: flex;
`;

export const QuantityArrow = styled.div`
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const Price = styled.span`
  width: 23%;
`;

export const ButtonRemove = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

// .checkout-item {
//   width: 100%;
//   display: flex;
//   min-height: 100px;
//   border-bottom: 1px solid darkgrey;
//   padding: 15px 0;
//   font-size: 20px;
//   align-items: center;

//   .checkout-item__image {
//     width: 23%;
//     padding-right: 15px;

//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }

//   .checkout-item__name,
//   .checkout-item__quantity,
//   .checkout-item__price {
//     width: 23%;
//   }

//   .checkout-item__quantity {
//     display: flex;

//     .checkout-item__quantity-arrow {
//       cursor: pointer;
//     }

//     .checkout-item__quantity-value {
//       margin: 0 10px;
//     }
//   }

//   .checkout-item__btn-remove {
//     padding-left: 12px;
//     cursor: pointer;
//   }
// }
