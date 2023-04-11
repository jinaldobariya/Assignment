
import React from 'react';
import styled from "styled-components";

const Header = styled.header`
  background-color: pink;
  color: black;
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 2rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

const NavLink = styled.li`
  margin-left: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: green;
  }
`;

const Hero = styled.section`
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZgjWbirtSNtfKXj4vmkti5sYy0F6R8EZVA&usqp=CAU');
  background-size: cover;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  color: black;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: black;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: red;
  border: none;
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
  top:20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: yellow;
  }
`;

const ProductList = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
`;

const Product = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ProductImage = styled.img`
  max-width: 50%;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

const ProductInfo = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const ProductTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Main = () => {
  return (
    <>
      <Header>
        <Nav>
          <Logo>SHOPPING</Logo>
          <NavLinks>
            <NavLink>HOME</NavLink>
            <NavLink>ABOUTUS</NavLink>
            <NavLink>CONTECT</NavLink>
            <NavLink>lOGIN</NavLink>
            <NavLink>SIGNIN</NavLink>
      </NavLinks>
    </Nav>
  </Header>
  <Hero>
    <HeroTitle>JINAL SITE</HeroTitle>
    <HeroSubtitle>GSDGFADFD  DGFHSFD EVFGESSVFDS GDFEFGVAS FGEDBA</HeroSubtitle>
    <Button className='rounded'>Shop Now</Button>
  </Hero>
  <ProductList>
    <Product>
      <ProductImage
        src="https://media.istockphoto.com/id/1202073158/vector/online-shopping-concept.jpg?s=612x612&w=0&k=20&c=6V3ncvtoNhv3klHoMJVTd-Dp_fN4BaUoLulzv75juX0="
        alt="Product"
      />
      <ProductInfo>
        <ProductTitle>our designer dress</ProductTitle>
        <ProductDescription>
          
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ProductDescription>
        <ProductPrice>  startig only 20000/-</ProductPrice>
      </ProductInfo>
    </Product>
    <Product>
      <ProductImage
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPaRXCOhT7jgvXE8jiFM4BqjUkd0JoGjBMQ&usqp=CAU"
        alt="Product"
      />
      <ProductInfo>
        <ProductTitle>service</ProductTitle>
        <ProductDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.

        </ProductDescription>
        <ProductPrice>show more</ProductPrice>
      </ProductInfo>
    </Product>
  </ProductList>
</>
  );
};

export default Main