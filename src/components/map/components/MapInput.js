import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { connect } from "react-redux";

class MapInput extends React.Component {

    render() {
        return (

            <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2} // minimum length of text to search
                autoFocus={true}
                returnKeyType={'search'} // Can be left out for default return key 
                listViewDisplayed={false}    // true/false/undefined
                fetchDetails={true}
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    this.props.notifyChange(details);
                }
                }

                query={{
                    key:this.props.lang.google_API_KEY,
                    language: 'en'
                }}
                currentLocation={true}
                currentLocationLabel='Current Location'
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={300}
            />
        );
    }
}
// export default MapInput;
const mapStateToProps = state => {
    return {
      lang: state.setActiveLanguage.data,
  
    };
  };
  
  
  const mapDispatchToProps = dispatch => {
    return {
      currentDis: dispatch,
  
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(MapInput);
  