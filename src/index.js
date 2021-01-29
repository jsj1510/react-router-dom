import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch, Link, NavLink, useParams} from "react-router-dom";


function Home() {
  return (
    <div>
    <h2>Home</h2>
    home..
    </div>
    )
}

const contents = [
  {id:1, title:'Html', description:"html is ..."},
  {id:2, title:'js', description:"js is ..."},
  {id:3, title:'react', description:"react is ..."}
]

function Topic() {
  const params = useParams();
  const topic_id = params.topic_id;
  let selected_topic = {
    title:'sry',
    description:'Not Found'
  }
  for (let i = 0; i < contents.length; i++) {
    if(contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

function Topics() {
  const lis = [];
  for(let i =0; i<contents.length; i++) {
    lis.push(<li><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
      {/* <Switch>
        <Route path="/topics/1">html..</Route>
        <Route path="/topics/2">js..</Route>
        <Route path="/topics/3">React..</Route>
      </Switch> */}
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
      <ul>
        <li><NavLink exact to="/">home</NavLink></li>
        <li><NavLink to="/topics">topic</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not found</Route> 
      </Switch>
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
