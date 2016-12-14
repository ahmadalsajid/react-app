import React from 'react';

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            data : []
        }

        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler() {
        let item = "setStates...";
        let myArray = this.state.data;
        myArray.push(item);
        this.setState({data: myArray});
        {/*setState() method is used for updating the state of the component. This method will not replace the state
        but only add changes to original state.*/}
    };
    render() {
        return (
            <div>
                <button onClick={this.setStateHandler}>Set State</button>
                <h4>State Array: {this.state.data}</h4>
            </div>
        );
    }
}

export default App;