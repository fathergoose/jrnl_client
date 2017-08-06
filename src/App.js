import React, { Component } from 'react';
import './App.css';
import Request from 'superagent';
import EntryList from './entries/EntryList.js';
import EntryEditor from './entries/EntryEditor.js';
import { Col } from 'react-bootstrap';

class App extends Component {
    URL_BASE = 'https://q39qu26af1.execute-api.us-west-2.amazonaws.com/prod/entries';

    constructor() {
        super();
        this.state = {
            entries: [],
            activeEntry: null,
            loading: true,
        }
    }

    componentWillMount() {
        this.getAllEntries();
    }

    getAllEntries() {
        Request.get(this.URL_BASE).then(res => {
            this.setState({
                entries: res.body.Items,
                loading: false,
            });
        });
    }

    onContentChange(value) {
        this.state.entries.forEach((entry, index, entries) => {
            if (entry.ID === this.state.activeEntry) {
                const entriesCopy = entries.slice();
                entriesCopy[index].value = value;
                this.setState({ entries })
            }
        })
        this.setState(value);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>jrnl client!</h2>
                </div>
                <Col xs={12} md={6}>
                    <EntryEditor
                        entries={this.state.entries}
                        activeEntry={this.state.activeEntry}
                        onContentChange={this.onContentChange}                    
                    />
                </Col>
                <Col xs={12} md={6}>
                    <EntryList
                        entries={this.state.entries}
                        activeEntry={this.state.activeEntry}
                        loading={this.state.loading}
                    />
                </Col>
            </div>
        );
    }
}

export default App;
