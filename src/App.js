import "./App.css";
import Landing from "./Components/Landing/Landing";
import NavBar from "./Components/Navigation/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    library.add(fab, fas);
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Route path="/" component={Landing} />
                <Main />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
