import { Link } from 'react-router-dom';
import NavBar from './subComponents/Navbar';
const Home = () => {
  return (
    <>
    <NavBar></NavBar>
      <h1 className="space-x-4 text-rose-800 mt-5 text-center">Welcome to Hyscaler</h1>
      <div className="font-semibold">
        <p className='italic'>
          <ul className='list-disc '>
            <li >"Innovation is the ability to see change as an opportunity, not a threat." - Steve Jobs</li>

            <li>"Technology is best when it brings people together." - Matt Mullenweg</li>

            <li>"The only way to do great work is to love what you do." - Steve Jobs</li>

            <li>"The art of progress is to preserve order amid change and to preserve change amid order." - Alfred North Whitehead</li>

            <li>"The future is not something we enter. The future is something we create." - Leonard I. Sweet</li>

            <li> "In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create." - David Ogilvy</li>

            <li>  "The only thing that's constant in the technology world is change. Embrace it." - Larry Ellison</li>
            <li>
              "The technology you use impresses no one. The experience you create with it is everything." - Sean Gerety
            </li>
            <li>  "We are stuck with technology when what we really want is just stuff that works." - Douglas Adams
            </li>
            <li>"Great companies are built on great products." - Elon Musk</li>

            <li>"Do not wait for leaders; do it alone, person to person." - Mother Teresa
            </li>
            <li>
              "The greatest danger in times of turbulence is not the turbulence; it is to act with yesterday's logic." - Peter Drucker</li>
            <li>
              "In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks." - Mark Zuckerberg</li>

            <li> "We cannot solve our problems with the same thinking we used when we created them." - Albert Einstein</li>

            <li>"Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them." - Steve Jobs</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default Home;
