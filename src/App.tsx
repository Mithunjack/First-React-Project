import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from "./components/MyInfo";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Card from "./components/Card";
import Joke from "./components/Joke";
import TestJson from "./components/TestJson";

function App() {

    const  data = TestJson();
    const newData = data.map(joke => <Joke content = {{ question : joke.question, punchLine : joke.punchLine}} />);

  return (
    <div>
      {/*<NavBar />*/}
      {/*<MyInfo/>*/}
      {/*<Form/>*/}

      {newData}

      {/*<Footer/>*/}
    </div>
  );
}

export default App;

{/*<div className="App">*/}
{/*  <header className="App-header">*/}
{/*    <img src={logo} className="App-logo" alt="logo" />*/}
{/*    <p>*/}
{/*      Edit <code>src/App.tsx</code> and save to reload.*/}
{/*    </p>*/}
{/*    <a*/}
{/*      className="App-link"*/}
{/*      href="https://reactjs.org"*/}
{/*      target="_blank"*/}
{/*      rel="noopener noreferrer"*/}
{/*    >*/}
{/*      Learn React*/}
{/*    </a>*/}
{/*  </header>*/}
{/*</div>*/}

/*Single joker call*/
{/*<Joke*/}
{/*    content = {{question : "How are you?", punchLine : "That doesnt even matter!!" }}*/}
{/*/>*/}
{/*<Joke*/}
{/*      content = {{punchLine : "not yet!But soon" }}*/}
{/*/>*/}
{/*<Joke*/}
{/*      content = {{question : "what about your aim!", punchLine : "That doesnt even matter!!now!" }}*/}
{/*/>*/}
{/*<Joke*/}
{/*      content = {{question : "study!!", punchLine : "whats that!!" }}*/}
{/*/>*/}


/*
single card call*/
{/*<Card*/}
{/*    content = {{imgurl : "https://googleplus-covers.com/covers/nature_balloon_ride.jpg",iconClass1 : "fa fa-arrow-circle-right cardreadme"*/}
{/*      ,iconClass2 : "fa fa-envelope-open"}}*/}
{/*/>*/}
{/*<Card*/}
{/*    content = {{imgurl : "https://car-images.bauersecure.com/upload/29533/images/480x270/001bmax03.jpg",*/}
{/*      iconClass1 : "fa fa-arrow-circle-right cardreadme",*/}
{/*      iconClass2 : "fa fa-envelope-open"}}*/}
{/*/>*/}
{/*<Card*/}
{/*    content = {{imgurl : "https://www.gannett-cdn.com/media/2017/10/14/USATODAY/USATODAY/636436189656790566-ABQ-hot-air-balloons2017-Trevor-Hughes1482.JPG?width=2560",*/}
{/*      iconClass1 : "fa fa-arrow-circle-right cardreadme",*/}
{/*      iconClass2 : "fa fa-envelope-open"}}*/}
{/*/>*/}