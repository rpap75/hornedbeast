import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import beastData from './beastData.json';
import SelectedBeast from './SelectedBeast';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allBeast: beastData,
      selectedBeast: {},
      showSelectedBeast: false,
    }
  }

  selectingTheBeast = (beast) => {
    this.setState({ selectedBeast: beast, showSelectedBeast: true })
  }

  hideModal = () => {
    this.setState({ showSelectedBeast: false });
  }


  render() {
    return (
      <Container>
        <Header />
        <Main beastArray={this.state.allBeast} selectingTheBeast={this.selectingTheBeast} />
        <SelectedBeast
          hideModal={this.hideModal}
          showModal={this.state.showSelectedBeast}
          beast={this.state.selectedBeast}
        />
        <Footer />
      </Container>
    );
  }
}

export default App;