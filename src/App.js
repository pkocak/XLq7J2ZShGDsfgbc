import React, {Component} from 'react';

import Countdown from "./components/Countdown"
import BitcoinCurrency from "./components/BitcoinCurrency";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-title">Bitcoin</div>
                <div className="Timers">
                    <Countdown />
                </div>
                <div>
                    <BitcoinCurrency/>
                </div>
            </div>
        );
    }

}

export default App;
