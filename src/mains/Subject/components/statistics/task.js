import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class StaticTasks extends Component{

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



		  getStatTable=(data)=>{
		  	var data = this.processArray(data)
		  	return data.map(function(item, index){
		  		return <TableRow key={index} >
			                <TableRowColumn style={{width: 20}}>
			                	<div style={{width: 10, height: 10, background: item.color, filter: 'blur(1px)', borderRadius: 5}}/>
			                </TableRowColumn>
			                <TableRowColumn>{item.num}</TableRowColumn>
			                <TableRowColumn>{item.theme}</TableRowColumn>
			                <TableRowColumn>{Math.floor(item.procent*100)+'%'}</TableRowColumn>
			              </TableRow>
		  	})
		  }


		  getCircle=(count, middle)=>{
		  	var color;
			var styleFill={transform: "rotate(180deg)"};
			var styleSlice={};
			var seconds = Math.floor(count%60)
			var minutes = Math.floor(count/60)
			var rating = Math.floor(middle/count*100)
			var title = minutes+':'+seconds
			if(rating<45){
				color="red"
			}else if(rating<75){
				color="yellow"
			}else if(rating<100){
				color="green"
			}
			else if(rating=100){
				color="jesus"
			}
			var mystyle={
				transform: 'rotate('+rating*3.6+'deg)'
			}
			if(rating>50){
				styleSlice={
					clip: "rect(auto, auto, auto, auto)"
				}
			}
			var classNaming = 'c100 p'+rating+' '+color+''
			return(	
						<div className={classNaming} style={{float: 'none', margin: 'auto', displa: 'inline-block'}}>
							  <span>{title}</span>
							  <div className="slice" style={styleSlice}>
							    <div className="bar" style={mystyle} ></div>
							    <div className="fill" style={styleFill}></div>
								</div>
								</div>
						)
		  }

render(){
	var spin = this.getCircle(this.props.data.mid_time, 60)
	var table  = this.getStatTable(this.props.data.task_table)
	return(<div>
				<ReactCSSTransitionGroup
				 transitionName="example"
	               transitionAppear={true} transitionAppearTimeout={2000}
	               transitionEnter={false} transitionLeave={false}>

						<div style={{textAlign: 'center', paddingTop: 30}}>{spin}</div>
						<div style={{textAlign: 'center', paddingTop: 15}}>Среднее время на одно задание</div>
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
				              <TableHeaderColumn colSpan="3"  style={{ textAlign: 'center'}}>
				                Статистика ваших решенных заданий 
				              </TableHeaderColumn>
				            </TableRow>
				            <TableRow>
				              <TableHeaderColumn style={{ display:"none"}} ></TableHeaderColumn>
				              <TableHeaderColumn  style={{ marginLeft: 20}} >Номер</TableHeaderColumn>
				              <TableHeaderColumn tooltip="Основная тема используемая в этом задании" >Тема</TableHeaderColumn>
				              <TableHeaderColumn >Прогресс</TableHeaderColumn>
				            </TableRow>
				          </TableHeader>
				          <TableBody
				            displayRowCheckbox={false}
				            deselectOnClickaway={false}
				            showRowHover={false}
				            stripedRows={false}
				          >
				          {table}

				          </TableBody>
				          </Table>
		          </ReactCSSTransitionGroup>
			</div>

		

		   )

}



}