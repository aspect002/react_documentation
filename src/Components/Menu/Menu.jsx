import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Nav, HomeButton, Icon, Content, Footer, TopicLink, ListItem, StyledTitle } from './styled';
import CircularImage from 'Components/CircularImage/CircularImage';


const Menu = () => {
  return (
    <>
      <Container>
        <Nav>
          <CircularImage src="/frontender.jpg" alt="Circular Image" />
          <HomeButton to="/">
            <Icon fontSize="small" />
          </HomeButton>
          <StyledTitle>Темы:</StyledTitle>
          <ul>
            <ListItem><TopicLink to="/react">React - this</TopicLink></ListItem>
            <ListItem><TopicLink to="/project_structure">Project Structure</TopicLink></ListItem>
            <ListItem><TopicLink to="/components">Components</TopicLink></ListItem>
            <ListItem><TopicLink to="/props">Props</TopicLink></ListItem>
            <ListItem><TopicLink to="/state">State</TopicLink></ListItem>
            <ListItem><TopicLink to="/lifeCycle">LifeCycle</TopicLink></ListItem>
            <ListItem><TopicLink to="/events">Events</TopicLink></ListItem>
            <ListItem><TopicLink to="/refs_fragment_key_reactMemo_useMemo_useCallback">Refs
            Fragment
            key
            ReactMemo
            useMemo</TopicLink></ListItem>
            <ListItem><TopicLink to="/context">Context</TopicLink></ListItem>
            <ListItem><TopicLink to="/router">Router</TopicLink></ListItem>
            <ListItem><TopicLink to="/hookForm">HookForm</TopicLink></ListItem>
            <ListItem><TopicLink to="/storages">Storages</TopicLink></ListItem>
            <ListItem><TopicLink to="/hoc">Hoc</TopicLink></ListItem>

          </ul>
        </Nav>
        <Content>
          <Outlet />
        </Content>
        <Footer>
          Create app in 2024
        </Footer>
      </Container>
    </>
  );
};

export default Menu;
