import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {
  Step,
  Stepper,
  StepLabel,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Lection from './lection.js';

export default class Lections extends Component{
	render(){
		var color = this.props.color
		var themes = this.props.data
		var alllections = themes.map(function(item, index){
			return(<div key={index}>
					<Lection data={item.lections} name={item.name} active={item.active} color={color}/>
				</div>)
		})
		return(	
	<div className="col-xs-12 col-sm-12 col-lg-8 paper lectionPaper">
				<Paper className="preferencepaper lections">
					<div className="Up">Лекциии</div>
					<hr/>
				 	{alllections}
				</Paper>
			</div>


)

	}
}
