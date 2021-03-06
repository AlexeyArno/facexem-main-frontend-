import React, { Component } from 'react';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import IconButton from 'material-ui/IconButton';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all' 
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'


export default class UpPanel extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	pos: 0	
		    };
		  }

		  getPoints=(count, need, h_count, h_need)=>{
		  	var procent=count/need
		  	var color='#f27a74'
		  	if(procent>=0.4 && procent<=0.7){
		  		color = '#f1e773'
		  	}else if(procent>=0.7){
		  		color = '#33ce4a'
		  	}
		  	var right = (this.state.pos)? 140: 0
		  	var left_button = <div  style={{display: 'inline-block', position: 'relative', bottom: 10, width: 48, height: 48}}/>
		  	var right_button = <IconButton style={{display: 'inline-block', position: 'relative', bottom: 10}}
		  							onClick={()=>this.setState({pos: 1})}>
						      <HardwareKeyboardArrowRight />
						    </IconButton>
			if(this.state.pos === 1){
				left_button = <IconButton style={{display: 'inline-block', position: 'relative', bottom: 10}} 
		  				    			onClick={()=>this.setState({pos: 0})}>
						      <HardwareKeyboardArrowLeft />
						    </IconButton>
				right_button = <div  style={{display: 'inline-block', position: 'relative', bottom: 10, width: 48, height: 48}}/>
			}
		  	return <div style={{display: "inline-block", textAlign: 'center'}} className="col-xs-12 col-sm-6">
		  				    {left_button}
		  				<div style={{width: 140, marginTop: 10, overflowX: "hidden", whiteSpace: "nowrap",display: 'inline-block' }}>
		  					<div style={{position: 'relative', right, transition: 'right 0.5s ease-in-out'}}>
			  					<div style={{width: 140, display: "inline-block", textAlign: 'center'}}>
			  						<div style={{color, display: 'inline-block', fontSize: 30}}>{count}</div>
			  						<div style={{display: 'inline-block', fontSize: 30, opacity: 0.4}}>/</div>
			  						<div style={{ color, display: 'inline-block', fontSize: 30}}>{need}</div>
			  						<div style={{fontSize: 14, color: 'rgb(115, 135, 156)'}}>Первичные балы</div>
			  					</div>
			  					<div style={{width: 140, display: "inline-block", textAlign: 'center'}}>
			  						<div style={{color, display: 'inline-block', fontSize: 30}}>{Math.floor(h_count)}</div>
			  						<div style={{display: 'inline-block', fontSize: 30, opacity: 0.4}}>/</div>
			  						<div style={{color, display: 'inline-block', fontSize: 30}}>{Math.floor(h_need)}</div>
			  						<div style={{fontSize: 14, color: 'rgb(115, 135, 156)'}}>Вторичные балы</div>
			  					</div>
		  					</div>
		  				</div>
		  				{right_button}
		  			</div>
		  }



		  getTime=(sec)=>{
		  	var seconds = sec%60
		  	seconds = (seconds<10)? '0'+seconds: seconds
		  	var minutes = Math.floor(sec/60)
		  	minutes = (minutes<10)? '0'+minutes: minutes
		  	var hours = Math.floor(sec/3600)
		  	return <div style={{display: "inline-block", textAlign: 'center', marginTop: 10}} className="col-xs-12 col-sm-6">
		  				<div style={{fontSize: 30, color: 'rgb(115, 135, 156)'}}>{hours+':'+minutes+':'+seconds}</div>
		  				<div style={{fontSize: 14, color: 'rgb(115, 135, 156)'}}>Время</div>
		  			</div>
		  }

render(){
	var data =this.props.data
	var points = this.getPoints(data.count, data.need_count, data.hundred_value, data.need_hundred_value)
	var time = this.getTime(data.time)
	const style={
		width: 60,
		height: 60
	}
	var up = (data.solve)? <ActionDoneAll color='#33ce4a' style={style}/> :<ActionThumbDown color='#f27a74' style={style}/>
	return(<div >
				<div>
					
						<div style={{textAlign: 'center', minHeight: 60, marginBottom: 10}}>
							{up}
						</div>
			
				</div>
				<hr/>
				{points}
				{time}
				<hr style={{display: 'inline-block', width: "100%"}}/>
			</div>

		

		   )

}



}