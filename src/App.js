import React from 'react';
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import Pages from "./components/pages/pages";
import Navbar from "./components/navbar/navbar";
import Container from "reactstrap/es/Container";

function App() {
  return (
      <BrowserRouter>
          <Container>
              <Navbar />
                <Switch>
                  <Route path='/:page' exact component={Pages}/>
                </Switch>
          </Container>
      </BrowserRouter>
  );
}

export default App;
