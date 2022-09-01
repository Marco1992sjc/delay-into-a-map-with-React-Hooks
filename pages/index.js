
import React  from 'react'

export default function Home() {


const [data] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])






const [displayArray, setDisplayArray] = React.useState([])
const [displayEl, setDisplayEl] = React.useState()

const delay = (ms) =>
  new Promise((res) => {
    setTimeout(() => {
      res()
    }, ms)
  })

React.useEffect(() => {
  (async function () {
    for (let el of data) {
      await delay(1000)
      setDisplayEl(el)
    }
    setDisplayEl(undefined)
  })()
}, [data])

React.useEffect(() => {
  displayEl && setDisplayArray((prev) => [...prev, displayEl])
}, [displayEl])

return (
  <div>
   <main>  <h1 >Função map com Delay</h1>

   
    {displayArray.map((elem, key) => (
      <div key={key}>Números: <li>{elem}</li></div>
    ))}
  </main></div>
)}



