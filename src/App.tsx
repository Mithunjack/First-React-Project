import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from "./components/MyInfo";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  return (
    <div>
      {/*<NavBar />*/}
      {/*<MyInfo/>*/}
      {/*<Form/>*/}
      <Card
          content = {{imgurl : "https://googleplus-covers.com/covers/nature_balloon_ride.jpg",iconClass1 : "fa fa-arrow-circle-right cardreadme"
            ,iconClass2 : "fa fa-envelope-open"}}
      />
      <Card
          content = {{imgurl : "https://car-images.bauersecure.com/upload/29533/images/480x270/001bmax03.jpg",
            iconClass1 : "fa fa-arrow-circle-right cardreadme",
            iconClass2 : "fa fa-envelope-open"}}
      />
      <Card
          content = {{imgurl : "https://www.gannett-cdn.com/media/2017/10/14/USATODAY/USATODAY/636436189656790566-ABQ-hot-air-balloons2017-Trevor-Hughes1482.JPG?width=2560",
            iconClass1 : "fa fa-arrow-circle-right cardreadme",
            iconClass2 : "fa fa-envelope-open"}}
      />
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