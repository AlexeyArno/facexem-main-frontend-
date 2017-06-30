import React, { Component } from 'react';


export default class VariantStatistic extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }
		  getCircle=(count, middle, type)=>{
		  	var color;
			var styleFill={transform: "rotate(180deg)"};
			var styleSlice={};
			if(type){
				var seconds = Math.floor(count%60)
				var minutes = Math.floor(count/60)
				var hours = Math.floor(count/3600)
				var rating = Math.floor(middle/count*100)
				var title = hours+':'+minutes+':'+seconds
			}else{
				var rating = Math.floor(middle/count*100)
				var title = count
			}
			
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
			var classNaming = 'c100 p'+rating+' '+color+' small'
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
	var data = this.props.data
	var points = this.getCircle(data.middle_point, 100, 0)
	var time = this.getCircle(data.middle_time, 240*60, 1)
	return(<div style={{padding: 15}}>
			<div className='col-md-6 col-xs-12 col-mg-6'>
				{points}
				<div style={{textAlign: 'center', fontSize: 12, margin: '5px 0px'}}>Среднее количество баллов в обычных тестах</div>
			</div>
			
			<div className='col-md-6 col-xs-12 col-mg-6'>
				{time}
				<div style={{textAlign: 'center', fontSize: 12, margin: '5px 0px'}}>Среднее время решения обычного теста</div>
			</div>
			
		

		</div>

		

		   )

}



}