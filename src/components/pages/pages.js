import React, {Component} from 'react';
import axios from 'axios'

class Pages extends Component {
    state = {
      data: {title:'',text:''},
    };

    addPage = async () => {
        let data = await axios.get('https://lesson-65-ramazan.firebaseio.com/pages/'+this.props.match.params.page+'.json');
        data = data.data;
        this.setState({data});
    };

    async componentDidMount() {
        this.addPage()
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
       if(prevProps.match.params.page !== this.props.match.params.page){
           this.addPage()
       }
   }

    render() {
        return (
            <div className="mt-5">
                <p className="text-center">Title: {this.state.data.title}</p>
                <p className="text-center">Text: {this.state.data.text}</p>
            </div>
        );
    }
}

export default Pages;