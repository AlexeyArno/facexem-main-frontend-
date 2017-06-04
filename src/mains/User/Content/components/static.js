import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Chart from 'chart.js';





  
export default class Statisc extends Component{
	componentDidMount(){
		var labels = this.props.data[1]
		var data = this.props.data[0]
		var ctx = document.getElementById("myChart2");
		var myChart = new Chart(ctx, {
		    type: 'line',
			options: {
				responsive: true,
				legend:{
        	 		display: false
       				 },
						scales: {
		        yAxes: [{
		            display: true,
		            ticks: {
		                suggestedMin: 0,
		                 stepSize : 1,    // minimum will be 0, unless there is a lower value.
		                // OR //
		                beginAtZero: true   // minimum value will be 0.
		            }
		        }]
		    }
		    },
		    animation:{
        		animateScale:true
    		},
		    data: {
		    	labels: labels,
		        datasets: [{
		        	label: "Задания",
		            data: data,
		            fill: true,
		            lineTension: 1,
		            backgroundColor: "rgba(75,192,192,0.4)",
		            borderColor: "rgba(75,192,192,1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            pointBorderColor: "rgba(75,192,192,1)",
		            pointBackgroundColor: "#fff",
		            pointBorderWidth: 1,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 1,
		            pointHitRadius: 10,
				       }],
		    },
		    
		});


}

	render(){
		return(
			<div className="col-xs-12 col-sm-8 paper activity">
				<Paper className="preferencepaper activity" >
					<div className="Up">Активность</div>
					<hr/>
					<canvas id="myChart2" width="450px" height="220px"></canvas>
				</Paper>
			</div>

			)
	}
}