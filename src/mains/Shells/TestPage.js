import React, {Component , PropTypes} from 'react';
import TestContent from '../Test/TestContent.js'
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress';


class TestPage extends Component{
	constructor(props) {
			    super(props);
			    this.state = {
			    	data: 0
			    };

			  }	

	componentWillMount=()=>{
		var {test_data, token} = this.props.user
		if(test_data.length == 0){
			this.comeback()
		}
		var subject = this.getSubjectName()
		var xmlhttp = new XMLHttpRequest()
		var body =  JSON.stringify({token: token, counts: test_data, subject})  
		xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_test', true);
		xmlhttp.send(body); 
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState !== 4) return;
			if(xmlhttp.status === 200) {
				var data = JSON.parse(xmlhttp.responseText)
				if (data.result !== 'Error' ){
						this.setState({data})
						
					}
			}
		}.bind(this) 
		
		
	}


	comeback=()=>{
		var subject = this.getSubjectName()
		this.context.router.push({
				 pathname: '/'+subject
		})
	}


	getSubjectName=()=>{
		var name = window.location.pathname
		name = Array.from(name)
		var subject = []
		var point= 0
		for (var i =0; i<name.length;i++){
			if(name[i]=='/' ){
				point++
			}
			if(i==0){continue}
			if(point==1){
				subject.push(name[i])
			}
		}
		return subject.join('')

	}


	render(){
		if(this.state.data === 0){
			const style = {
			margin: "auto",
			maxWidth: '50px',
			marginTop: (screen.height-100)/2
		}
			var color = '#2196F3';
			return(

					<div style={style} >

					<CircularProgress size={40} thickness={5}
									 mode={'indeterminate'}
									 color={color}/>
				</div>
				)
		}
			
		return(<div id="nowpage" style={{marginTop: 100}}>Test</div>	)
		}
			

	}


function mapStateToProps (state) {
  return {
    user: state.user,
  }
}



export default connect(mapStateToProps)(TestPage)

TestPage.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}