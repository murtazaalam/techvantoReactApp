import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/Routing';

const App = () => {
    return (
        <>
            <Routing/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));