import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Chart from 'chart.js';





  
export default class Preference extends Component{
	componentDidMount(){
		var labels = this.props.data[1]
		var data = this.props.data[0]
		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		    type: 'doughnut',
			options: {
		    },
		    animation:{
        		animateScale:true
    		},
		    data: {
		        labels: labels,
		        datasets: [{
		            label: 'Топ',
		            data: data,
		       
		                    backgroundColor: [
				                "#5DA5DA",
				                "#FAA43A",
				                "#60BD68",
				                "#F17CB0",
				                "#B276B2",
				            ]
				       }],
		    },
		    
		});

}

	render(){
		return(
			<div className="col-xs-12 col-sm-4 paper">
				<Paper className="preferencepaper">
					<div className="Up">Рейтинг предметов</div>
					<hr/>
					<canvas id="myChart" width="270px" height="250px" className="chart"></canvas>
				</Paper>
			</div>

			)
	}
}