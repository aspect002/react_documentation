import styled from 'styled-components';
import HomeIcon from '../Home/HomeIcon';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  flex: 1;
  padding-bottom: 50px;
  min-height: calc(100vh - 50px);

`;

export const Nav = styled.nav`
  width: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  color: #eae7e7;
  padding: 0px 1  0px;
  margin: 10px 0;
  text-decoration: none;



`;

export const Icon = styled(HomeIcon)`
  margin-right: 8px;

`;

export const Content = styled.div`
  padding: 10px;
  flex: 1;
  margin: -20px;
  padding-bottom: 50px;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;

  background:   #606060;


`;

export const TopicLink = styled(Link)`
  color: white;
  font-size: 18px;
  text-decoration: none;
  padding: 3px 0;
  transition: color 0.3s ease, font-size 0.3s ease;
  width: 100%;
  text-align: center;
  display: block;
  margin-right: 50px;


  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    font-size: 20px;
    color: #eae7e7;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledTitle = styled.h3`
margin: 10px 0px -10px -4px;
  color: #d8d5db9b;

`;
