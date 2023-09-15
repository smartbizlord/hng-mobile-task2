/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import type {Dispatch, PropsWithChildren, SetStateAction} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';
import { AppProvider } from './context/AppContext';

type SectionProps = PropsWithChildren<{
  title: string;
  githubActive: boolean;
  setGithubActive: Dispatch<SetStateAction<boolean>>
}>;






{/* <SafeAreaView style={backgroundStyle}>
        <View style={styles.safeareaView}>
          <TopBar title={githubActive ? "Github Profile" : "Slack Profile"} githubActive={githubActive} setGithubActive={setGithubActive}></TopBar>
          <View style={styles.main}>
            { !githubActive && (<>
              <Image style={styles.profileImage} source={require("./images/photo.jpg")} />
              <Text style={[styles.name, { color: isDarkMode ? Colors.white : Colors.black, }]}>Oladimeji Tongil Byungsa Amusa</Text>
              <TouchableOpacity onPress={() => { setGithubActive(past => true) }} style={styles.actionButton}><Text style={styles.buttonText}>Open Github</Text></TouchableOpacity>
            </>)}
            { githubActive && (<WebView source={{uri: "https://github.com/smartbizlord"}} style={styles.webView}/>)}
          </View>
        </View>
      </SafeAreaView> */}











const { height, width } = Dimensions.get("window")
const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AppProvider>
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen
            name='Home' 
            component={HomeScreen}  
            options={{title: "Profile"}}
          />
          <Stack.Screen
            name='Edit' 
            component={EditScreen}  
            options={{title: "Edit Profile"}}
          />
        </Stack.Navigator> 
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  safeareaView: {
    height,
    width,
    // justifyContent: "center",
    alignItems: "center"
  },
  webView: {
    height: height * 0.9,
    width: width * 0.95,
    marginHorizontal: "auto",
  },
  sectionContainer: {
    height: height * 0.1,
    width: "100%",
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderBottomColor: "gray",
    borderBottomWidth: 1
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backButtonWrapper: {
    position: "absolute",
    left: 24,
    height: height * 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    // backgroundColor: "gray",
    height: "auto",
    padding: 12,
    borderRadius: 32,
  },
  backImage: {
    height: 40,
    width: 40,
    borderRadius: 9999,
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.9,
    // backgroundColor: "red",
    width,
  },
  name: {
    width: "50%",
    fontSize: 24,
    fontWeight: "500",
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
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 70
  },
});

export default App;
