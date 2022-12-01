import React from "react";
import Card from 'react-bootstrap/Card';
import heart from './heart.png';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };

  }
  handleClick = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }
  render() {
    return (
      <>
        <Card >
          <Card.Title>
            {this.props.title}
          </Card.Title>
          <Card.Img src={this.props.image_url} alt={this.props.description} onClick={this.props.selectingFunction} />
          <Card.Body>
            Num of Clicks: <img src={heart} onClick={this.handleClick} alt='heart' height='50px' width='50px' />{this.state.clickCount}
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HornedBeast;