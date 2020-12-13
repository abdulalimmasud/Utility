import React from "react";
import { Text, StyleSheet } from "react-native";
import Container from "../../common/Container";
import Colors from "../../utils/colors";

const Monitoring = props => {
  return (
    <Container style={styles.container}>
      <Text>Hello, Welcome to Monitoring</Text>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Monitoring;
