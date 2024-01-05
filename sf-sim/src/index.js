import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import sosImage from "./images/sos.jpg";

class Interface extends React.Component {
    
}

class Simulator extends React.Component {
    render() {
        return (
            <div className="outer-box">
                <img
                    src={sosImage}
                    alt="SOS Image"
                    className="centered-image"
                />
                <button className="enhance-button">Enhance</button>
            </div>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Simulator />);