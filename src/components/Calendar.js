import React, { Component } from 'react';
import AddEvent from './AddEvent';

export default class Calendar extends Component {
    state = {
        eventList: []
    }
    
    addEventToTable = event => {
        const eventList = [...this.state.eventList, event]
        this.setState({eventList})
    }

    render() {
        const { eventList } = this.state;
        let index = 0;
        const tableBody = eventList.map(event => {
            var dd = String(event.date.getDate()).padStart(2, '0');
            var mm = String(event.date.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = event.date.getFullYear();

            const date = dd + '/' + mm + '/' + yyyy;

            index++;
            return <tr key={index}>             
                        <th scope="row">{index}</th>
                        <td>{event.eventTitle}</td>
                        <td>{date}</td>
                    </tr>
        })

        if(this.state.eventList.length!==0)
            return (
                <div className="todo">
                    <h3>Todo with Date</h3><br/><br/>
                        <div className="row">           
                            <table className="table col-sm-5">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Event Title</th>
                                    <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableBody}
                                </tbody>
                            </table>
                        
                        
                            <div className="col-sm-7">          
                                <AddEvent addEventToTable={this.addEventToTable}/>
                            </div>
                        </div>
                </div>
            )
        else {
            return (
                <div className="todo">
                    <h3>Todo with Date</h3><br/><br/>
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">          
                            <AddEvent addEventToTable={this.addEventToTable}/>
                        </div>
                    </div>
                </div>)
        }
    }
}
