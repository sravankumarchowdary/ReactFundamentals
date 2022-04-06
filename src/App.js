import { Link, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Header from "./Pages/Common/Header/Header";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFount/PageNotFound";
import Singleuser from "./Pages/Singleuser/Singleuser";

function App() {
  return (
    <>
      APP
      <Header />
      
      {/* <Home /> */}
      {/* <About /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* 
          TO NAVIGATE TO DEFUALT PAGE
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} /> 
        */}
        <Route path="/about" element={<About />} />
        <Route path="/user/:userid" element={<Singleuser />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
