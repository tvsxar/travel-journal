import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AuthPage from '../pages/AuthPage'

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/register" element={<AuthPage isLogin={false} />} />

            <Route path="/login" element={<AuthPage isLogin={true} />} />
        </Routes>
    </Router>
  )
}

export default AppRouter
