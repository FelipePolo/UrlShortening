import React from "react";
import { Provider } from "react-redux";
import generateStore from "./Redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importing layaut of reactstrap
import { Container } from "reactstrap";

//importing components
import Navbar from "./components/navbar/Navbar";
import Home from './components/Home/Home'

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Router>
        <Container className="p-0 app">
          <Navbar></Navbar>



        </Container>
          <Switch>

            <Route path ={"/"} exact>
              <Home></Home>
            </Route>
          </Switch>
      </Router>
    </Provider>
  );
}

//pruebas
const postear = async () => {
  const data = await fetch("https://rel.ink/api/links/", {
    method: "POST",
    body: JSON.stringify({
      url: "https://www.40defiebre.com/para-que-acortadores-url",
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const creado = await data.json();
  console.log(data);
  console.log(creado);
};

export default App;
