import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "../screens/Style";
import { BatLogo } from "../components/BatLogo/BatLogo";
import { BatTextInput } from "../components/BatTextInput/BatTextInput";
import { BatButton } from "../components/BatButton/BatButton";

export default function Home() {
    return(

        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
            <View style={styles.inputContainer}>
              
                <BatButton/>
            </View>

            <Text>Home works!!</Text>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="light" />
      </View>
    );
}
