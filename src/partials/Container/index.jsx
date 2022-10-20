import React from 'react'
import './styles.css'

let styleLight = {
  backgroundColor: 'yellow',
  color: 'black',
  padding: '20px',
  fontWeight: 'bold'
}

let styleDark = {
  backgroundColor: 'black',
  color: 'yellow',
  padding: '20px',
  fontWeight: 'bold'
}


function Container(props) {
  return (
    // <div className="border-red">
    //     <h4>Title of container</h4>
    //     {props.children}
    // </div>
    <div style={props.mode === 'light' ? styleLight : styleDark }>
        
        <h4>Title of container</h4>
        {props.children}
    </div>
  )
}

export default Container