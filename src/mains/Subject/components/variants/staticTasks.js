import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';

export default class StaticTasks extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }


		  go=(id)=>{
		  	this.props.goToStaticTest(id)
		  }
		 


		  getTests=(data)=>{
		  	return data.map(function(item, index){
		  		var color = '#F29F05'
		  		if(!item.solve){
		  			color = '#E74D49'
		  		}else{
		  			color = '#89D8C2'
		  		}
		  		return <ListItem key={index} onClick={()=>this.go(item.number)}
		  					 rightIcon={(item.count)? <div style={{color: "rgb(115, 135, 156)"}}>{item.count}</div>: ''}
		  					 style={{textAlign: 'left', padding: '5px', paddingLeft: 20}}
						     primaryText={'Тест - '+item.number}
						     secondaryText={"Создан - "+item.date}
						    >
						     <div style={{width: 10, height: 10, background: color, borderRadius: 5,
						     				 position: 'absolute', left: -6,top: 22, filter: 'blur(1px)'}}/>


						    </ListItem>
		  	}.bind(this))
		  }

render(){
	var test = this.getTests(this.props.data)
	return(<div>
			<div style={{textAlign: 'left', padding: 10, color: "rgb(115, 135, 156)"}}>Стандартные тесты</div>
			{test}
			</div>

		

		   )

}



}