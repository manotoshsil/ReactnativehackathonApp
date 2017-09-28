import React, {Component} from 'react'
import {
  ScrollView,
  TouchableHighlight,
  View,
  StyleSheet,
  Platform,
  Image
} from 'react-native'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'

import Icon from 'react-native-vector-icons/MaterialIcons'
import MapView from 'react-native-maps';

// import {   Text,   Button,   Grid,   Col,   Row } from
// 'react-native-elements'

let styles = {}

const log = () => {
  console.log('hello!')
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          'longitude': 12.971500,
          'latitude': 77.580300,
          'latitudeDelta': 0.0922,
          'longitudeDelta': 0.0421,
          animateDrop: true,
          uniqueId: u,
          type: 'e'
        }, {
          'longitude': 12.975500,
          'latitude': 77.580300,
          'latitudeDelta': 0.0922,
          'longitudeDelta': 0.0421,
          animateDrop: true,
          uniqueId: u,
          type: 'w'
        }
      ]
    }
  }

  showEventTimeline(meterId) {}
  render() {
    const {toggleSideMenu} = this.props
    var markers = this.state.markers || []
    return (
      <MapView
        style={styles.map}
        initialRegion={{
        latitude: 12.972442,
        longitude: 77.580643,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}>
        {this
          .state
          .markers
          .map(marker => (
            <MapView.Marker
              key={marker.uniqueId}
              coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude
            }}
              title="This is a title"
              description="This is a description"
              image=
              {marker.type == 'e'? require('../images/e.png'): require('../images/w.png')}>
              <MapView.Callout
                style={styles.bubble}
                onPress={this.showEventTimeline(marker.uniqueId)}>
                <Text>{marker.uniqueId}</Text>
              </MapView.Callout>
            </MapView.Marker>
          ))}
      </MapView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  // Callout bubble
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
    elevation: 1
  }
})

export default Home
