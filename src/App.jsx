
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries'

const countriesPromise = fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())

function App() {


  return (
    <>
    <Suspense fallback={<span class="loading loading-spinner text-center text-cyan-400 loading-xl"></span>}>
    <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
    </>
  )
}

export default App
