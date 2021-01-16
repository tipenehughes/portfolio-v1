import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Landing from "./Components/Landing/Landing";
import NavBar from "./Components/Navigation/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    const { theme } = useContext(ThemeContext);
    library.add(fab, fas);
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Route path="/" component={Landing} />
                <Main />
                <Footer />
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </Router>
    );
}

export default App;
