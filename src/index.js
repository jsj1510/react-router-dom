import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


function Home() {
  return (
    <div>
    <h2>Home</h2>
    home..
    </div>
    )
}

function Topics() {
  return (
    <div>
    <h2>Topics</h2>
    topcis..
    </div>
    )
}

function Contact() {
  return (
    <div>
    <h2>Contact</h2>
    Contact..
    </div>
    )
}

function App() {
  return (
    <div> 
      <h1>hi </h1>
    <Home></Home>
    <Topics></Topics>
    <Contact></Contact>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();