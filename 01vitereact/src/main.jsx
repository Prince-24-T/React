import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const username= 'prince Tiwari'
const reactElement= React.createElement(
  'a',{href:'https;//google.com',target:'_blanck'},
  'click me to visit google'
  , username

)
ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement

)
