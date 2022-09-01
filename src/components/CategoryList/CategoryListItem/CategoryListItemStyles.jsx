import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryLink = styled(Link)`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .info {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const Info = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const InfoTitle = styled.h2`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`;

export const InfoSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

// .category {
//   min-width: 30%;
//   height: 240px;
//   flex: 1 1 auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   margin: 0 7.5px 15px;
//   overflow: hidden;

//   &:hover {
//     cursor: pointer;

//     & .category__background-image {
//       transform: scale(1.1);
//       transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//     }

//     & .category__info {
//       opacity: 0.9;
//     }
//   }

//   &.large {
//     height: 380px;
//   }

//   &:first-child {
//     margin-right: 7.5px;
//   }

//   &:last-child {
//     margin-left: 7.5px;
//   }

//   .category__background-image {
//     width: 100%;
//     height: 100%;
//     background-size: cover;
//     background-position: center;
//   }

//   .category__info {
//     height: 90px;
//     padding: 0 25px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     border: 1px solid black;
//     background-color: white;
//     opacity: 0.7;
//     position: absolute;

//     h2 {
//       font-weight: bold;
//       margin: 0 6px 0;
//       font-size: 22px;
//       color: #4a4a4a;
//     }

//     span {
//       font-weight: lighter;
//       font-size: 16px;
//     }
//   }
// }
