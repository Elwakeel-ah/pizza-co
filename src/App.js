import "./App.css";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Menu from "./Menu/menu";

function App() {
  const currentHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;

  return (
    <div className="container">
      <Header />

      {isOpen && <Menu />}
      <Footer status={isOpen} />
    </div>
  );
}

export default App;
