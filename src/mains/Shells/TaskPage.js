import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import Task from '../Task/Task.js'


class TaskPage extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	type: 0,
		    	data: []
		    };
		  }

		  getSearchData = ()=>{
		  	var body = window.location.pathname
		  	var workbody = Array.from(body)
		  	var subject = []
		  	var type = []
		  	var number = []
		  	var count = 0
		  	for(var i=0; i<workbody.length;i++){
		  		count =(workbody[i] == '/')? count+1:count

		  		if(count==1){
		  			if (workbody[i]=='/') continue;
		  			subject[subject.length] = workbody[i] 
		  		}else if(count == 2){
		  			if (workbody[i]=='/') continue;
		  			type[type.length] = workbody[i]
		  		}else if(count == 3){
		  			if (workbody[i]=='/') continue;
		  			number[number.length] = workbody[i]
		  		}
		  		
		  	}
		  	return({subject:subject.join(''), type: type.join(''), number:number.join('')})
		  }


		  getTask=()=>{
		  	const {token} = this.props.user
		  	var data = this.getSearchData()
		  	var xmlhttp = new XMLHttpRequest()
		  	var body=  JSON.stringify({token: token, type: data.type, number: data.number, subject: data.subject})
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_task', false);
			xmlhttp.send(body);  
			if(xmlhttp.status == 200) {
			var request = JSON.parse(xmlhttp.responseText)
		
			if (!request.result){
					return(request)
				}
			}

		  }

		  getAnswer=(id, answers)=>{
		  	var xmlhttp = new XMLHttpRequest()
		  	const {token} = this.props.user
		  	var body=  JSON.stringify({token: token, id: id, answers: answers})
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_answer', false);
			xmlhttp.send(body);  
			if(xmlhttp.status == 200) {
				var request = JSON.parse(xmlhttp.responseText)
				request = ['hello']
				if (!request.result){
					this.setState({
							type: 1,
							data: request
						})
		
				}
			}

		  }

		  




render(){
    var data = (this.state.type) ? this.state.data : this.getTask()
	return(<div className="contentRow">
				<Paper style={{maxWidth: 700, margin: 'auto', marginTop: 60}}>
					<Task data={data} type={this.state.type} answer={this.getAnswer} next={()=>this.setState({type: 0, data: []})}/>
				</Paper>
			</div>

		

		   )

}
}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}


export default connect(mapStateToProps)(TaskPage)

