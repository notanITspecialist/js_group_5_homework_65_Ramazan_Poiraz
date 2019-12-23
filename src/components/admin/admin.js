import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios'

class Admin extends Component {

    state = {
        data: null,
        title: '',
        text: '',
        page: '',
    };

    changeTitle = e => this.setState({title: e.target.value});

    changeText = e => this.setState({text: e.target.value});

    changePage = e => this.setState({page: e.target.value});

    changeSelect = e => {
        const value = e.target.value;
        this.setState({title: this.state.data[value].title, text: this.state.data[value].text, page: value})
    };

    changePage = async e => {
        e.preventDefault()

        await axios.put('https://lesson-65-ramazan.firebaseio.com/pages/'+this.state.page+'.json', {...this.state.data[this.state.page], title: this.state.title, text: this.state.text} );

        this.props.history.push('/pages/'+this.state.page)
    };

    async componentDidMount() {
        let data = await axios.get('https://lesson-65-ramazan.firebaseio.com/pages.json');
        data = data.data;
        const firstElem = Object.keys(data)[0];
        this.setState({data, title: data[firstElem].title, text:data[firstElem].text})
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.changePage}>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input onChange={this.changeSelect} type="select" name="select" id="exampleSelect">
                            {this.state.data ? Object.keys(this.state.data).map((name, id) => <option value={name} key={name+id}>{name}</option>) : <option>...</option>}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="text" placeholder="Title" value={this.state.title} onChange={this.changeTitle} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Text</Label>
                        <Input type="text" placeholder="Text" value={this.state.text} onChange={this.changeText} />
                    </FormGroup>
                    <Button>Save</Button>
                </Form>
            </div>
        );
    }
}

export default Admin;