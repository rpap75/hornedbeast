import React from "react";
import HornedBeast from "./HornedBeast";
import beastData from './beastData.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row xs={2} sm={3} md={4} lg={5}>
          {beastData.map(beastInfo => (
            <Col key={beastInfo._id}>
              <HornedBeast title={beastInfo.title} image_url={beastInfo.image_url}
                description={beastInfo.description} />
            </Col>))}
        </Row>
      </Container>
    );
  }
}

export default Main;