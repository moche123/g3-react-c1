import React, { useEffect, useState } from 'react';
import './App.css';
import Container from './partials/Container';
import Header  from './partials/Header'

function App() {
  let ageV = 24
  //let number = 5

  let [number, setNumber] = useState(0)
  let [mode, setMode] = useState('light')

  useEffect(() => {
    
    console.log(`EL NUMERO ESTA CAMBIANDO, LE VALOR: ${number}`)

    number %2 === 0 ? setMode('light') : setMode('dark')
  
    return () => {
      console.log('DESTROY USE EFFECT')
    }
  }, [number])//! EL ELEMENTO AL QUE ESTÁ ATENTO A LOS CAMBIOS
  

  // let addNumber = (quantity) => {


  //   setNumber( (oldState) => {
  //     return oldState + quantity
  //   } )
  //   console.log(number)
   
  // }

  let addNumber = () => {
  
  setNumber(number+1)
  
  }


  //   setNumber( (oldState) => {
  //     return oldState + quantity
  //   } )
  //   console.log(number)
  //   // number += 1
  //   // console.log(number)
  // }

  return (
    <React.Fragment>

      <div className="App">
        <Header name='Luis' age={ ageV } gender='male' number={number} />
      
        <h1>Hello</h1>
        <button className='button-add' onClick={addNumber}>+</button>
        {/* Si el numero es par, agrega 2 si es impar, 1 */}
        {/* <button className='button-add' onClick={() => addNumber(2)}>ADD FIRST</button>
        <button className='button-add' onClick={() => addNumber(3)}>ADD SECOND</button> */}
        { number }
      
        { ageV > 20 && 

            <div>
              Is major than 20
            </div>

        }

        <Container mode={mode}>

          <p>Inside the container</p>
        </Container>


        
      
      </div>

    </React.Fragment>


  );
}

export default App;
