import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class ThemesStatic extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }
		  processArray=(data)=>{
		  	var final = []
		  	var count = 1
		  	for(var y=0; y<data.length; y++){
			  	for (var i=0;i<data.length;i++){
			  		if(data[i].num === count){
			  			count++
			  			final.push(data[i])
			  		}
			  	}
			 }
			 return final
		  }

		   getRightIcon=(now, last)=>{
		  	if(!now){now = 0}
		  	if(!last){last = 0}
		  	var change = Math.floor(now-last)
		  	const icon_style={
		  		width: 30
		  	}
		  	var color = (change<=0)?'#E74D49':'#89D8C2'
		  	var icon = (change<=0)?<HardwareKeyboardArrowDown style={icon_style} color={color}/>:<HardwareKeyboardArrowUp style={icon_style} color={color}/>
		  	var title =(change<0)?change+' %':'+'+change+'%'
		  	if(change===0){
		  		
		  		title = change+' %'
		  		color = 'rgba(0,0,0,0.5)'
		  		icon = <ContentRemove style={icon_style} color={color}/>
		  	}
		  	return <div style={{width: 75}}>
		  				<div style={{display: 'inline-block'}}>
		  					{icon}
		  				</div>
		  				<div style={{display: 'inline-block', verticalAlign: 'super',
		  						 	color, opacity: 0.7, fontSize: 14}}>
		  					{title}
		  				</div>
		  			</div>

		  }



		  getTasks=()=>{
		  	var last_task = this.props.last_task_procents
		  	var tasks = this.processArray(this.props.task_table)
		  	console.log(last_task)
		  	console.log(tasks)
		  	return tasks.map(function (item, index) {
		  		var color = '#F29F05'
		  		if(item.color === 'red'){
		  			color = '#E74D49'
		  		}else if(item.color === 'green'){
		  			color = '#89D8C2'
		  		}
		  		var last_num = last_task[item.num]
		  		var icon = this.getRightIcon(item.procent*100,last_num*100)
				return <TableRow key={index} >
			                <TableRowColumn style={{width: 20}}>
			                	<div style={{width: 10, height: 10, background: color, borderRadius: 5,
						     				 left: -6,top: 22, filter: 'blur(1px)'}}/>
			                </TableRowColumn>
			                <TableRowColumn>{item.theme}</TableRowColumn>
			                <TableRowColumn>
			                	{Math.floor(item.procent*100)+'%'}
			                </TableRowColumn>
			                <TableRowColumn>{icon}</TableRowColumn>
			              </TableRow>
		  				
		  	}.bind(this))
		  }

render(){
	var tasks = this.getTasks()
	return(
			<div>
			<ReactCSSTransitionGroup
				 transitionName="example"
	               transitionAppear={true} transitionAppearTimeout={2000}
	               transitionEnter={false} transitionLeave={false}>
				<hr style={{margin: 20, marginBottom: 0, opacity: 0.1}}/>
				<Table
				  style={{tableLayout: "fixed"}}
		          height={'100%'}
		          fixedHeader={true}
		          selectable={false}
		          multiSelectable={false}
		        >
		          <TableHeader
		          	style={{tableLayout: "fixed"}}
		            displaySelectAll={false}
		            adjustForCheckbox={false}
		            enableSelectAll={false}
		          >
		            <TableRow>
		              <TableHeaderColumn style={{ display:"none"}} ></TableHeaderColumn>
		              <TableHeaderColumn  style={{ marginLeft: 20}} >Тема</TableHeaderColumn>
		              <TableHeaderColumn style={{ paddingLeft: 45}}>Уровень</TableHeaderColumn>
		              <TableHeaderColumn style={{ paddingLeft: 45}}>Прогресс</TableHeaderColumn>
		            </TableRow>
		          </TableHeader>
		          <TableBody
		            displayRowCheckbox={false}
		            deselectOnClickaway={false}
		            showRowHover={false}
		            stripedRows={false}
		          >
					{tasks}

		          </TableBody>
		          </Table>
		       </ReactCSSTransitionGroup>
			</div>

		

		   )

}



}