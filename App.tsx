import React, { useState } from 'react';
import './App.css';

function App() {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [hourlyRate, setHourlyRate] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const calculate = () => {
        const totalMinutes = hours * 60 + minutes;
        const totalHours = totalMinutes / 60;
        const pay = totalHours * hourlyRate;
        setResult(pay);
    };

    return (
        <div className="container">
            <h1>Time Calculation</h1>
            <div>
                <label htmlFor="hours">How many hours have you worked?</label>
                <input
                    type="number"
                    id="hours"
                    value={hours}
                    onChange={(e) => setHours(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="minutes">What is the number of minutes you've seen in your Time Sheet?</label>
                <input
                    type="number"
                    id="minutes"
                    value={minutes}
                    onChange={(e) => setMinutes(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="hourlyRate">Hourly rate ($)</label>
                <input
                    type="number"
                    id="hourlyRate"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(parseFloat(e.target.value))}
                />
            </div>
            <button onClick={calculate}>Calculate</button>
            <div>
                <h2>Result</h2>
                <p>You will get at least ${result.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default App;
