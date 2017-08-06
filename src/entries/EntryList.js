import '../../node_modules/react-spinner/react-spinner.css';
import './EntryList.css';
import React, { Component } from 'react';
import Spinner from 'react-spinner';


class EntryList extends Component {

  render(){
    var entries = this.props.entries.map((entry) => {
      return (
        <div key={entry.ID}>
          <h2>{entry.Title}</h2>
          <p>{entry.Body}</p>
        </div>
      );
    });

    if (this.props.loading) {
      return <Spinner />;
    }
    return <div>{entries}</div>;
  }
}

export default EntryList;
