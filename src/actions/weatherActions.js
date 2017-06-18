import axios from 'axios';

export function fetchWeather(location){

	return function(dispatch){

		axios.get('http://api.wunderground.com/api/c0f19019b31c2931/conditions/q/'+location.state+'/'+jsUcfirst(location.city.toLowerCase())+'.json')
			.then((response) => {

				dispatch({type:'FETCH_WEATHER_FULFILLED', payload:response.data})
			})
			.catch((err) => {

				dispatch({type:'FETCH_WEATHER_REJECTED', payload:err})	
			})
	}

	function jsUcfirst(string) 
	{
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}