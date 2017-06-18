import React from 'react';

export default class Weather extends React.Component{

	render(){

		if(Object.getOwnPropertyNames(this.props.weather).length == 0){
			return(<div></div>)
		}

		return (
			<div>
				<h3>{this.props.weather.current_observation.display_location.full}</h3>
				<h3>{this.props.weather.current_observation.weather}</h3>
				<img src={this.props.weather.current_observation.icon_url} />
				<h1>{this.props.weather.current_observation.temperature_string}</h1>
				<ul className="list-group">
					<li className="list-group-item"><strong>Relative Humidity: </strong>{this.props.weather.current_observation.relative_humidity}</li>
					<li className="list-group-item"><strong>Wind: </strong>{this.props.weather.current_observation.wind_string}</li>
					<li className="list-group-item"><strong>Dewpoint: </strong>{this.props.weather.current_observation.dewpoint_string}</li>
				</ul>
			</div>
		)
	}
}