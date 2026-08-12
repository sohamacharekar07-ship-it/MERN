5.React Routing and Data Handling
a. Install and configure React Router in the React application.
 

b. Create multiple pages and implement navigation between them.
CODE:
About.jsx
function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This page contains information about our application.</p>
        </div>
    );
}
export default About;
Contact.jsx
function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <p>Email:sohamacharekar07@gmail.com</p>
        </div>
    );
}
export default Contact;
Home.jsx
function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to our React Application.</p>
        </div>
    );
}
export default Home;
App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
    return (
        <BrowserRouter>
            <h1>My React Application</h1>
            <nav>
                <Link to="/">Home</Link>
                <br />
                <Link to="/about">About</Link>
                <br />
                <Link to="/contact">Contact</Link>
            </nav>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
OUTPUT:


c. Use Link and Routes to move between pages.
CODE:
Dashboard.jsx
function Dashboard() {
  return (
    <div>
      <h1>Placement Dashboard</h1>
      <p>Welcome to the Student Placement Portal.</p>
      <hr />
      <h2>Placement Summary</h2>
      <p>Total Companies: 25</p>
      <p>Students Placed: 120</p>
      <p>Highest Package: ₹12 LPA</p>
    </div>
  );
}
export default Dashboard;
Jobs.jsx
function Jobs() {
  return (
    <div>
      <h1>Job Opportunities</h1>
      <hr />
      <h2>Software Development</h2>
      <p>Company: ABC Technologies.</p>
      <p>Package: ₹6S LPA</p>
      <hr />
      <h2>Web Development</h2>
      <p>Company: XYZ Solutions.</p>
      <p>Package: ₹5 LPA</p>
      <hr />
    </div>
  );
}
export default Jobs;
Profile.jsx
function Profile() {
  return (
    <div>
      <h1>Student Profile</h1>
      <hr />
      <p>Name: Soham Acharekar</p>
      <p>Course: B.Sc.IT</p>
      <p>CGPA: 9.36</p>
      <p>Skills: JavaScript, React, Node.js</p>
    </div>
  );
}
export default Profile;
Statistics.jsx
function Statistics() {
  return (
    <div>
      <h1>Placement Statistics</h1>
      <hr />
      <p>Students Registered: 200</p>
      <p>Students Placed: 120</p>
      <p>Placement Percentage: 60%</p>
      <p>Average Package: ₹5.5 LPA</p>
    </div>
  );
}
export default Statistics;
App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Jobs from "./pages/Jobs";
import Statistics from "./pages/Statistics";
function App() {
  return (
    <BrowserRouter>
      <h1>M. V. L. U. Student Placement Portal</h1>


      <nav>
        <Link to="/">Dashboard</Link>{" "}
        <Link to="/profile">Profile</Link>{" "}
        <Link to="/jobs">Job Opportunities</Link>{" "}
        <Link to="/statistics">Statistics</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
OUTPUT:


