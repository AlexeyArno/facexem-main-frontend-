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

		var tasks = this.props.data
		var selectnumber = this.props.number
		var final = tasks.map(function(item, index){
			var id = item.num+'dialogTaskTab'
			var select= false
			if (selectnumber === item.num){
				select = true
			}
			// var color = 'rgba(255, 244, 104,0.35)'
			var name = 'rowCkickTable'
			// if(item.color==='green'){
			// 	color = 'rgba(204, 247, 126,0.35)'
			// }else if(item.color=== 'red'){
			// 	color = 'rgba(252, 163, 85,0.35)'
			// }
			var color = '#F29F05'
	  		if(item.color === 'red'){
	  			color = '#E74D49'
	  		}else if(item.color === 'green'){
	  			color = '#89D8C2'
	  		}

			return(
				<TableRow id={id} key={index} selected={select}  displayBorder={false} 
						style={{cursor: 'pointer', textAlign: 'center'}}>
					<TableRowColumn style={{width: 20}}>
			                	<div style={{width: 10, height: 10, background: color, filter: 'blur(1px)', borderRadius: 5}}/>
			        </TableRowColumn>
			        <TableRowColumn >{item.num}</TableRowColumn>
			        <TableRowColumn >{item.theme}</TableRowColumn>
			      </TableRow>
				)
		})

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
      <TableHeaderColumn style={{display: 'none'}}></TableHeaderColumn>
        <TableHeaderColumn>Номер</TableHeaderColumn>
        <TableHeaderColumn style={{paddingLeft: 20}}>Основная тема</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody  showRowHover={true} displayRowCheckbox={false}>
    {content}
    </TableBody>
    </Table>

		   )

}



}