/* ===========================
   App.jsx
=========================== */
// Main App component passing data using props

import Header from "./components/Header";
import HotelCard from "./components/HotelCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Hotel Cards with props */}
      <HotelCard
        restaurant="Domino's Pizza"
        food="Farmhouse Pizza"
        price={499}
        discount={20}
        rating={4.5}
      />

      <HotelCard
        restaurant="McDonald's"
        food="McAloo Tikki Meal"
        price={299}
        discount={15}
        rating={4.3}
      />

      <HotelCard
        restaurant="Burger King"
        food="Veg Whopper Combo"
        price={399}
        discount={10}
        rating={4.4}
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;


/* ===========================
   Header.jsx
=========================== */
// Header component

function Header() {
  return (
    <div>
      <h1> Online Food Delivery Dashboard </h1>
      <hr />
    </div>
  );
}

export default Header;


/* ===========================
   Footer.jsx
=========================== */
// Footer component

function Footer() {
  return (
    <div>
      <h3> © 2026 Food Delivery App </h3>
    </div>
  );
}

export default Footer;


/* ===========================
   HotelCard.jsx
=========================== */
// HotelCard component receiving props

function HotelCard(props) {

  // Calculate discount amount
  const discount = (props.price * props.discount) / 100;

  // Calculate final price after discount
  const finalPrice = props.price - discount;

  return (
    <div>
      {/* Display data from props */}
      <h2>{props.restaurant}</h2>
      <p>Food Item: {props.food}</p>
      <p>Original Price: ₹{props.price}</p>
      <p>Discount: {props.discount}%</p>
      <p>Discount Amount: ₹{discount}</p>

      <p>
        <b>Final Price: ₹{finalPrice}</b>
      </p>

      <p>Rating: {props.rating}</p>
      <hr />
    </div>
  );
}

export default HotelCard;
