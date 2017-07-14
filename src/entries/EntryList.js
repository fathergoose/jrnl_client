import React, { Component } from 'react';
import Request from 'superagent';
import Spinner from 'react-spinner';
import '../../node_modules/react-spinner/react-spinner.css';
import './EntryList.css';


class EntryList extends Component {
    URL_BASE = 'https://q39qu26af1.execute-api.us-west-2.amazonaws.com/prod/entries';

    constructor() {
        super();
        this.state = {
            entries: [],
            loading: true,
        };
    }

    componentWillMount() {
        this.getAllEntries();
    }

    render(){
        var entries = this.state.entries.map(entry => {
            return (
                <div key={entry.ID}>
                    <h2>{entry.Title}</h2>
                    <p>{entry.Body}</p>
                </div>
            );
        });
        
        if (this.state.loading) {
            return <Spinner />;
        } else {
            return <div>{entries}</div>;
        }

    }

    //////////

    getAllEntries() {
        Request.get(this.URL_BASE).then(res => {
            this.setState({
                entries: res.body.Items,
                loading: false,
            });
        });
    }
}

export default EntryList;