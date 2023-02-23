exports.weather_list = function(req, res){
  // list weather endpoints
  let weather = [
    {
      Temp:90.5,

      Unit: 'fahrenheit',
    
      Cloudy:false,
    
      PrecipitationChance:0
    }
  ]
    res.send(weather); 
}