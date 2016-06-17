export default class GeoLocationProps {
  setProps(navigator, props) {
    return {
      position: props.currentLocation
    }
  }
}