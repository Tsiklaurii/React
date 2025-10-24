import React from 'react'
import "./App.css"
import Card from './Card'
import Test from './Test'

const App = () => {
  return (
    <div>
      <Card
        img="src/assets/Rectangle.png"
        title="Equilibrium #3429"
        description="Our Equilibrium collection promotes balance and calm."
      />
      
      <Test />
    </div>
  )
}

export default App