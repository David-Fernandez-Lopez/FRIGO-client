import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import UserMessage from './components/UserMessage/UserMessage'


function App() {
  return (
    <div className="Frigo">
      <Navigation />
      <AppRoutes />
      <UserMessage />
      <Footer />
      </div>
  )
}

export default App;
