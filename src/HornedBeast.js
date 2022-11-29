import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (<div>
      <h2>Horned Beast {this.props.title}</h2>
      <img src={this.props.imageUrl} alt={this.props.description}></img>
      <p>Animal Description:{this.props.description}</p>
    </div>
    )
  }
}

export default HornedBeast;