import React, { Component } from 'react';
import MathJax from 'react-mathjax'


export default class FormulWorkWindow extends Component{


	editSmth=(index)=>{
		this.props.editSmth(index)
	}
render(){
	var text = this.props.data
	return(<div >
				<MathJax.Context>
					<MathJax.Node>
						{text}
					</MathJax.Node>
				</MathJax.Context>
			</div>

		

		   )

}



}