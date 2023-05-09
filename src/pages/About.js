import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <main>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        laborum amet ab cumque sit nihil dolore modi error
        repudiandaeperspiciatis atque voluptas corrupti, doloribus ex maiores
        quam magni mollitia illum dolor quis alias in sequi quod. Sunt ex
        numquam hic asperiores facere natus sapiente cum neque laudantium quam,
        expedita voluptates atque quia aspernatur saepe illo, rem quasi
        praesentiumaliquid sed inventore obcaecati veniam? Nisi magnam vero,
        dolore praesentium totam ducimus similique asperiores culpa, eius amet?
      </p>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<p>Loading subpage...</p>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default About;
