import React from 'react';
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import Pages from "./components/pages/pages";

function App() {
  return (
      <BrowserRouter>
            <Switch>
              <Route path='/:page' exact component={Pages}/>
            </Switch>
      </BrowserRouter>
  );
}

export default App;
