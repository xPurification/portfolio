import Sidebar from './components/Sidebar/Sidebar';
import About from './sections/About';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Fixed Left Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="main">
        <About />
        <Projects />
        <Resume />
      </main>
      
      {/* Scanline overlay effect - will be enhanced in Task 3 */}
      <div className="scanlines" aria-hidden="true" />
    </div>
  );
}

export default App;
