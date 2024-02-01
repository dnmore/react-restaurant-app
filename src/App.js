import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Menu = () => {
  return (
    <div>
      <h1>Menu</h1>
    </div>
  );
};

const SignIn = ()=> {
  return(
    <div>
      <h1>Sign In</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="signin" element={<SignIn/> }/>
      </Route>
    </Routes>
  );
};

export default App;
