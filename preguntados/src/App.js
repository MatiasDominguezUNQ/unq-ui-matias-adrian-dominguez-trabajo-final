import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Template from "./template/Template";
import AppRouter from "./components/Router/AppRouter";
import NewGamePage from "./pages/NewGamePage/NewGamePage";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  const notify = (message, type) => { type(message) }

  return (
    <AppRouter>
      <Template>
        <ToastContainer position="bottom-center" newestOnTop={true} limit={1} />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/newGame" element={<NewGamePage notify={notify} />} />
          <Route path="/play" element={<GamePage notify={notify} />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Template>
    </AppRouter>
  );
}

export default App;