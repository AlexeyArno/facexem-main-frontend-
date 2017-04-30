import React, { Component, PropTypes } from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ActionBook from 'material-ui/svg-icons/action/book';
import ActionVerifiedUser from 'material-ui/svg-icons/action/verified-user';
import ActionDescription from 'material-ui/svg-icons/action/description';

export default class Lection extends Component{
	 constructor(props) {
			    super(props);
			    this.state = { finished: false};
			    this.state = { stepIndex: this.props.active};
	 }
  handleNext = (step) => {
  	var path = window.location.pathname
  			this.context.router.push({
			 pathname: path+step
		});
  }

renderStepActions(step) {
    const stepIndex = this.state.stepIndex
    var color = this.props.color
    return (
      <div style={{margin: '12px 0',}}>
        <RaisedButton
          backgroundColor= {color}
          label='Перейти'
          disableTouchRipple={true}
          disableFocusRipple={true}
          onClick={()=>this.handleNext(step)}
          labelColor='#fff'
          style={{marginRight: 12, }}
        />
      </div>
    );
  }

	transliterate=(text, engToRus)=>{
			var
				rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),
				eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g)
			;
				var x;
				for(x = 0; x < rus.length; x++) {
					text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
					text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());	
				}
				return text;
			}


	render(){
		var id = this.transliterate(this.props.name)
		var theme = this.props.data.map(function(item, index){
			var now = item.number
			var theme = item.theme
			var icon ;
			var color;
			if(item.visited)
			{
				color=this.props.color
			}
			else
			{
				color='#c9cbcc'
			}
			if(item.active){
				color=this.props.color
			}
			switch(item.type){
				case 'lection':
					icon = <ActionBook color={color}/>
					break;
				case 'test':
					icon = <ActionDescription color={color}/>
					break;
			}
			if(item.done)
			{
				icon=<ActionVerifiedUser color={this.props.color}/>
			}

			var stepIndex = "stepIndex" + theme +':'+ now
			return(
					<Step key={index} completed={item.visited}>
						 <StepButton onClick={() => this.setState({stepIndex: now})} icon={icon}>
						     {item.name}
						  </StepButton>
						   <StepContent>
						              <p>
						                {item.description}
						              </p>
						              {this.renderStepActions(item.link)}
						   </StepContent>
					</Step>)
						}.bind(this))
		
		return(	<div  id={id} className="themeOfLections">
				<div style={{maxWidth: '95%', margin: 'auto', height: '100%'}}>
					<div className='nameoftheme' style={{color: this.props.color}}>{this.props.name}</div>
					<hr/>
       				<Stepper activeStep={Number(this.state.stepIndex)} orientation="vertical" linear={false} style={{marginBottom: '20px'}}>
       					{theme}
       				 </Stepper>
   				   </div>
	</div>)

	}
}
Lection.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}