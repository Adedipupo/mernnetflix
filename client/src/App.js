import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/watch" element={<Watch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
