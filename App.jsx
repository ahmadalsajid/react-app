import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };

    forceUpdateHandler() {
        {/*Sometimes you want to update the component manually. You can
        achieve this by using forceUpdate() method.*/}
        this.forceUpdate();
    };

    render() {
        return (
            <div>
                <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
                <h4>Random number: {(Math.random()*100).toFixed(2)}</h4>
            </div>
        );
    }
}

export default App;