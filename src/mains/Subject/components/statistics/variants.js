import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
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

export default class VariantStatistic extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

		  getTime=(sec)=>{
		  	var seconds = sec%60
		  	seconds = (seconds<10)? '0'+seconds: seconds
		  	var minutes = Math.floor(sec/60)
		  	minutes = (minutes<10)? '0'+minutes: minutes
		  	var hours = Math.floor(sec/3600)
		  	var time = hours+':'+minutes+':'+seconds
		  	return time
		  }

		  getStatTable=(data)=>{
		  	var array = []
		  	for (var a in data){
		  		array.push(a)
		  	}
		  	return array.map(function(item, index){
		  		item = data[item]
		  		var count_tasks = (item.solve+item.unsolve !== 0 )? item.solve+item.unsolve: 1
		  		var color = '#E74D49'
		  		if(item.count >0.40){
		  			color = '#F29F05'
		  		}else if(item.count >0.70){
		  			color = '#89D8C2'
		  		}
		  		return <TableRow key={index} >
			                <TableRowColumn style={{width: 20}}>
			                	<div style={{width: 10, height: 10, background: color, filter: 'blur(1px)', borderRadius: 5}}/>
			                </TableRowColumn>
			                <TableRowColumn>{index+1}</TableRowColumn>
			                <TableRowColumn>{item.theme}</TableRowColumn>
			                <TableRowColumn style={{color}}>{Math.floor(item.count*100)+'%'}</TableRowColumn>
			              </TableRow>
		  	})
		  }
	

render(){
	var data = this.props.data
	if(this.props.data.result === 'Error' && data.type == 'Less'){
		var test_word = 'тестов'
		switch(data.need - data.have){
			case 4:
			case 3:
			case 2:
				test_word = 'теста'
				break;
			case 1:
				test_word = 'тест'
		}
		return <div style={{padding: 20}}>Вам нужно решить ещё {data.need-data.have+' '+test_word} для показа статистики</div>
	}
	const paper_style={
		height: 100,
		padding: 15,
	}
	var time = this.getTime(data.middle_time)
	var table = this.getStatTable(data.number_info)
	return(<div style={{padding: 15}}>
				<div style={{width: "100%", display: 'inline-block'}}>
					<div className="col-xs-12 col-lg-4 col-md-4">
						<Paper style={paper_style} zDepth={1} >
							<div style={{fontSize: 14, color: 'rgba(0,0,0,0.5)'}}>Средний бал</div>
							<div style={{fontSize: 24, marginTop: 15, opacity: 0.8, color: this.props.color}}>{data.middle_point}</div>
						</Paper>
					</div>
					<div className="col-xs-12 col-lg-4 col-md-4">
						<Paper style={paper_style} zDepth={1}>
							<div style={{fontSize: 14, color: 'rgba(0,0,0,0.5)'}}>Среднее время</div>
							<div style={{fontSize: 24, marginTop: 15, opacity: 0.8, color: this.props.color}}>{time}</div>
						</Paper>
					</div>
					<div className="col-xs-12 col-lg-4 col-md-4">
						<Paper style={paper_style} zDepth={1} >
							<div style={{fontSize: 14, color: 'rgba(0,0,0,0.5)'}}>Решенно тестов</div>
							<div style={{fontSize: 24, marginTop: 15, opacity: 0.8, color: this.props.color}}>{data.test}</div>
						</Paper>
					</div>
				</div>
				<hr style={{marginTop: 20}}/>
				 <Table
				  style={{tableLayout: "fixed"}}
		          height={'100%'}
		          fixedHeader={false}
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
		              <TableHeaderColumn colSpan="4"  style={{ textAlign: 'center'}}>
		                Статистика ваших решенных тестов 
		              </TableHeaderColumn>
		            </TableRow>
		            <TableRow>
		               <TableHeaderColumn style={{ display:"none"}} ></TableHeaderColumn>
		              <TableHeaderColumn  style={{ marginLeft: 20}} >Номер</TableHeaderColumn>
		              <TableHeaderColumn style={{ paddingLeft: 85}}>Тема</TableHeaderColumn>
		              <TableHeaderColumn style={{ paddingLeft: 125}}>Прогресс</TableHeaderColumn>
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
			</div>
			

		

		   )

}



}