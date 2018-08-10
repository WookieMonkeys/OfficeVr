import React from "react";
import { asset, StyleSheet, Text, View, VrButton, Pano } from "react-vr";

export default class OfficeTour extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("stairwell.jpeg")} />
        <VrButton
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          <Text
            style={{
              backgroundColor: "#00aB2a" ,
              fontSize: 0.4,
              fontWeight: "400",
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center",
              transform: [{ translate: [0, 0, -6] }]
            }}
          >
            Decipher: Stairwell
          </Text>
        </VrButton>
      </View>
    );
  }
}
