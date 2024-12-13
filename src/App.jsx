
import './App.css'
import Navbar from './components/Navbar'
import {todos} from './data.json'
import {Link} from 'react-router-dom'


function App() {
  return (
  <div>
    <Navbar />
     <h1>Home Page</h1>
     <ul>
      {todos.map((x) => (
        <li key={x.id}>
          <Link to={x.slug}>{x.todo}</Link>
        </li>
      ))}
     </ul>
    </div>
  ) 
}

export default App
 