'use client'
import React, { Context, Dispatch, SetStateAction, createContext, useEffect, useState } from 'react'
import { useColorScheme, } from 'react-native'


export interface AppProvProps {
    children: any,
}



export interface AppProvData {
    fullName: string,
    setFullName: Dispatch<SetStateAction<string>>,
    slackUserName: string,
    setSlackUserName: Dispatch<SetStateAction<string>>,
    GitHubHandle: string,
    setGitHubHandle: Dispatch<SetStateAction<string>>,
    bio: string,
    setBio: Dispatch<SetStateAction<string>>,
    darkMode: boolean,
}


export const appContext = createContext<AppProvData>({
    fullName: "",
    setFullName() {},
    slackUserName: "",
    setSlackUserName() {},
    GitHubHandle: "",
    setGitHubHandle() {},
    bio: "",
    setBio() {},
    darkMode: false,
})



export const AppProvider = ({ children }: AppProvProps) => {

    const [fullName, setFullName] = useState("Oladimeji Tongil Byungsa Amusa")
    const [slackUserName, setSlackUserName] = useState("Oladimeji Tongil Byungsa Amusa")
    const [GitHubHandle, setGitHubHandle] = useState("smartbizlord")
    const [bio, setBio] = useState("I build mobile and web apps")
    const [darkMode, setDarkMode] = useState(useColorScheme() == "dark")
    let colorScheme = useColorScheme()





    useEffect(() => {
    //   
    
      return () => {
        setDarkMode((prev) => !prev)
      }
    }, [colorScheme])
    

    

    



    


    return (
        <appContext.Provider value={{
          fullName,
          setFullName,
          slackUserName,
          setSlackUserName,
          GitHubHandle,
          setGitHubHandle,
          bio,
          setBio,
          darkMode,
        }}>{children}</appContext.Provider>
      )
}