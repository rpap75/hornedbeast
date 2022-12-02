import React from "react";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from "react-bootstrap";
import beastData from './beastData.json';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: beastData,
      filterData: beastData,
    }
  }
  filterHorns = (e) => {
    let horns = parseInt(e.target.value)
    let filterBeast = this.state.beastData.filter(beast => beast.horns === horns)
    console.log(filterBeast)
    this.setState({
      filterData: filterBeast
    }, console.log(this.state.filterData))

  }
  render() {
    return (
      <Container>
        <Form.Label>Animal By Horns</Form.Label>
        <Form.Select onChange={this.filterHorns}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </Form.Select>
        <Row xs={2} sm={3} md={4} lg={5}>
          {this.state.filterData.map(beastInfo => (
            <Col key={beastInfo._id}>
              <HornedBeast title={beastInfo.title} selectingFunction={() => this.props.selectingTheBeast(beastInfo)} image_url={beastInfo.image_url}
                description={beastInfo.description} />
            </Col>))}
        </Row>
      </Container>
    );
  }
}

export default Main;