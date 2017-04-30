import React, { Component } from 'react';

import ReactTooltip from 'react-tooltip'

export default class TooltipWorkWindow extends Component{


render(){
	var item = this.props.item
	var index = this.props.index
	var content1=item.word;
	var content2=item.content
	var style=item.style;
	var id = 'content'+index
	var idTip = 'tip'+index
	
	return(<div>
			<u  data-for={idTip} id={id} data-tip={content2} 
			style={{color:'rgb(164, 198, 57)', cursor: 'pointer'}}>
				{content1}
			</u>
			<ReactTooltip place="top" type="dark" effect="float" id={idTip} className='tooltips'/>
		   </div>)

}



}