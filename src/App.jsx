import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import CollectionPage from "./Pages/CollectionPage";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-dvh text-white w-full bg-gray-900">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
