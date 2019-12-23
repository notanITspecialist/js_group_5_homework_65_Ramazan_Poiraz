import React from 'react';
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import Pages from "./components/pages/pages";
import Navbar from "./components/navbar/navbar";
import Container from "reactstrap/es/Container";
import Admin from "./components/admin/admin";

function App() {
  return (
      <BrowserRouter>
          <Container>
              <Navbar />
                <Switch>
                    <Route path='/' exact render={()=><p>HOME PAGE</p>}/>
                    <Route path='/pages/admin' component={Admin}/>
                    <Route path='/pages/:page' component={Pages}/>
                </Switch>
          </Container>
      </BrowserRouter>
  );
}

export default App;
