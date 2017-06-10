import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



export default class DialogContent extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }


	clickOnRow=(n)=>{
		var number =  this.props.data[n].num
		this.props.chooseNumberClick(number)

	}

	getCountsTasks=()=>{
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
		var tasks = this.props.data
		var selectnumber = this.props.number
		var final = tasks.map(function(item, index){
			var id = item.num+'dialogTaskTab'
			var select= false
			if (selectnumber == item.num){
				select = true
			}
			var color = 'rgba(255, 244, 104,0.35)'
			var name = 'rowCkickTable'
			if(item.color=='green'){
				color = 'rgba(204, 247, 126,0.35)'
			}else if(item.color== 'red'){
				color = 'rgba(252, 163, 85,0.35)'
			}
			return(
				<TableRow id={id} key={index} selected={select} className={name} displayBorder={false} 
						style={{cursor: 'pointer', textAlign: 'center', background: color}}>
			        <TableRowColumn >{item.num}</TableRowColumn>
			        <TableRowColumn >{item.theme}</TableRowColumn>
			      </TableRow>
				)
		}.bind(this))

		return final		
	}

render(){

	var content = this.getCountsTasks()
	
	return(
		
		<Table style={{padding: 0}} 
		 onCellClick={(rowNumber )=>this.clickOnRow(rowNumber)}>
		
    <TableHeader displaySelectAll={false}
				            adjustForCheckbox={false}
				            enableSelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Номер</TableHeaderColumn>
        <TableHeaderColumn>Тема</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody  showRowHover={false} displayRowCheckbox={false}>
    {content}
    </TableBody>
    </Table>

		   )

}



}