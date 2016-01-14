/* global google */

var React = require('react')
var Geosuggest = require('./Geosuggest'); // eslint-disable-line

var GeoApp = React.createClass({
  render: function() {
    var fixtures = [
      {label: 'New York', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Rio', location: {lat: -22.066452, lng: -42.9232368}},
      {label: 'Tokyo', location: {lat: 35.673343, lng: 139.710388}}
    ]

    return (
        <Geosuggest
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          radius="20"
          />
    )
  },

  onFocus: function() {
    console.log('onFocus')
  },

  onBlur: function() {
    console.log('onBlur')
  },

  onChange: function(value) {
    console.log('input changes to :' + value)
  },

  onSuggestSelect: function(suggest) {
    console.log(suggest.label)
  },
})


module.exports = GeoApp
