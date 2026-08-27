//import { useState } from 'react'
import { Header } from './component/Header'
import { Hero } from './component/Hero'
import { Clients } from './component/Clients'
import { Comunity } from './component/Comunity'
import { Showcase1 } from './component/Showcase-1'
import { Showcase2 } from './component/Showcase-2'
import { Stats } from './component/Stats'
import { Testimonials } from './component/Testimonial'
import { Blog } from './component/Blog'
import { CTA } from './component/CTA'
import { Footer } from './component/Footer'
import { ScrollTopButton } from './component/ScrollToTopBtn'
import { LoginForm } from './component/LoginForm'
import { SignUpForm } from './component/SignUpForm'
import { LogoutModal } from './component/LogOutForm'
import './index.css'
import { useState, useEffect } from 'react'
function App() {

  const [authMode, setAuthMode] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false)
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])
  function handleLoginSuccess() {
    setIsLoggedIn(true);
    setAuthMode(null);
  }
  function handleLogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    setLoggedOut(false)
  }

  return (
    <>
      <div className="wrapper">
        <Header isLoggedIn={isLoggedIn}  onRegisterClick={() => setAuthMode('signup')} onLogoutClick={() => setLoggedOut(true)}/>
        <Hero onRegisterClick={() => setAuthMode('signup')} isLoggedIn={isLoggedIn} />
        <Clients />
        <Comunity />
        <Showcase1 />
        <Stats />
        <Showcase2 />
        <Testimonials />
        <Blog />
        <CTA />
        <Footer />
      </div>
      <ScrollTopButton />
      {authMode === 'signup' && (
        <SignUpForm
          onClose={() => setAuthMode(null)}
          onSwitchToLogIn={() => setAuthMode('login')}
          onSuccess={handleLoginSuccess}
        />
      )}
      {authMode === 'login' && (
        <LoginForm
          onClose={() => setAuthMode(null)}
          onSwitchToSignUp={() => setAuthMode('signup')}
          onSuccess={handleLoginSuccess}
        />
      )}
      {loggedOut && (
        <LogoutModal onConfirm={handleLogOut} onCancel={() => setLoggedOut(false)} />
      )}
    </>
  )
}

export default App
