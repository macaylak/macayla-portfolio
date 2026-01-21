import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="appRoot">
      <Navbar />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}