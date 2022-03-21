import "./App.css"

import { BubbleSortVisualizer } from "./Visualizers/BubbleSort/BubbleSortVisualizer"

function App() {
  return (
    <div className="App">
      <main className="container">
        <BubbleSortVisualizer numOfBars={50} delay={20} />
      </main>
    </div>
  )
}

export default App
