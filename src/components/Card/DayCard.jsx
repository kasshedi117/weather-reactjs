import React, { Component } from 'react'
import {Card} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import "./DayCard.css"
export default class DayCard extends Component {
    render() {
        const {temp,date,unit} = this.props;
        return (
            <Card>
            <CardActionArea  onClick={this.props.onClick}>
                <Typography><strong>Temp:</strong></Typography>
                <p>{temp} {unit=="metric"?"M":"F"}</p>
                <Typography><strong>Date:</strong></Typography>
                <p>{date}</p>
            </CardActionArea>
            </Card>
        )
    }
}
