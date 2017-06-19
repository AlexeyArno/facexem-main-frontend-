import React, {Component , PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress';
import TestBody from '../Test/test/TestBody.js'
import RaisedButton from 'material-ui/RaisedButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6


class TestPage extends Component{
	constructor(props) {
			    super(props);
			    this.state = {
			    	data: 0,
			    	time: 0
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
		var color = '#2196F3';
		if(this.state.data === 0){
			const style = {
			margin: "auto",
			maxWidth: '50px',
			marginTop: (screen.height-100)/2
		}
			
			return(

					<div style={style} >

					<CircularProgress size={40} thickness={5}
									 mode={'indeterminate'}
									 color={color}/>
				</div>
				)
		}







		if(this.state.data.length === 0){
		
		return <ReactCSSTransitionGroup
								 transitionName="opacity"
					               transitionAppear={true} transitionAppearTimeout={800}
					               transitionEnter={false} transitionLeave={false}>
				<div className="contentRow">
					
						<Paper style={{padding: '5px', maxWidth: 700, margin: 'auto', marginTop: 80, transform: "rotate(1deg)"}}>
							<Paper style={{padding: '5px', maxWidth: 700, margin: 'auto',  transform: "rotate(358deg)"}}>
								<Paper style={{maxWidth: 700, margin: 'auto', transform: "rotate(1deg)"}}>
									<div style={{width: '100%', minHeight: 400, textAlign: 'center', verticalAlign: 'middle',
									paddingTop: 150}}>
										<div >
											<div>Извини, но мы ничего не смогли найти для тебя,
												можешь немного подождать пока появятся новые задания,
												или перейти к другим заданиям
											</div>
											<RaisedButton
												  onClick={this.comeback}
											      label="Вернуться"
											      secondary={true}
											      style={{margin: 12}}
											      icon={<NavigationArrowBack/>}
											    />
										</div>
									</div>
								</Paper>
							</Paper>
						</Paper>
				</div>
	</ReactCSSTransitionGroup>












	}
		var {token} = this.props.user
		return(<div id="nowpage" style={{marginTop: 50}}>
					<TestBody data={this.state.data} color={color} token={token}/>
				</div>	)
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

