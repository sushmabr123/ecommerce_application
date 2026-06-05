import Header from "./components/Header";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Footer from "./components/Footer";
import "./App.css";
import Joyride from "react-joyride";
import { createContext } from "react";

const UserContext = createContext(null);
const steps = [
  {
    target: ".header > h3",
    content: "Welcome!! Please spare a minute to learn about our page",
  },
  {
    target: ".login",
    content: "You can log in here",
  },
  {
    target: ".signup",
    content: "Sign up here, if you're new",
  },
  {
    target: ".packages h3",
    content: "The packages we offer",
  },
  {
    target: ".explore",
    content: "Click here to find out more about other packages",
  },
  {
    target: ".footer .form",
    content: "Subscribe to our newsletter here",
  },
];

function App() {
    const user = {
    name: "Sushma",
    role: "Admin"
  };
  return (
    <>
      <Joyride steps={steps} continuous={true}/>
      <UserContext.Provider value={user}>
      <div className="App">
        <Packages />
      </div>
      </UserContext.Provider>
    </>
  );
}
export default App;