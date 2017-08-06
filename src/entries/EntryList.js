import React, { Component } from 'react';
import Request from 'superagent';
import Spinner from 'react-spinner';
import '../../node_modules/react-spinner/react-spinner.css';
import './EntryList.css';


class EntryList extends Component {


    constructor() {
        super();
    }

    componentWillMount() {
        //this.getAllEntries();
    }

    render(){
        var entries = this.props.entries.map(entry => {
            return (
                <div key={entry.ID}>
                    <h2>{entry.Title}</h2>
                    <p>{entry.Body}</p>
                </div>
            );
        });
        
        if (this.props.loading) {
            return <Spinner />;
        } else {
            return <div>{entries}</div>;
        }
    }
}

export default EntryList;