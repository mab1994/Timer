import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status : false,
            runningTime : 0,
            seconds : 0,
            minutes : 0,
            hours : 0,

        }

        setInterval(
            () => {
                if(this.state.status) {
                    this.setState({
                        runningTime: this.state.runningTime + 1000
                    })
                    this.clock(this.state.runningTime)
                }
            },
            
            1000
        )
    }

    clock = (ms) => {
        this.setState({
            hours : Math.floor(ms / 3600000),
            minutes: Math.floor((ms - (this.state.hours * 3600000)) / 60000),
            seconds: parseInt((ms - (this.state.hours * 3600000) - (this.state.minutes * 60000)) / 1000)
        })
    }

    Click = () => {
        this.setState({status: !this.state.status})
    }

    Reset = () => {
        this.setState({status: false, runningTime: 0, seconds : 0, minutes : 0, hours : 0,})
    }

    render() {
        return (
            <div className="container">
                <div className="full-timer-container">
                    <div className="time-container">
                        <p className="timer-form">{String(this.state.hours).padStart(2, '0')}:</p>
                        <p className="timer-comment">Hours</p>
                    </div>
                    <div className="time-container">
                        <p className="timer-form">{String(this.state.minutes).padStart(2, '0')}:</p>
                        <p className="timer-comment">Minutes</p>
                    </div>
                    <div className="time-container">
                        <p className="timer-form">{String(this.state.seconds).padStart(2, '0')}</p>
                        <p className="timer-comment">Seconds</p>
                    </div>
                </div>
                <div>
                    <button className="btn click-btn" onClick={this.Click}>{this.state.status ? 'Stop' : 'Start'}</button>
                    <button className="btn reset-btn" onClick={this.Reset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Timer;