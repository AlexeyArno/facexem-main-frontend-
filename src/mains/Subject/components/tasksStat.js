import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'
import IconButton from 'material-ui/IconButton';
import ReactTooltip from 'react-tooltip'


export default class TasksStat extends Component{
	
	constructor(props) {
	    super(props);
	    this.state = {open: false};
	  }


	render(){

		var tasks = []
		for(var i=1;i<=32;i++){
			var rand = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			tasks.push({num: i, count: rand})
		}
		var smth1 = (tasks.length/7)-((tasks.length/7) % 1)
		if(((tasks.length/7) % 1)>0){
			smth1++
		}

		tasks = tasks.map(function(item, index){
			var numeric = item.count
			if (numeric<15){numeric = 15}
			var procent = numeric+'%'
			var background=''
			if(33>=numeric){
				background="linear-gradient(-45deg, #f94f4f, #ff4423 )"
			}else if(66>=numeric){
				background="linear-gradient(-45deg, #f7c531, #f94f4f)"
			}else {
				background="linear-gradient(-45deg, #83fc64, #f7c531, #f94f4f)"
			}
			var style={  
				maxWidth: procent,
			    color: "#fff",
			    margin: "10px",
			    textAlign: "left",
			    padding: "5px",
			    borderRadius: "20px",
			    background: background,
			    boxShadow: " rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px"
			}

			var tip = "Уровень подготовки номера - " + numeric + "%"
			var id = index+'task' 
			return(<div key={index} >
						<div style={style}  data-for={id} data-tip={tip}>{item.num}</div>
						<ReactTooltip place="bottom" type="dark" effect='solid' id={id} class="TooltipTasksTooltip"/>
					</div>)
		})

		var shells = new Array
		var nowNum=0		
		for (var i=1;i<=smth1;i++){
			var numbers=new Array
			var nownow = nowNum
			for (var n=nownow; n<=nownow+6; n++){
				if(tasks[n]){
					numbers.push(tasks[n])
					nowNum++} 
			}
			var numbers=<div className='staticTasks' key={Math.random()}
			 style={{padding: "10px", display: 'inline-block', width: '330px', verticalAlign: 'top'}}>{numbers}</div>
			shells.push(numbers)

		}

		var width=330*smth1
		return(	<div className="col-xs-12 col-sm-4 paper variants">
				<Paper className="preferencepaper variants">
					<div className="Up">Статистика заданий</div>
					<hr/>
					<div style={{overflow: "auto", height: 330}}>
						<div style={{width: width}}>
							{shells}
						</div>
					</div>
					 
				</Paper>
			</div>)

	}
}
