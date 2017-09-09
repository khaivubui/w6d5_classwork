import React from 'react';

class Weather extends React.Component {
  constructor () {
    super();
    this.state = {
      city: 'loading...',
      temp: 'loading...'
    };
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition((pos) => {
      // console.log(pos);
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      // console.log(lat);
      // console.log(long);

      const request = new XMLHttpRequest();
      request.open(
        'GET',
        `http://api.openweathermap.org/data/2.5/` +
        `find?lat=${lat}&lon=${long}` +
        `&APPID=7f05b3609477cf0d9f585ed4cc16965c` +
        `&units=imperial`
      );
      request.onload = () => {
        const res = JSON.parse(request.responseText);
        // console.log(res);
        this.setState({
          city: res.list[0].name,
          temp: `${res.list[0].main.temp} \xB0F`
        });
      };

      request.onerror = () => {
        console.log('ERORRRRRERERERERERER');
      };

      request.send();
    });
  }

  render () {
    return (
      <div className='weather widget'>
        <div>
          City:<br/>
          Temp:
        </div>
        <div>
          {this.state.city}<br/>
          {this.state.temp}
        </div>
      </div>
    );
  }
}

export default Weather;
