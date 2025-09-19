import './App.css'
import Countries from './Components/Countries/Countries'
import React, { Suspense } from "react";


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
      
      <Suspense fallback={<p>nadir vai loading</p>}>
      <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
