import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Dimensions, } from 'react-native'
import React, { useContext, useState, } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { appContext } from '../context/AppContext'



interface MyProps {
    navigation: any,
    route: any
}



const { height, width } = Dimensions.get("window")


const EditScreen = ({navigation, route}: MyProps) => {
    const { fullName, slackUserName, GitHubHandle, bio, setFullName, setSlackUserName, setGitHubHandle, setBio, darkMode, } = useContext(appContext)

    
    const [newFullName, setNewFullName] = useState(fullName)
    const [newSlackUserName, setNewSlackUserName] = useState(slackUserName)
    const [newGitHubHandle, setNewGitHubHandle] = useState(GitHubHandle)
    const [newBio, setNewBio] = useState(bio)


    const updateChanges = () => {
        if(newFullName == "" || newSlackUserName == "" || newGitHubHandle == "" || newBio == "") return alert("No field should be empty");
        setFullName(()=> newFullName)
        setSlackUserName(()=> newSlackUserName)
        setGitHubHandle(()=> newGitHubHandle)
        setBio(()=> newBio)
        navigation.navigate("Home")
    }



  return (
    <View style={[styles.safeareaView, { backgroundColor: !darkMode ? Colors.lighter : Colors.darker, }]}>
      {/* <Text style={[styles.heading, { color: darkMode ? Colors.lighter : Colors.darker, }]}>Edit Details</Text> */}
      <View style={styles.textInputFieldContainer}>
        <Text style={[styles.whiteText, { color: darkMode ? Colors.lighter : Colors.darker, }]}>{darkMode && "Edit Full Name"}</Text>
        <KeyboardAvoidingView>
            <TextInput style={styles.textInputField} value={newFullName} placeholder='e.g Michael Jackson' onChangeText={(value)=>{ setNewFullName(()=> value) }}></TextInput>
        </KeyboardAvoidingView>
        <Text style={[styles.whiteText, { color: darkMode ? Colors.lighter : Colors.darker, }]}>Edit Slack Username</Text>
        <KeyboardAvoidingView>
            <TextInput style={styles.textInputField} value={newSlackUserName} placeholder='e.g Michael Jackson' onChangeText={(value)=>{ setNewSlackUserName(()=> value) }}></TextInput>
        </KeyboardAvoidingView>
        <Text style={[styles.whiteText, { color: darkMode ? Colors.lighter : Colors.darker, }]}>Edit GitHub Handle</Text>
        <KeyboardAvoidingView>
            <TextInput style={styles.textInputField} value={newGitHubHandle} placeholder='e.g elonmusk' onChangeText={(value)=>{ setNewGitHubHandle(()=> value) }}></TextInput>
        </KeyboardAvoidingView>
        <Text style={[styles.whiteText, { color: darkMode ? Colors.lighter : Colors.darker, }]}>Edit Bio</Text>
        <KeyboardAvoidingView style={{height: 100}}>
            <TextInput style={[styles.textInputField, {height: 100}]} value={newBio} placeholder='Short description' onChangeText={(value)=>{ setNewBio(()=> value) }} multiline={true}></TextInput>
        </KeyboardAvoidingView>
      </View>
      <TouchableOpacity style={styles.buttonWrapper} onPress={updateChanges}>
        <Text style={styles.buttonText}>Update Changes</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EditScreen

const styles = StyleSheet.create({
    whiteText: {
        color: "white",
        fontSize: 20,
        marginBottom: 10
    },
    safeareaView: {
        backgroundColor: "blue",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 15
    },
    heading: {
        fontSize: 28,
        fontWeight: "500"
    },
    textInputFieldContainer: {
        width: width,
        alignItems: "center"
    },
    textInputField: {
        backgroundColor: "white",
        width: width / 1.5,
        marginBottom: 15,
        borderRadius: 16,
        borderWidth: 1,
        paddingHorizontal: 15
    },
    buttonWrapper: {
        marginTop: 20,
        backgroundColor: "green",
        padding: 12,
        borderRadius: 16,
    },
    buttonText: {
        fontSize: 20,
        color: "white"
    }
})