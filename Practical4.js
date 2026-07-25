A Question
CODE: App.jsx
import "./App.css";
import Header from "./components/Header";
import Student from "./components/Student";
import Eligibility from "./components/Eligibility";
import Placementstatus from "./components/Placementstatus";
import Companyoffer from "./components/Companyoffer";
import Skillprogress from "./components/Skillprogress";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <Student />
      <hr />
      <Eligibility />
      <hr />
      <Placementstatus />
      <hr />
      <Companyoffer />
      <hr />
      <Skillprogress />
      <Footer />
    </div>
  );
}
export default App;
App.css
body {
  background-color: #f5f5f5;
  font-family: Arial;
}
.container {
  width: 700px;
  margin: 30px auto;
  padding: 20px;
  background-color: #eeeeee;
  border: 2px solid #ccc;
  border-radius: 8px;
  text-align: center;
}
h1 {
  color: #1a2a8f;
  font-size: 28px;
} 
h2 {
  color: green;
  font-size: 20px;
} 
p {
  color: #444;
  font-size: 14px;
  margin: 5px 0;
}
hr {
  border: none;
  height: 1px;
  background-color: #bbb;
  margin: 15px 0;
}
.footer {
  margin-top: 10px;
  font-weight: bold;
  color: #555;
}
Student.jsx
function Student() {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name : Soham Acharekar</p>
      <p>Course : B.Sc IT</p>
      <p>Semester : V</p>
    </div>
  );
}
export default Student;
Skillprogress.jsx
function Skillprogress() {
  const react = 80;
  const python = 85;
  const java = 75;
  return (
    <div>
      <h2>Skill Progress</h2>
      <p>React : {react}%</p>
      <p>Python : {python}%</p>
      <p>Java : {java}%</p>
    </div>
  );
}
export default Skillprogress;
Placementstatus.jsx
function Placementstatus() {
  const placed = true;
  return (
    <div>
      <h2>Placement Status</h2>
      <p>Status : {placed ? "Placed" : "Not Placed"}</p>
    </div>
  );
}
export default Placementstatus;
Header.jsx
function Header() {
  return (
    <div>
      <h1>Student Placement Management System</h1>
      <hr />
    </div>
  );
}
export default Header;




Footer.jsx
function Footer() {
  return (
    <div className="footer">
      <p>© 2026 M. V. L. U. Placement Cell</p>
    </div>
  );
}
export default Footer;
Eligibility.jsx
function Eligibility() {
  const cgpa = 7.5;
  return (
    <div>
      <h2>Eligibility</h2>
      <p>CGPA : {cgpa}</p>
      <p>Status : {cgpa > 7 ? "Eligible" : "Not Eligible"}</p>
    </div>
  );
}
export default Eligibility;
Companyoffer.jsx
function Companyoffer() {
  const company = "TCS";
  const packageAmount = 400000;
  return (
    <div>
      <h2>Company Offer</h2>
      <p>Company : {company}</p>
      <p>Package : ₹{packageAmount}</p>
    </div>
  );
}
export default Companyoffer;

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
F Extra
App.jsx
import { useState } from "react";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  // Add Task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };


  // Delete Task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div className="container">
      <h1>My To-Do List</h1>
      <hr />
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <br></br>
      {/* Display Tasks */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h4>Soham Acharear T001</h4>
    </div>
  );
}
export default App;
App.css
.container {
  text-align: center;
  margin-top: 50px;
}
/* Input Field */
input {
  padding: 8px;
  font-size: 14px;
  margin-right: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
/* Add Button */
button {
  background-color: #e63946;
  color: white;
  border: none;
  padding: 8px 14px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background-color: #d62828;
}
/* Task List with BULLETS */
.task-list {
  margin-top: 20px;
  text-align: left;
  display: inline-block;
  list-style-type: disc;   /* 👈 Bullet Points */
  padding-left: 20px;
}
/* Each Task */
.task-list li {
  margin: 8px 0;
  font-size: 16px;
}
/* Delete Button */
.delete-btn {
  margin-left: 10px;
  background-color: #555;
}
.delete-btn:hover {
  background-color: #222;
}
