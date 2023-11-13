export default function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaInfo.soldOut ? "sold-out" : ""}`}>
      <div>
        <img
          src={"images/" + props.pizzaInfo.photoName}
          alt={props.pizzaInfo.name + " photo"}
        />
        <h3>{props.pizzaInfo.name}</h3>
        <p>{props.pizzaInfo.ingredients}</p>
        <span>
          {props.pizzaInfo.soldOut ? "Sold-Out" : `${props.pizzaInfo.price}$`}
        </span>
      </div>
    </li>
  );
}
