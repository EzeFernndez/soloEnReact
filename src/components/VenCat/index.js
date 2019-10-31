// Dependencies
import React, { Component } from 'react';
import './InterfazVenCat.css';

class VenCat extends Component {
  componentDidMount() {      
    fetch('http://localhost:4000/VenCat')
      .then(function (res) { 
        console.log(res);
      })
  }
  render() {
    return (
      <div className="VenCat">
        <h1 style={{textAlign: 'center'}} class = "titulo" >Ventas x Categoría</h1>
      </div>
    );
  }
}

export default VenCat;