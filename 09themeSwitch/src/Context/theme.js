// pehla step 
// waha jab UCP me jo var and mtd de rahe the woh yaha create context ke andar de rahe hai.
//2nd method mein provider bhi same file mein
//app / main mein jaake theme provider se wrap karo aur value ={} me batao kis kis chiz ka access hai
//usetheme ek custom hook hai.. sirf usetheme import karo baaki file mein , aur sab chiz mil jaayegi..
//


import { createContext , useContext } from "react"; 

export const ThemeContext =createContext({

  themeMode: 'light',
  darkTheme: () =>{},
  lightTheme: () =>{}
}) 

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
  return useContext(ThemeContext)
}