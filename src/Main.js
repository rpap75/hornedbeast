import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <div>
        <HornedBeast title='one' description='test description one' imageUrl='https://images.unsplash.com/photo-1652615683902-eb4d9e012705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9ybmVkJTIwYW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />

        <HornedBeast title='two' description='test description two' imageUrl='https://plus.unsplash.com/premium_photo-1661939180626-1886781e23d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvcm5lZCUyMGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1100&q=60' />
      </div>
    );
  }
}

export default Main;