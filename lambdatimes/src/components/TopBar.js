import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  `;


 const Left = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
 `; 

 const Topics = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
 
 `;

 const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
 `;

 const Topiccenter = styled.span`
  cursor: pointer;
  margin-right: 5%;
  :hover {
    text-decoration: underline;
  }
  }
 
 `;
 const Lastone = styled.span`
  cursor: pointer;
  margin-right:0;
  :hover {
    text-decoration: underline;
  }
 `;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

`;

const RightSpan = styled.span `
cursor: pointer;

`;



const TopBar = () => {
  return (
    <TopStyle>
      <Container>
        <Left>
          <Topics>TOPICS</Topics><Topics>SEARCH</Topics>
        </Left>
        <Center>
          <Topiccenter>GENERAL</Topiccenter><Topiccenter>BROWNBAG</Topiccenter><Topiccenter>RANDOM</Topiccenter><Topiccenter>MUSIC</Topiccenter><Lastone>ANNOUNCEMENTS</Lastone>
        </Center>
        <Right>
          <RightSpan>LOG IN</RightSpan>
        </Right>
      </Container>
    </TopStyle>
  )
}

export default TopBar;