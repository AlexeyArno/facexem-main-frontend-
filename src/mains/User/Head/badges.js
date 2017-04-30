import React, {Component} from 'react';

export default class Badges extends Component{
render(){
	const styleBadge={
		width: 20,
	}

	try {
	var badges = this.props.info.map(function(item, index){
				return(
					<div key={index} className="badge">
						<img src={item.image} style={styleBadge} data-for="exper" data-tip={item.tooltip}/>
					</div>
				)})
	} catch (err) {

	  var badges =[]

	}
	
	
	return(
		<div className="badgeDiv">
			<div>{badges}</div>
		</div>	
		);
}
};