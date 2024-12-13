import App from './App.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Contact from './routes/Contact.jsx'
import TodoItem from './routes/TodoItem.jsx'
import { createBrowserRouter } from 'react-router-dom';


export const router = createBrowserRouter([
    {path:"/", element: <App/>},
    {path:"/dashboard", element: <Dashboard />},
    {path:"/contact", element: <Contact/>},
    {path:":slug", element: <TodoItem/>}
    
  ]);
    