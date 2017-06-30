import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class DialogTask extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

render(){
	
	return(<div>
			 <div style={{display:'inline-block', width:" 100%"}}>
									{this.props.mainquest}
				</div>
          <div>
          	<div className='col-md-6 col-xs-12 col-lg-6' style={{padding: 15}}>
		         <Paper style={{padding: 15}} >
					<div>Ваш ответ:</div>
					<div style={{width: "100%", display: 'inline-block'}}>
						{this.props.user_inputs}
					</div>
				</Paper>
			</div>
			<div className='col-md-6 col-xs-12 col-lg-6' style={{padding: 15}}>
			<Paper style={{padding: 15}} >
				<div>Правильный ответ:</div>
				<div style={{width: "100%", display: 'inline-block'}}>
					{this.props.true_inputs}
				</div>
			</Paper>
          </div>
          </div>
          <div>Решение:</div>
          <div>{this.props.descrip}</div>
		</div>

		

		   )

}



}