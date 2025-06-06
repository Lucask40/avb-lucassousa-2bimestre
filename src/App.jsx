import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
