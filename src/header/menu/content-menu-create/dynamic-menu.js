import React, { Component } from 'react';
import AdminMenu from './dynamic-menu-content/admin.js';
import PremiumMenu from './dynamic-menu-content/premium.js';
import MenuItem from 'material-ui/MenuItem';
import WriterMenu from './dynamic-menu-content/writer.js';
import AvEqualizer from 'material-ui/svg-icons/av/equalizer'
import Divider from 'material-ui/Divider';


export default class DynamicMenu extends Component{

	click=(type)=>{
		this.props.clickOnItem(type)
	}

	render(){
		var roots = String(this.props.roots);
		 switch (roots){
		 	case 'admin': 
		 		return(<div>
		 					<AdminMenu clickOnItem={this.click} color={this.props.color}/>
		 					<Divider className="DividerMenu"/>
		 				</div> )
		 		break; 
		 	case 'premium': 
		 		return(<div> 
				 			<PremiumMenu clickOnItem={this.click} color={this.props.color}/>
				 			<Divider className="DividerMenu"/>
				 		</div> )
		 		break; 
		 	case 'author': 
		 		return(<div> 
				 			<WriterMenu clickOnItem={this.click} color={this.props.color}/>
				 			<Divider className="DividerMenu"/>
				 		</div> )
		 		break;
		 	default: 
		 		return(<div> 
				 			<Divider className="DividerMenu"/>
				 		</div> ) 
		 }
		 

	}
}
					// <Smth/>
						// <Menu clickOnItem={this.click}/>
