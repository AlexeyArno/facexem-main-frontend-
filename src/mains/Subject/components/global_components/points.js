import React, { Component } from 'react';


export default class Points extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

		   getTimeSpin=(data)=>{
		  	var color;
		var styleFill={transform: "rotate(180deg)"};
		var styleSlice={};
		var rating = this.props.data.test_points;
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
		var classNaming = 'c100 p'+rating+' '+color+' small right'
		return(	
					<div className={classNaming} style={{position: 'absolute', right: 20}}>
						  <span>{rating}</span>
						  <div className="slice" style={styleSlice}>
						    <div className="bar" style={mystyle} ></div>
						    <div className="fill" style={styleFill}></div>
							</div>
							</div>
					)

		  }

render(){
	var spin = this.getTimeSpin()
	return(<div style={{padding: 15, paddingTop: 10}}>
			<div style={{float: 'left', paddingTop: 10}}>
				<div style={{fontSize: 21}}>Ваш бал равен</div>
				<div style={{fontSize: 12, color: 'rgb(115, 135, 156)', paddingLeft: 1}}>На основе последних {this.props.data.count_tests} тестов</div>
			</div>
			{spin}
			</div>

		

		   )

}



}