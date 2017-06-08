import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Chart from 'chart.js';





  
export default class Statisc extends Component{
	componentDidMount(){
		var labels = this.props.data.dates
		var data = this.props.data.values
		var ctx = document.getElementById("myChart2");
		var myChart = new Chart(ctx, {
		    type: 'line',
			options: {
				responsive: true,
				maintainAspectRatio: false,
				legend:{
        	 		display: false
       				 },
       			tooltips: {
		        	enabled: true
		        },
		        line:{
		        	borderWidth: 1
		        },
				scales: {
					 xAxes: [{
			                display: false
			            }],
			        yAxes: [{
			            display: false,
			            ticks: {
			                suggestedMin: 0,
			                 // stepSize : 1,    // minimum will be 0, unless there is a lower value.
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
		            lineTension: 0.1,
		            backgroundColor: "rgba(33, 150, 243, 0.3)",
		            borderColor: "rgba(33, 150, 243, 0.3)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            pointBorderColor: "rgb(33, 150, 243)",
		            pointBackgroundColor: "#fff",
		            pointBorderWidth: 1,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgb(33, 150, 243)",
            		pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 1,
		            pointRadius: 1,
		            pointHitRadius: 10,
		            spanGaps: false,
				       }],
		    },
		    
		});


}

	render(){
		var style={
			width: 'auto',
			maxWidth: 733,
			position: 'absolute',
			bottom: 0
		}
		return(
			<div className="col-xs-12 col-sm-8 paper activity">
				<Paper className="preferencepaper activity" >
					<div className="Up">Активность</div>
					<hr/>
					<canvas id="myChart2" style={style}/>
				</Paper>
			</div>

			)
	}
}