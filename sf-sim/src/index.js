import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Interface extends React.Component {
    
}

class Simulator extends React.Component {
    render() {
        return (
            <div className="outer-box"></div>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Simulator />);