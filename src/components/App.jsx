import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import Products from '../pages/Products';
import NotFound from '../pages/NotFound';
import ProductsDetails from '../pages/ProductsDetails';
import { SharedLayout } from './SharedLayout';
// import { Container, Header, Logo, Link } from './App.styled';

// const StyledLink = styled(NavLink)`
//   color: black;
//   margin-right: 1rem;

//   &.active {
//     color: orangered;
//   }
// `;

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
