import React, { PureComponent } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';

class LocationItem extends PureComponent {
  _handlePress = async () => {
    const res = await this.props.fetchDetails(this.props.place_id)
    const placeSelected = await this.props.description
    const clickedStatus = await true
    console.log("CLICADO")
    this.props.handlePlaceChange(placeSelected, clickedStatus)
    this.props.handleSelectedPlaceChange()
    //await this.props.handleClicked(true)

    return placeSelected;
  }

  render() {
    return (
      <TouchableOpacity style={styles.root} onPress={this._handlePress}>
        <Text>{this.props.description}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center'
  }
})

export default LocationItem;