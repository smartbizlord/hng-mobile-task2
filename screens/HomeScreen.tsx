import { StyleSheet, Text, View, TouchableOpacity, useColorScheme, } from 'react-native'
import React, { useState, useContext, } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { appContext } from '../context/AppContext'

interface MyProps {
    navigation: any,
    route: any
}

const HomeScreen = ({navigation, route}: MyProps) => {
    const { fullName, slackUserName, GitHubHandle, bio, } = useContext(appContext)
    const isDarkMode = useColorScheme() === 'dark';
    const alerter = () => {
        navigation.navigate("Edit")
    }
  return (
    <View style={[styles.safeareaView, { backgroundColor: !isDarkMode ? Colors.lighter : Colors.darker, }]}>
        <View>
            <Text style={[styles.subHeading, { color: isDarkMode ? Colors.white : Colors.black, }]}>Full Name</Text>
            <Text style={[styles.content, { color: isDarkMode ? Colors.white : Colors.black, }]}>{fullName}</Text>
        </View>
        <View>
            <Text style={[styles.subHeading, { color: isDarkMode ? Colors.white : Colors.black, }]}>Slack Username</Text>
            <Text style={[styles.content, { color: isDarkMode ? Colors.white : Colors.black, }]}>{slackUserName}</Text>
        </View>
        <View>
            <Text style={[styles.subHeading, { color: isDarkMode ? Colors.white : Colors.black, }]}>GitHub Handle</Text>
            <Text style={[styles.content, { color: isDarkMode ? Colors.white : Colors.black, }]}>{GitHubHandle}</Text>
        </View>
        <View style={styles.viewGroup}>
            <Text style={[styles.subHeading, { color: isDarkMode ? Colors.white : Colors.black, }]}>Bio</Text>
            <Text style={[styles.content, { color: isDarkMode ? Colors.white : Colors.black, textAlign: "left" }]}>{bio}</Text>
        </View>
      <TouchableOpacity onPress={alerter} style={styles.actionButton}><Text style={styles.buttonText}>Edit Details</Text></TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    safeareaView: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 15
      },
    viewGroup: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
      },
      subHeading: {
        color: Colors.black,
        fontSize: 24,
        fontWeight: "500",
        textAlign: "center",
      },
      content: {
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
        marginTop: 5,
      },
      buttonText: {
        fontSize: 20,
      },
      actionButton: {
        marginTop: 50,
        backgroundColor: "gray",
        padding: 12,
        borderRadius: 16,
      },
})