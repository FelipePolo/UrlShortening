import React from "react";
import { Provider } from "react-redux";
import generateStore from "./Redux/store";

//importing layaut of reactstrap
import {Container} from 'reactstrap'

//importing components
import Navbar from "./components/Navbar";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Container className = "p-0">
        <Navbar></Navbar>
      </Container>
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
