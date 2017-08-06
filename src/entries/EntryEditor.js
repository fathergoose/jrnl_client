import React, { Component } from 'react';
import Request from 'superagent';
import '../../node_modules/react-spinner/react-spinner.css';
import './EntryEditor.css';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


class EntryEditor extends Component {
    URL_BASE = 'https://q39qu26af1.execute-api.us-west-2.amazonaws.com/prod/entries';

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.props.onContentChange({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.postEntry();
        event.preventDefault();
    }

    postEntry() {
        console.log(this.URL_BASE);
        Request.post(this.URL_BASE).send({
            Title: this.state.Title,
            Body: this.state.Body,
        }).then(res => {});
    }


    render() {
        const title = this.props.title;
        const body = this.props.body;

        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="formControlsText">
                    <ControlLabel>
                        Title
                    </ControlLabel>
                    <FormControl 
                        componentClass="input" 
                        type="text"
                        placeholder="Best day ever"
                        name="Title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>
                        Body
                    </ControlLabel>
                    <FormControl 
                        componentClass="textarea"
                        placeholder="Maybe that was too optimistic?"
                        name="Body"
                        value={body}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        );
    }
}

export default EntryEditor;
