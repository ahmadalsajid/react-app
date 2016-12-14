import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    };

    findDomNodeHandler() {
        var myDiv = document.getElementById('node2');
        ReactDOM.findDOMNode(myDiv).style.color = 'red';
    }

    render() {
        return (
            <div>
                <button onClick = {this.findDomNodeHandler}>FIND NODE 2</button>
                <div id = "myDiv">NODE</div>
                <div id = "node2">NODE</div>
            </div>
        );
    }
}

export default App;