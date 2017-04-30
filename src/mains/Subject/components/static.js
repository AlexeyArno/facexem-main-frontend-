import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Chart from 'chart.js';


export default class Statistics extends Component{


	render(){
		var color;
		var styleFill={transform: "rotate(180deg)"};
		var styleSlice={};
		var rating = 22;
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
		var classNaming = 'progressBarYet  c100 p'+rating+' '+color+' big center'
		return(	<div className="col-xs-12 col-sm-4 paper variants">
				<Paper className="preferencepaper variants" >
					<div className="Up">Статистика</div>
					<hr/>
					<div className={classNaming}>
						  <span>{rating}</span>
						  <div className="slice" style={styleSlice}>
						    <div className="bar" style={mystyle} ></div>
						    <div className="fill" style={styleFill}></div>
							</div>
					</div>
					<div className='progressTitleYet'>Среднее количество баллов в стандартных тестах</div>
				</Paper>
			</div>)

	}
}