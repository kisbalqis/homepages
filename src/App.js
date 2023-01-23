import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex border-2 gap-8 h-full">
        <div className=" w-1/5">
          <Sidebar className="w-64" />
        </div>
        <div className=" border-dark-black w-4/5">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
