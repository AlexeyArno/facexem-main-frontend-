import React, { Component } from 'react';


export default class Points extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

	getTimeSpin=(middle_point)=>{
		var color
		var styleFill={transform: "rotate(180deg)"}
		var styleSlice={}
		var rating = middle_point
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
	var data = this.props.data
	if(data.result == 'Error' && data.type =='Less'){
		var spin = this.getTimeSpin(0)
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

		return <div>
				<div style={{position: 'absolute', zIndex: 99, paddingTop: 23, textAlign: 'center', paddingRight: 30, width: "100%"}}>
					<p style={{margin: 0, textAlign: 'center'}}>🔒</p>
					Вам нужно решить ещё {data.need - data.have+" "+test_word} 
				</div>
				<div style={{padding: 15, paddingTop: 10, filter: 'blur(7px)'}}>
				<div style={{float: 'left', paddingTop: 10}}>
					<div style={{fontSize: 21}}>Ваш бал равен</div>
					<div style={{fontSize: 12, color: 'rgb(115, 135, 156)', paddingLeft: 1}}>На основе последних 0 тестов</div>
				</div>
				{spin}
				</div>
		 	</div>
	}
	var spin = this.getTimeSpin(data.middle_point)
	return(<div style={{padding: 15, paddingTop: 10}}>
			<div style={{float: 'left', paddingTop: 10}}>
				<div style={{fontSize: 21}}>Ваш бал равен</div>
				<div style={{fontSize: 12, color: 'rgb(115, 135, 156)', paddingLeft: 1}}>На основе последних {data.test} тестов</div>
			</div>
			{spin}
			</div>

		

		   )

}



}