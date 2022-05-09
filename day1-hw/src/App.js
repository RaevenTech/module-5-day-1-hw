import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
