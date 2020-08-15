import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
export default class AddEvent extends Component {
    state = {
        date: new Date(),
        eventTitle:'',
        error:''
    }
    handleChange = e => this.setState({ [e.target.id]:e.target.value })

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.eventTitle==='')
        {
            this.setState({error:'Event Title Should not be empty'})
            return;
        }
        this.props.addEventToTable(this.state);
        this.setState({eventTitle:'', date: new Date(), error:''})
    }
    onChange = date => this.setState({ date })
    render() {
        return (
            <div className="calendar-card">
                <div className="error">{this.state.error}</div>
                <form className="form-container row">
                    <div className="col-sm-4">
                        <input type="text" 
                            className="form-control " 
                            id="eventTitle"
                            placeholder="event title"
                            value={this.state.eventTitle}
                            onChange={this.handleChange}
                        />
                        <button className="btn btn-primary" onClick={this.handleSubmit}>add to list</button>
                    </div>
                    <Calendar 
                        className="calendar col-sm-6"
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </form>
            </div>
        )
    }
}
