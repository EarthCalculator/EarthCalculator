import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions, View } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;
import { NeuButton } from "neumorphism-ui";
const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 30
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#e3e1df",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
    shadowColor: '#ffffff',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 4
  },
  secondShadow: {
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6"
  },
  buttonAccent: {
    backgroundColor: "#0492ff"
  }
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <View style={styles.secondShadow}>
        <Text style={textStyles}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
