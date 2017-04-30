import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


export default class DialogContent extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }


	clickOnRow=(n)=>{
		this.props.chooseNumberClick(n+1)
	}

	getCountsTasks=(number)=>{
		var style ={
			display: 'inline-block',
			color: '#fff',
			fontSize: '20px',
			width: 50,
			cursor: 'pointer',
			textAlign: 'center'
		}
		var count={
			width: 45,
			background: '#fff',
			borderRadius: 5,
			margin: 'auto',
			color: 'rgb(33, 150, 243)'
		}
		var tasks = new Array
		for (var n=1; n<=number; n++){
			var max = 4
			var min = 1
			var point =  Math.floor(Math.random() * (max - min)) + min;
			tasks.push({number: n, theme: 'Тут типо тема огромная тема, что не должна помещаться тут во всю ширину', points: point })
		}
		var selectnumber = this.props.number
		var final = tasks.map(function(item, index){
			var id = item.number+'dialogTaskTab'
			var select= false
			if (selectnumber-1 == index){
				select = true
			}
			return(
				<TableRow id={id} selected={select}>
			        <TableRowColumn>{item.number}</TableRowColumn>
			        <TableRowColumn>{item.theme}</TableRowColumn>
			        <TableRowColumn>{item.points}</TableRowColumn>
			      </TableRow>
				)
		}.bind(this))

		return final		
	}

render(){

	var content = this.getCountsTasks(19)
	
	return(

		<Table style={{padding: 0}} onCellClick={(rowNumber )=>this.clickOnRow(rowNumber)}>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Номер</TableHeaderColumn>
        <TableHeaderColumn>Тема</TableHeaderColumn>
        <TableHeaderColumn>Баллы</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
    {content}
    </TableBody>
    </Table>

		   )

}



}