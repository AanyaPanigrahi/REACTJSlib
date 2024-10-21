// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-dev-runtime"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h2>My custom App</h2>
    </div>
  )
}

/*
const reactElement={
  type:'a',
  props:{
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'click me to visit google'
}
*/

const anotherUser="this is another user"

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to open google  ',
  React.createElement('br'),
  anotherUser
)
//parameters - tag,attribute,children/content, variables if u want to add


const anotherElement=(
  <a href="https://google.com" target='_blank'>Goggle Site here</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  // <App/>
  //MyApp() okay as its func only
  <>
  {/* <MyApp/>  */}
  {/* {anotherElement} */}
  {reactElement}
  {/* <App/> */}
  </>
)
