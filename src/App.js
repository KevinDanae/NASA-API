import { Boton } from "./components/Boton";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="bg-gray-600 h-screen w-screen text-center pt-5">
        <Boton />
      </div>
    </>
  );
}

export default App;
