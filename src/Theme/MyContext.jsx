import React from 'react'

export const themes = {
  light : {
    background : '#eee',
    color:'#000'
  },
  dark : {
    background : '#444',
    color:'#fff'
  }
}

export const MyContext = React.createContext(themes.dark);