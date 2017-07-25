import React, { Component, PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AvRepeat from 'material-ui/svg-icons/av/repeat'
import ContentReply from 'material-ui/svg-icons/content/reply'

export default class SolveStTest extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	data: {},
		    	load: 0
		    };
		  }


		  goToStaticTest=()=>{
		  	this.props.goToStTest(this.props.id)
		  }

		  handllink=(name)=>{
			this.context.router.push({
				 pathname: name
			});
		}

	  componentWillMount=()=>{
			var xmlhttp = new XMLHttpRequest()
			var body =  JSON.stringify({token: this.props.token,id: this.props.id})  
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_solve_st_test_info', true);
			// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xmlhttp.send(body); 
			xmlhttp.onreadystatechange = function() { // (3)
			  if (xmlhttp.status === 200 && xmlhttp.readyState === 4) {
			  var data = JSON.parse(xmlhttp.responseText)
				if (data.result != 'Error' ){
					this.setState({data: data, load: 1})
				}
			  }
			  if (xmlhttp.status != 200) {
			    console.log( 'Ошибка: ' + (xmlhttp.status ? xmlhttp.statusText : 'запрос не удался') );
			    return;
			  }
		}.bind(this)
	  }

	  getTime=(sec)=>{
	  	var seconds = sec%60
	  	seconds = (seconds<10)? '0'+seconds: seconds
	  	var minutes = Math.floor(sec/60)
	  	minutes = (minutes<10)? '0'+minutes: minutes
	  	var hours = Math.floor(sec/3600)
	  	return <span>{hours+':'+minutes+':'+seconds}</span>
	  }

render(){
	if (this.state.load === 0){
			const style = {
				margin: "50px",
				textAlign: 'center'
			}
			return(

					<div style={style} >

					<CircularProgress size={40} thickness={3} mode={'indeterminate'} color='#2196F3'/>
				</div>
				)
		}
	var data = this.state.data
	var count = Math.floor(data.hundred_value)
	var color = (count>45)?(count>75)?'rgb(51, 206, 74)':'#f4b95f': '#f4665f'
	var time = this.getTime(data.time)
	var main_color = '#2196F3'
	return(<div style={{padding: 10}}>
				<div style={{ textAlign: 'center'}}>Последний результат:</div>
				<div style={{marginTop: 10, textAlign: 'center', color, fontSize: 22}}>
					<span>{count}</span>
					<span>/</span>
					<span>{data.hundred_need_count}</span>
				</div>
				<div>
					<div style={{margin: 10, padding: 5, fontSize: 16}}>
						<div style={{minWidth: 200, display: 'inline-block'}}>Дата: </div>
						<span style={{color:main_color}}>{data.date}</span>
					</div>
					<div style={{margin: 10, padding: 5, fontSize: 16}}>
						<div style={{minWidth: 200, display: 'inline-block'}}>Выполнено заданий: </div>
						<span style={{color:main_color}}>{data.count+'/'+data.need_count}</span>
					</div>
					<div style={{margin: 10, padding: 5, fontSize: 16}}>
						<div style={{minWidth: 200, display: 'inline-block'}}>Потрачено времени: </div>
						<span style={{color:main_color}}>{time}</span>
					</div>
				</div>
				<hr/>
				<div>
					<FlatButton label="Прошлый тест" labelStyle={{color: main_color }} style={{margin: 12}}
								icon={<ContentReply color={main_color}/>} onClick={()=>this.handllink(data.link)}/>
					<RaisedButton label="Решить заново" style={{float:'right', margin: 12}} onClick={this.goToStaticTest}
									 backgroundColor={main_color} labelColor="#fff" icon={<AvRepeat/>}/>
				</div>
			</div>
		

		   )

}



}

SolveStTest.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}