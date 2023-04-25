import "./App.css";
import Header from "./Header";
import Links from "./Links";
import NavBar from "./NavBar";
import Menus from "./Menus";
import FooterComp from "./FooterComp";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Header />
            <Links />
            <Menus />
            <FooterComp />
        </div>
    );
}

export default App;
