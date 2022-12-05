import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'


function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <h1>SUPER WEB DE RECETAS</h1>
      <AppRoutes />
    </div>
  )
}

export default App;
