import React, { Component } from 'react';
import './App.css';
import EntryList from './entries/EntryList.js'
import EntryEditor from './entries/EntryEditor.js'
import { Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-header">
                <h2>jrnl client!</h2>
            </div>
            <Col xs={12} md={6}>
                <EntryEditor/>
            </Col>
            <Col xs={12} md={6}>
                <EntryList/>
            </Col>
        </div>
    );
  }
}

export default App;
