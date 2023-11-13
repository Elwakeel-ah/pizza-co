export default function Footer(props) {
  return (
    <footer className="footer">
      We're currently {props.status ? "open" : "close"}
      <div>{props.status && <button className="btn">Order Now</button>}</div>
    </footer>
  );
}
