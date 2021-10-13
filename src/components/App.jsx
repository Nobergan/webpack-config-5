import "../styles/index.scss";
import Recipes from "./Recipes";
import card from "../images/mastercard.png" 
import mob from "../images/1-mob.svg"

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hi, React!</h1>
        </section>
        <img src={card} alt="card" width="250" />
        <img src={mob} alt="mob" width="250" />
        <Recipes />
      </main>
    </>
  );
};

export default App;
