import "./App.css";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { HomePage } from "./components/HomePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact>
          <LoginPage/>
        </Route>
        <Route path="/homepage" exact>
          
          <HomePage/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
