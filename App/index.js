import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";
import calculator, { initialState } from "./util/calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "flex-end"
  },
  value: {
    color: "#383736",
    fontSize: 80,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  },
    text: {
      color: "#383736",
      fontSize: 25,
      textAlign: "right",
      marginRight: 20,
      marginBottom: 10
    },
    grey: {
      color: "#383736",
    },
    lighterGrey: {
      color: "#383736",
    },
    lightesGrey: {
      color: "#383736",
    }
});

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };
  sampleData = [
    "There are 0 unicorns left", 
    "72% of the world is water", 
    "90% of all life is at risk of blah"
  ];

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.text}>{this.sampleData[2]}</Text>
          <Text style={styles.text}>{this.sampleData[1]}</Text>
          <Text style={styles.text}>{this.sampleData[0]}</Text>
          <Text style={styles.value}>
            {parseFloat(this.state.displayValue).toLocaleString()}
          </Text>

          <Row>
            <Button
              text="AC"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap("posneg")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => this.handleTap("number", 0)}
            />
            <Button text="." onPress={() => this.handleTap("number", ".")} />
            <Button
              text="="
              theme="accent"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
