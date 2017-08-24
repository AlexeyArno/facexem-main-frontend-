import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionCached from 'material-ui/svg-icons/action/cached'
import Toggle from 'material-ui/Toggle';


export default class Issue extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	send: 0,
		    	type: 0,
		    	content: ''
		    };
		  }


		  change=(v, t)=>{
		  	switch(t){
		  		case 'content':
		  			if(v.length>256){return}
		  			this.setState({
		  				content: v
		  			})
		  			break
		  		case 'type':
		  			v = (v)? 1:0
		  			this.setState({type: v})
		  			break
		  	}
		  }

		  getBrowser=()=>{
		  	 // получаем данные userAgent
		    var ua = navigator.userAgent;    
		    // с помощью регулярок проверяем наличие текста,
		    // соответствующие тому или иному браузеру
		    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
		    if (ua.search(/Firefox/) > 0) return 'Firefox';
		    if (ua.search(/Opera/) > 0) return 'Opera';
		    if (ua.search(/Safari/) > 0) return 'Safari';
		    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
		    // условий может быть и больше.
		    // сейчас сделаны проверки только 
		    // для популярных браузеров
		    return 'Undefined';
		  }






		  send=()=>{
		  	if(this.state.content.length ===0){return}
		  	this.setState({send: 1})
		  	var xmlhttp = new XMLHttpRequest()
		  	var page = window.location.pathname
		  	var browser = this.getBrowser()
  			var body = JSON.stringify({token: this.props.token, page, browser, type: this.state.type, content: this.state.content})  
			xmlhttp.open('POST', 'https://api.facexam.ru/api/user/set_general_report', true);
			xmlhttp.send(body);  
			xmlhttp.onload = function (e) {
			    if (xmlhttp.status === 200) {
			      if(JSON.parse(xmlhttp.responseText).result != 'Error'){
			      	this.setState({send: 2})
			      	return 
			      }
			    }
			   this.setState({send: 3})
			}.bind(this)




		  }

render(){
	const styles = {
	  underlineStyle: {
	    borderColor: this.props.color,
	    opacity: 0.5
	  },
	  floatingLabelFocusStyle: {
	    color: this.props.color,
	  },
	};
	const stylesToggle = {
		  thumbSwitched: {
		    backgroundColor: this.props.color,
		  },
		  trackSwitched: {
		    backgroundColor:this.props.color,
		    opacity: 0.7
		  }

		};
	var button =  <RaisedButton label="Отправить" style={{float: 'right', marginTop: 10}} labelColor={this.props.color} onClick={this.send}/>
	switch(this.state.send){
		case 1:
			button = <RaisedButton style={{float: 'right', marginTop: 10}}>
						<CircularProgress size={25} style={{verticalAlign: 'middle'}} color={this.props.color}/>
					</RaisedButton>
			break
		case 2:
			button = <RaisedButton style={{float: 'right', marginTop: 10, maxWidth: 50}} onClick={()=>this.props.close()}>
						<ActionDone color={this.props.color} style={{verticalAlign: 'middle'}}/>
					</RaisedButton>
			break
		case 3:
			button = <RaisedButton style={{float: 'right', marginTop: 10, maxWidth: 50}} onClick={this.send}>
						<ActionCached color='red' style={{verticalAlign: 'middle'}}/>
					</RaisedButton>
			break
	}
	return(

		<div>
			<div style={{ marginTop: 10}}>Если что-то сломалось или неправильно работает, напишите об этом ниже, и мы тут же это исправим.</div>		
			<TextField
			      value={this.state.content}
			      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
				  underlineFocusStyle={styles.underlineStyle}
				  fullWidth={true}
				  floatingLabelText="Жалоба"
				  multiLine={true}
				  rowsMax={4}
				  onChange={(e,v)=>this.change(v, 'content')}
			    /><br/>
			    <div className="characterCounter">
		    		<div id='countElem'>{this.state.content.length}</div>/256</div>
				<Toggle
			      label="Ошибка на этой странице"
			      thumbSwitchedStyle={stylesToggle.thumbSwitched}
			      trackSwitchedStyle={stylesToggle.trackSwitched}
			      defaultToggled={(this.state.type)? true: false}
			      labelStyle={{opacity: 0.7}}
			    />
			    {button}
		</div>

		

		   )

}



}