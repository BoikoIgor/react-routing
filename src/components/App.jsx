import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import NotFound from '../pages/NotFound';
import ProductsDetails from '../pages/ProductsDetails';
import { Container, Header, Logo, Link } from './App.styled';

const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 1rem;

  &.active {
    color: orangered;
  }
`;

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Container>
        <Header>
          <Logo>
            <span role="img" aria-label="computer icon">
              💻
            </span>{' '}
            GoMerch Store
          </Logo>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
          </nav>
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
};
