import React from "react";
import { connect } from "react-redux";
import { Text } from "react-native";

class CustomTitle extends React.Component {

  render() {
    return (
      <Text style={{ alignSelf: "center", color: this.props.tintColor }}>
        {this.renderTabRoutName(this.props.states.routeName)}
      </Text>
    );
  }

  renderTabRoutName = name => {
    switch (name) {
      case "Home":
        return this.props.lang.home;
      case "Feed":
        return this.props.lang.feed;
      case "Message":
        return this.props.lang.message;
      case "Cart":
        return this.props.lang.cart;
      case "Profile":
        return this.props.lang.profile;
      default:
        return "";
    }
  };
}

function mapStateToProps(state) {
  return { lang: state.setActiveLanguage.data };
}

export default connect(mapStateToProps)(CustomTitle);
