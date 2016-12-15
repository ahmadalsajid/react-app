import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }


        this.updateState = this.updateState.bind(this);
    };

    updateState(e) {
        this.setState({data: e.target.value});
    }

    render() {
        return (
            <div>
                <Content myDataProp = {this.state.data}
                         updateStateProp = {this.updateState}></Content>
            </div>
        );
    }
}
/**
 * in this example we will show you how to use forms from child component.
 * onChange method will trigger state update that will be passed to the
 * child input value and rendered on screen. The similar example was shown
 * in our events tutorial. Whenever you need to update state from child
 * component you need to pass function that will handle updating
 * (updateState) as a prop (updateStateProp).
 */

class Content extends React.Component {

    render() {
        return (
            <div>
                <input type = "text" value = {this.props.myDataProp}
                       onChange = {this.props.updateStateProp} />
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}

export default App;