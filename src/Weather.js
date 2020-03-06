
import React, { Component } from 'react'


const apiKey = "ef37b26329d2817b6539332e6376ba50 "

export class Weather extends Component {


   constructor (){
      super();
      this.state = {
        countriesApi: [],
        locaction :[],
        current: [],
        city: "Helsinki"
        
    }
  }
  
   componentDidMount(){
      const url =`http://api.weatherstack.com/currentaccess_key=ef37b26329d2817b6539332e6376ba50&query=${this.state.city}` 
      fetch(url)
        .then(response => response.json())
        .then(countriesApi =>{
           const {type, location, current, request} = countriesApi
           console.log(location)
          this.setState({
            countries: countriesApi,
            
            
          })
    })
    }



   render() {
      return (
         <div>
            Hope
         </div>
      )
   }
}

export default Weather
