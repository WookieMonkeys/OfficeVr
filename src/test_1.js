import React from "react";
import { asset, StyleSheet, Text, View, VrButton, Pano } from "react-vr";

export default class OfficeTour extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("frontDesk.jpeg")} />
        <VrButton
          onClick={() => {
            this.props.history.push("./test_1");
          }}
        >
          <Text
            style={{
              backgroundColor: "red",
              fontSize: 0.4,
              fontWeight: "400",
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center",
              transform: [{ translate: [0, 0, -3] }]
            }}
          >
            Decipher: Front Desk
          </Text>
        </VrButton>
      </View>
    );
  }
}
