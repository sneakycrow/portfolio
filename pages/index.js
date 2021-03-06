import React, { Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import dynamic from 'next/dynamic';


import Nav from '../components/nav';
const Footer = dynamic(() => import('../components/footer'), { ssr: false });
import Hero from '../components/hero';
import BlogPosts from '../components/blogPosts';
import ChangingText from '../components/changingText';

const StyledSection = styled.section`
  max-width: ${props => props.theme.layout.contentMaxWidth};
  margin: auto;
  min-height: 100vh;
  height: 100%;
  padding: 5vh 16px;
  h2 {
    margin-bottom: 5vh;
  }
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.palette.lightGray};
    margin-bottom: 15vh;
  }
  &:last-of-type {
    margin-bottom: 20vh;
  }
`;

const BrandList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  li {
    img {
      width: 250px;
      height: auto;
      max-width: 100%;
      filter: grayscale(100%);
      transition: filter 0.25s ease-in-out;
    }
    &:hover {
      img {
        filter: grayscale(0);
      }
    }
    & + li {
      margin-left: 5vw;
    }
  }
  @media screen and (max-width: ${props => props.theme.layout.mobileMaxWidth}) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Sneaky Crow</title>
      </Head>

      <Nav />

      <Hero>
        <h1>
          Hi, I'm <s>Zachary Sohovich</s> a.k.a{' '}
          <strong>
            <ChangingText textVariants={['Sneaky Crow', 'Boophis', 'Artis', 'Gigax']} />
          </strong>
        </h1>
        <h3>
          <ChangingText
            textVariants={[
              'Senior Developer',
              'Dungeon Master',
              'Guitar Player',
              'Gamer',
              'Hiker',
              'Illustrator'
            ]}
          />
        </h3>
      </Hero>
      <StyledSection>
        <h2>Who I've worked with</h2>
        <BrandList>
          <li>
            <img src="/static/spotify.png" alt="Spotify Company Logo" />
          </li>
          <li>
            <img src="/static/google.png" alt="Google Company Logo" />
          </li>
          <li>
            <img src="/static/twitch.png" alt="Twitch Company Logo" />
          </li>
        </BrandList>
      </StyledSection>
      <StyledSection>
        <h2>Thoughts</h2>
        <BlogPosts />
      </StyledSection>
      <Footer />
    </Fragment>
  );
};

export default Home;
