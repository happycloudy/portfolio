import styled from "styled-components";

export const SkillItem = styled.span`
  padding: 20px 25px;
  color: #fff;
  border-radius: 30px;
  user-select: none;
  
  &:nth-child(even) {
    background: ${({theme}) => theme.colors.purple};
  }

  &:nth-child(odd) {
    background: ${({theme}) => theme.colors.cyan};
  }

  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    padding: 35px 40px;
  }
`