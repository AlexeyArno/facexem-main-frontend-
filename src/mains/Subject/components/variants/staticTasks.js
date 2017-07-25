import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import SolveStTest from './solveTest.js';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';

export default class StaticTasks extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	open: false,
		    	id: 0,
		    	index: 0
		    };
		  }


		  go=(id, type, index)=>{
		  	if(type=='unsolve'){
		  		this.props.goToStaticTest(id)
		  	}else{
		  		this.setState({
		  			open: true,
		  			id: id,
		  			index
		  		})
		 		document.getElementById('nowpage').style.filter='blur(2px)'
		  	}
		  }
		 
		 close=()=>{
		 	this.setState({
		 		open: false,
		  		id: 0,
		  		index: 0
		 	})
		 	document.getElementById('nowpage').style.filter=''
		 }


		  getTests=(data)=>{
		  	return data.map(function(item, index){
		  		var color = '#F29F05'
		  		if(!item.solve){
		  			color = '#E74D49'
		  		}else{
		  			color = '#89D8C2'
		  		}
		  		return <ListItem key={index} onClick={()=>this.go(item.id, (item.solve)? 'solve': 'unsolve', index+1)}
		  					 rightIcon={(item.count)? <div style={{color: "rgb(115, 135, 156)"}}>{item.count}</div>: ''}
		  					 style={{textAlign: 'left', padding: '5px', paddingLeft: 20}}
						     primaryText={'Тест - '+(index+1)}
						     secondaryText={"Создан - "+item.date}
						    >
						     <div style={{width: 10, height: 10, background: color, borderRadius: 5,
						     				 position: 'absolute', left: -6,top: 22, filter: 'blur(1px)'}}/>


						    </ListItem>
		  	}.bind(this))
		  }

render(){
	var test = this.getTests(this.props.data)
	test = (test.length>0)? test: <div style={{margin: 10, textAlign: 'center',  color: "rgb(115, 135, 156)"}}>Пусто</div>
	return(<div>
			<Dialog
				          title={"Тест "+this.state.index}
				          modal={false}
				          titleStyle={{color: 'rgb(33, 150, 243)'}}
				          open={this.state.open}
				          autoScrollBodyContent={true}
				          bodyClassName='dialogBodyTable'
				          overlayClassName='overlay'
				          onRequestClose={this.close}
				          contentStyle={{padding: 0,  maxWidth: 500, width: "90%", minHeight: 400}}
				          autoDetectWindowHeight={false}
				          style={{maxHeight: 500}}
				        >	
				        <IconButton onClick={this.close} className="closeButton"><Close color='rgb(33, 150, 243)'/></IconButton>
				        	<SolveStTest id={this.state.id} token={this.props.token} goToStTest={this.props.goToStaticTest}/>
				 </Dialog>
			<div style={{textAlign: 'center', padding: 10, color: "rgb(115, 135, 156)"}}>Стандартные тесты:</div>
			{test}
			</div>

		

		   )

}



}