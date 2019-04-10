import React, { Component } from 'react';
import './App.css';
import CNavbar from './components/CNavbar';
import PCreate from './pages/PCreate';

class App extends Component {

    render() {

        return (
            <div className="App">
                <CNavbar />
                <div className="h-main">
                    <PCreate />
                </div>
            </div>
        );
    }
}

export default App;
