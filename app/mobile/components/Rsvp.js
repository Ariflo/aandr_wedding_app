import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import UnderConstruction from './Construction.js';
import Footer from './Footer.js';
import { Container } from 'native-base';

class RSVP extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <UnderConstruction />
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(RSVP);