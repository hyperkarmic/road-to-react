import logo from './logo.svg'
import './App.css'

function getTitle(title) {
  return title
}

function App() {
  return (
    <div>
      <h1>{getTitle('the end is the end of the beginning')}</h1>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />
    </div>
  )
}

export default App
