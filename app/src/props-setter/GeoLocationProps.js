export default class GeoLocationProps {
  setProps(navigator, routes, props) {
    return {
      position: props.currentLocation
    }
  }
}