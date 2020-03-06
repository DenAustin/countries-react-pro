import React, { Component } from 'react'

export class Main extends Component {
  constructor (){
    super();
    this.state = {
      countries: [],
      countriesWeather: [],
      searchTerm: ""
  }
}

  componentDidMount(){
    const url = "https://restcountries.eu/rest/v2/all"
    
    fetch(url)
      .then(response => response.json())
      .then(countriesApi =>{
        this.setState({
          countries: countriesApi
        })
  })
  }
  
  onChange = e => this.setState({searchTerm: e.target.value})

  render() {
    const filterCitiesByStartLeter = this.state.countries.filter((country) => country.capital.toLowerCase().startsWith(this.state.searchTerm.toLocaleLowerCase()))
  
    const countriesName = filterCitiesByStartLeter.map (country => (<div className = "countryDiv" key={country.name}>
        <img src={country.flag} alt="flag"></img>
        <div>{country.name}</div>
        <h1>{country.capital}</h1>
      </div>))
    return (
      <div>
        <div className="gllobe">
          <h1 className="header">World Countries Data</h1>
          < h3 className="current-total">World cities weather condition</h3>
          <form>
            <input
             type="text" placeholder="Enter city name" className="input-field" onChange={this.onChange}
            />
          </form>
          <div className="buttons">
            <button className="name">Weather</button>
          </div>
        </div>
          <div className="countries-container">
          {countriesName}
          </div>
      </div>
    )
  }
}
export default Main
