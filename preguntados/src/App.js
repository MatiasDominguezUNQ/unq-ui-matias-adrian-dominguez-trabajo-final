import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppRouter from "./components/router/AppRouter";
import NewGamePage from "./pages/NewGamePage/NewGamePage";
import HomePage from "./pages/HomePage/HomePage";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  const notify = (message, type) => { type(message) }

  return (
    <AppRouter>
      <ToastContainer position="bottom-center" newestOnTop={true} limit={1} />
      <Routes>
        <Route path="/home" element={<HomePage notify={notify}/>}/>
        <Route path="/newGame" element={<NewGamePage notify={notify}/>}/>
        <Route path="*" element={<Navigate to="/home"/>} />
      </Routes>
    </AppRouter>
  );
}

export default App;