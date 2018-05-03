import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  apiKey = '64d3560d0ddd4c24';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  }
    getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json').map(res => res.json());
  }
  

}
