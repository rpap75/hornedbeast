import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}



class HornedBeast extends React.Component {
  render() {
    return (<div>
      <h2>Horned Beast {this.props.title}</h2>
      <img src= {this.props.imageUrl} alt='cool horned beast'></img>
      <p>Animal Description:{this.props.description}</p>
    </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div>
        <p>This Is The Main</p>
        <HornedBeast title='one' description= 'test description one' imageUrl= 'https://images.unsplash.com/photo-1652615683902-eb4d9e012705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9ybmVkJTIwYW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
        <HornedBeast title='two' description= 'test description two' imageUrl= 'https://plus.unsplash.com/premium_photo-1661939180626-1886781e23d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvcm5lZCUyMGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1100&q=60'/>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return <p> &copy; Ryan Papsin</p>
  }
}

export default App;

// Photo by <a href="https://unsplash.com/@springwellion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Catherine Kay Greenup</a> on <a href="https://unsplash.com/s/photos/horned-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  