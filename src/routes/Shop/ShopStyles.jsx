import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Category = styled.div`
  margin-bottom: 50px;
`;

export const CategoryTitle = styled.h2`
  width: fit-content;
`;

export const CategoryLink = styled(Link)`
  display: block;
  width: fit-content;
  height: 100%;

  h2:hover {
    color: rgb(97, 97, 97);
  }
`;

export const CategoryItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
