import React, { Component } from 'react';


export default class Table extends Component{
constructor(props) {
		    super(props);
		    this.state = {
		    	open: false,
		    	// content: this.props.data.content
		    	table: [],
		    	ids: []
		    };
		}



	




		getTable=(data)=>{
			const style={
				verticalAlign: 'top',
				border: "1px solid black",
				paddingRight: 5
			}
			var ids=[]
			var body = data.map(function(item, index){
				var row = item.map(function(item1, index1){
					var id = this.props.data.id+'head'+index+index1
					ids.push(id)
					return <td key={index+index1} style={style}>
								 <p>{item1}</p>
							</td>
				}.bind(this)) 
				return <tr key={index}>{row}</tr>
			}.bind(this))
			var table = <table style={{width: "100%", borderCollapse: "collapse"}}>
						 <tbody >
							  {body}
							 </tbody>
					</table> 
			return {table, ids}
		}
	

	render(){
		var name = 'col-md-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6'
		}
		

		// console.log(this.props.data.content)
		var table = this.getTable(this.props.data.content)
		table = table.table
		return(<div className={name}>
	
					{table}
				</div>




					)

	}



}