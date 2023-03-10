import Home from "./pages/Home.js";
import User from "./pages/User.js";
import Store from "./pages/Store.js";
import Profile from "./pages/Profile.js";
import Edit from "./pages/Edit.js";
import Video from "./pages/Video.js";
import P404 from "./pages/P404.js";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Edit" element={<Edit/>}/>
        <Route path="*" element={<P404/>}/>
      </Routes>
  );
}

export default App;
