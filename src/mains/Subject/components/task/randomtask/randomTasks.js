import React, {Component , PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


// SELFMADE


export default class Random extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    };
		  }
		 openTasks=()=>{
		 	 // this.setState({open: !this.state.open});
		 	 this.handllink('randomtask')

		 }

		  handllink=(name)=>{
			this.context.router.push({
				 pathname: window.location.pathname+'/'+name
			});
					
			 }



render(){


	var hr ={
		margin: "10px 40px",
		opacity: 0.1,
		border: "0.5px solid rgb(115, 135, 156)"
	}

	var last = this.props.data.best_task_random
	return(<div>
				<ReactCSSTransitionGroup
				 transitionName="example"
	               transitionAppear={true} transitionAppearTimeout={2000}
	               transitionEnter={true} transitionLeave={true}>

						<div className="lastResult">
								{last}
							</div>
							<div className="lastResultTitle">
								Лучший результат
							</div>
						<hr style={hr}/>

						<RaisedButton
				          backgroundColor={this.props.color}
				          label='начать'
				          disableTouchRipple={true}
				          disableFocusRipple={true}
				          onClick={this.openTasks}
				          labelColor='#fff'
				          style={{ marginBottom: 10 }}
					        />
					        </ReactCSSTransitionGroup>
				


				</div>

		

		   )

}



}

Random.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}


// 	<hr style={hr}/>
					
						// <SmallInfoGrafic mid_time={this.props.data.mid_time} hardest={hardest}/>
						// <hr style={hr}/>