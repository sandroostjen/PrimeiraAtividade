import React, { Component } from "react";
import { Text, Stylesheet } from "react-native";
const componentsScreen = () => {
    return <text style={styles.text.textStyle}>"Bem vindo ao meu APP</text>
};
const styles = Stylesheet.creat({

textStyle:{
fontSize:30

}
});

export default componentsScreen;