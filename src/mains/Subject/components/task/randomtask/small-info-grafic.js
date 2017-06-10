import React, { Component } from 'react';


export default class SmallInfoGrafic extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }


		  getTimeSpin=(data)=>{
		  	var color;
			var styleFill={transform: "rotate(180deg)"};
			var styleSlice={};
			var middle_rezult = 120 
			var rating = this.props.mid_time
			var procent =  Math.floor(100*rating/middle_rezult)
			var view = (procent>100)? 100:procent
			if(view==100){
				color="red"
			} else if(view<100){
				color="yellow"}
			if(view<79){
				color="green"
			}

			var mystyle={
				transform: 'rotate('+ view *3.6+'deg)'
			}
			if(view>50){
				styleSlice={
					clip: "rect(auto, auto, auto, auto)"
				}
			}
			var classNaming = 'progressBarYet  c100 p'+ view +' '+color+' small center'
			var min = Math.floor(rating/60)
			var sec = rating%60
			var time = min+':'+sec
		  	return(<div style={{display: 'inline-block', margin: '0px 10px'}}>
		  			<div className={classNaming} >
						  <span>{time}</span>
						  <div className="slice" style={styleSlice}>
						    <div className="bar" style={mystyle} ></div>
						    <div className="fill" style={styleFill}></div>
							</div>
					</div>
					<div style={{fontSize: 12, opacity: 0.4}}>
						Среднее время
					</div>
					</div>)
		  }



render(){
	var spin1 = this.getTimeSpin()
	var mytop = this.props.hardest
	return(<div>
		{spin1}
		<div style={{display: 'inline-block',  margin: '0px 10px'}}>
		  			<div className='progressBarYet  c100 p0 small center' >
						  <span>{mytop}</span>
						  <div className="slice">
						    <div className="bar" ></div>
						    <div className="fill"></div>
							</div>
					</div>
					<div style={{fontSize: 12, opacity: 0.4}}>
						 Трудный номер
					</div>
					</div>
	</div>

		

		   )

}



}