import Pizza from "../Pizza/pizza";
import { pizzaData } from "../Pizza/data";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza, i) => (
          <Pizza pizzaInfo={pizza} key={i} />
        ))}
      </ul>
    </main>
  );
}
