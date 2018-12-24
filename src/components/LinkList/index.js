import React from 'react';
import styled from 'styled-components';
import StyledLink from 'src/components/StyledLink';
import { LINKS } from 'src/utils';

export const StyledList = styled.ul`
  list-style-type: none;
  margin-left: 1rem;
  padding: 0;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 500px;
  }
  @media screen and (min-width: 800px) {
    width: 600px;
  }
  @media screen and (min-width: 1200px) {
    width: 700px;
  }
`;

const LinkList = () => (
  <StyledList>
    <li>
      <StyledLink href={LINKS.github}>GitHub</StyledLink>
    </li>
    <li>
      <StyledLink href={LINKS.linkedin}>LinkedIn</StyledLink>
    </li>
    <li>
      <StyledLink href={LINKS.email}>thisisbrianhan@gmail.com</StyledLink>
    </li>
  </StyledList>
);

export default LinkList;
