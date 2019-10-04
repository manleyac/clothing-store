//dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

//styles
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
