import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress';
import TestBody from '../Test/test/TestBody.js'


class StTest extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	load: 0,
		    	data: [],
		    	type: '',
		    	finish: 0
		    };
		  }


		  

		  getUrlhData = ()=>{
		  	// function that decode "/math/singletask/4" to "math", "singletask", "4"
		  	var body = window.location.pathname
		  	var workbody = Array.from(body)
		  	var subject = []
		  	var type = []
		  	var number = []
		  	var count = 0
		  	for(var i=0; i<workbody.length;i++){
		  		count =(workbody[i] === '/')? count+1:count
		  		if(count===1){
		  			if (workbody[i]==='/') continue;
		  			subject[subject.length] = workbody[i] 
		  		}else if(count === 2){
		  			if (workbody[i]==='/') continue;
		  			type[type.length] = workbody[i]
		  		}else if(count === 3){
		  			if (workbody[i]==='/') continue;
		  			number[number.length] = workbody[i]
		  		}
		  		
		  	}
		  	return({subject:subject.join(''), type: type.join(''), number:number.join('')})
		  }


		  componentWillMount=()=>{
		  	var info = this.getUrlhData()
		  	var {token} = this.props.user
			var xmlhttp = new XMLHttpRequest()
			var body =  JSON.stringify({token: token, id: info.number, subject: info.subject})  
			xmlhttp.open('POST', 'https://api.facexam.ru/api/user/get_static_test', true);
			xmlhttp.send(body); 
			xmlhttp.onreadystatechange = function () {
				if(xmlhttp.status === 200 && xmlhttp.readyState === 4) {
					var data = JSON.parse(xmlhttp.responseText)
					if (data.result !== 'Error' ){
							this.setState({data: data.content,load: 1, type: data.type})	
						}else{
							this.setState({load: 2})
						}
				}
			}.bind(this)  
		  }

render(){
	const style = {
			margin: "auto",
			maxWidth: '50px',
			marginTop: (screen.height-100)/2
		}
	const color = '#2196F3'
	if (this.state.load === 0 ) {
			return(<div style={style} >

					<CircularProgress size={40} thickness={3} mode={'indeterminate'} color={color}/>
				</div>
				)
		}
	var {token} = this.props.user
	var id = this.getUrlhData().number
	return(<div  id="nowpage" style={{marginTop: 50}}>
			<TestBody data={this.state.data} color={color} token={token} type={this.state.type} test_type='st' id={id} />
			</div>

		

		   )

}



}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}



export default connect(mapStateToProps)(StTest)

StTest.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}

