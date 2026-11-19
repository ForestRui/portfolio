import { useState } from 'react'
import './App.css';
import ProjectCard from './components/ProjectCard'
import { FaGithub, 
         FaInstagram, 
         FaTelegram
        } from 'react-icons/fa';
import { SiGmail, 
         SiHtml5,
         SiCss,
         SiJavascript,
        SiReact
} from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';

const projects = [
  {title: "Chess", 
  features: ['Movement', 'capture', 'check', 'castle', 'AI-component', 'promotion', 'score-tracking', 'checkMate', 'staleMate'], 
  src: "/chess-preview.png",
   alt: "chess preview", 
  link: "https://forestrui.github.io/Chess_Game1/", 
  srcdemo: "/chess-demo.gif",  
  id: "chess",},

  {title: "example", 
  features: ['example1', 'example2'], 
  src: "/example.png",
   alt: "example preview", 
  link: "#", 
  srcdemo: "/example.png",  
  id: "example1",},

  {title: "example", 
  features: ['example1', 'example2'], 
  src: "/example.png",
   alt: "example preview", 
  link: "#", 
  srcdemo: "/example.png",  
  id: "example2",}
]






function App() {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ email: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);
  setError('');
  try {
    const response = await fetch('PLACEHOLDER', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: form.email, message: form.message}),
    })

    if (response.ok) {
     setSent(true);
     setForm({email: '', message: ''})
    } else {
     setError('Something went wrong, please try again.')
    }
  } catch (err) {
     setError('Network error. Check your connection.');
  } finally {
    setSending(false);
  }

 }

  return (
    <>
    <header id="site-header">
     <a href="#hero" className="logo"><span className="highlight">F</span>orestRui</a>

      <nav id="nav-bar">
        <a href="#hero" className="nav-item interactive-btm">About</a>
        <a href="#projects" className="nav-item interactive-btm">Projects</a>
        <a href="#contact" className="nav-item interactive-btm">Contact</a>
        </nav>
        </header>
    
      <section id="hero">
        <h1><span className="highlight">F</span>orest Rui</h1>

        
        <div className="intro-card">
          <img src="/profile.png" alt="Forest's face" className="profile"/>
          <div className="card-right">
           <h2>Hi, this is <span className="highlight">F</span>orest.</h2>
          <a href="#projects" className="hero-nav">View Works <span className="down">▼</span></a>
          
           <div className="icons">
           <SiHtml5 className="icon" />
           <SiCss className="icon" />
           <SiReact className="icon" />
           <SiJavascript className="icon" />
           </div>


          </div>
          

          </div>
           
          
      </section>

      <div className="divider"></div>

      <section id="projects-section">
        <h2 className="projects-title">My Projects</h2>

         <ProjectCard projects={projects} />
      

      </section>
  
  <div className="divider"></div>
        
      <section id="contact">
        <form className="contact-form" 
        onSubmit={handleSubmit}
        >
            <label htmlFor="input-email">Your Email: </label>
            <input type="email" 
            name="email" 
            aria-label="Your email address"
            required 
            placeholder="Your email address" 
            className="form-input" 
            id="input-email" 
            value={form.email} 
            onChange={e => setForm({...form, email: e.target.value})} 

            />

            <label htmlFor="contact-input">Message: </label>
            <textarea id="contact-input" 
            name="message" 
            aria-label="Your message" 
            placeholder="What would you like to say" 
            className="form-input" 
            value={form.message} 
            onChange={e => setForm({...form, message: e.target.value})}
            />
            <button type="submit" 
            disabled={sending}
            >{sending ? 'Sending' : 'Send'}</button>
           </form>
           {sent && <p className="form-success">Thanks! I'll get back to you.</p>}
           {error && <p className="form-error">{error}</p>}
        </section>  
      
      <div className="divider"></div>

      <footer className="footer">
        <a href="https://x.com/ttxxbbff" 
        target="_blank" 
        rel="noreferrer" 
        aria-label="X" 
        className="icon">
          <FaXTwitter />
        </a>
        <a href="" target="_blank" 
        rel="noreferrer" 
        aria-label="Instagram" 
        className="icon">
          <FaInstagram />
        </a>
        <a href="" target="_blank" 
        rel="noreferrer" 
        aria-label="telegram" 
        className="icon">
          <FaTelegram />
        </a>
        <a href="https://github.com/ForestRui" target="_blank" 
        rel="noreferrer" 
        aria-label="gitHub" 
        className="icon">
          <FaGithub />
        </a>
        <a href="" target="_blank" 
        rel="noreferrer" 
        aria-label="gmail" 
        className="icon">
          <SiGmail />
        </a>
      </footer>



      </>
  )
}

export default App

