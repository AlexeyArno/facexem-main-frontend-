import React, { Component, 	PropTypes } from 'react';
import DynamicMenu from './content-menu-create/dynamic-menu.js'
import Divider from 'material-ui/Divider';

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
import ActionSettings from 'material-ui/svg-icons/action/settings'

export default class MenuContent extends Component{


	
	clickOnItem=(name)=>{
					this.props.close()
					if(name == 'author'){
						window.location.pathname = '/author'
						return 0 
					}
					this.context.router.push({
					  pathname: '/'+name
					});
	}

	redirect=(link)=>{
		document.location.href = link;
	}

	// openachievs=()=>{
	// 	this.props.achievs()
	// }

	settings=()=>{
		this.props.settings()
	}
	issue=()=>{
		this.props.issue()
	}



	getAdditionalItems = ()=>{
		var rights = this.props.data[0].roots
		var color = '#b7b7b7'
		return(<DynamicMenu roots={rights} clickOnItem={this.clickOnItem} color={color}/>)

	}

	getSubjects = ()=>{
		var color = '#b7b7b7'
		return(<Subjects subjects={this.props.subjects} clickOnItem={this.clickOnItem} color ={color}/>)
	}




render(){
	var addItems = this.getAdditionalItems()
	var subjects = this.getSubjects()
	const icon_style={
	}
	var color = '#b7b7b7'
	return(<div>
			<MenuItem primaryText="Моя Страница" onClick={()=>this.clickOnItem('mypage')} leftIcon={<ActionHome style={icon_style} color={color}/>}/>
			<MenuItem onClick={()=>this.settings()} primaryText="Настройки" leftIcon={<ActionSettings style={icon_style} color={color}/>}/>
			{addItems}
			{subjects}
			<Divider className="DividerMenu" />
			<MenuItem onClick={()=>this.clickOnItem('mypage')} primaryText="Помощь" leftIcon={<Help style={icon_style} color={color}/>}/>
			<MenuItem onClick={()=>this.redirect('https://vk.com/facexam_ege')} primaryText="Сообщество" leftIcon={<ActionQuestionAnswer style={icon_style} color={color}/>}/>
			<MenuItem onClick={()=>this.clickOnItem('https://facexam.ru')} primaryText="О нас" leftIcon={<Streetview style={icon_style} color={color}/>}/>
			<MenuItem onClick={()=>this.issue()} primaryText="Ошибка?" leftIcon={<Whatshot style={icon_style} color={color}/>}/>
		</div>

		

		   )

}



}


MenuContent.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}

			// <MenuItem onClick={()=>this.openachievs()} primaryText="Достижения" leftIcon={<ActionStars style={icon_style} color={color}/>}/>
