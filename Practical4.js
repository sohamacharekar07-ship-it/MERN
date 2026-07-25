B question/* ===========================
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

C Question
import { useState } from "react";

function App() {

    // State Variable
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Button Click Counter</h1>

            <hr />

            <h2>User Clicks : {count} Times</h2>

            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
            <h3>Soham Acharekar T001</h3>
        </div>
    );
}

export default App;

D Question
App.jsx
import StudentForm from "./Components/StudentForm";
function App() {
    return (
        <div>
            <StudentForm />
        </div>
    );
}
export default App;
StudentForm.jsx
import { useState } from "react";
function StudentForm() {
    // State Variables
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [branch, setBranch] = useState("");
    const [cgpa, setCgpa] = useState("");
    return (
        <div>
            <h1>Student Registration Form</h1>
            <hr />
            <label>Student Name : </label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Roll Number : </label>
            <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
            />
            <br />
            <label>Branch : </label>
            <input
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
            />
            <br />
            <label>CGPA : </label>
            <input
                type="text"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
            />
            <hr />
            <h2>Student Details</h2>
            <h3>Name : {name}</h3>
            <h3>Roll Number : {rollNo}</h3>
            <h3>Branch : {branch}</h3>
            <h3>CGPA : {cgpa}</h3>
        </div>
    );
}
export default StudentForm;


E Question
App.jsx
import CompanyList from "./components/CompanyList";
function App() {
  return (
    <div>
      <CompanyList />
    </div>
  );
}
export default App;
CompanyList.jsx
import { useState } from "react";


function CompanyList() {
  const [companies] = useState([
    "TCS",
    "Infosys",
    "Accenture",
    "Wipro",
    "Capgemini"
  ]);
  return (
    <div>
      <h1>Placement Companies</h1>
      <hr />
      <ul>
        {companies.map((company, index) => (
          <li key={index}>{company}</li>
        ))}
      </ul>
    </div>
  );
}
export default CompanyList;


F Question
CODE:
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter Application</h1>
      <hr />
      <h2>Current Count: {count}</h2>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>       
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>
        &nbsp;
        <button 
          onClick={() => setCount(count - 1)} 
          disabled={count === 0}
        >
          Decrease
        </button>
        &nbsp;
        <button onClick={() => setCount(0)}>
          Reset
        </button>
        &nbsp;
      </div>
      <h4>Soham Acharekar T001</h4>
    </div>
  );
}
export default App;
