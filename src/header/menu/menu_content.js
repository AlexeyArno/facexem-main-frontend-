import React, { Component, 	PropTypes } from 'react';
import DynamicMenu from './content-menu-create/dynamic-menu.js'
import Divider from 'material-ui/Divider';
import {Router, Route} from 'react-router';

// SELF MODULES
import Subjects from './content-menu-create/subjects.js'
import MenuItem from 'material-ui/MenuItem';


// ICONS
import Help from 'material-ui/svg-icons/action/help';
import ActionQuestionAnswer from 'material-ui/svg-icons/action/question-answer';
import Streetview from 'material-ui/svg-icons/maps/streetview';
import Whatshot from 'material-ui/svg-icons/social/whatshot';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionStars 	from 'material-ui/svg-icons/action/stars'

export default class MenuContent extends Component{


	
	clickOnItem=(name)=>{
					this.props.close()
					this.context.router.push({
					  pathname: '/'+name
					});
	}

	openachievs=()=>{
		this.props.achievs()
	}


	getAdditionalItems = ()=>{
		var rights = this.props.data[0].roots
		return(<DynamicMenu roots={rights} clickOnItem={this.clickOnItem}/>)

	}

	getSubjects = ()=>{
		return(<Subjects subjects={this.props.subjects} clickOnItem={this.clickOnItem}/>)
	}




render(){
	var addItems = this.getAdditionalItems()
	var subjects = this.getSubjects()
			
	return(<div>
			<MenuItem primaryText="Моя Страница" onClick={()=>this.clickOnItem('mypage')} leftIcon={<ActionHome />}/>
			<MenuItem onClick={()=>this.openachievs()} primaryText="Достижения" leftIcon={<ActionStars/>}/>
			{addItems}
			{subjects}
			<Divider className="DividerMenu" />
			<MenuItem onClick={()=>this.clickOnItem('mypage')} primaryText="Помощь" leftIcon={<Help />}/>
			<MenuItem onClick={()=>this.clickOnItem('mypage')} primaryText="Сообщество" leftIcon={<ActionQuestionAnswer />}/>
			<MenuItem onClick={()=>this.clickOnItem('mypage')} primaryText="О нас" leftIcon={<Streetview />}/>
			<MenuItem onClick={()=>this.clickOnItem('mypage')} primaryText="Ошибка?" leftIcon={<Whatshot />}/>
		</div>

		

		   )

}



}


MenuContent.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}