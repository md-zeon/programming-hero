import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";

function App() {
  return (
    <div>
      <div className="relative max-w-7xl mx-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
