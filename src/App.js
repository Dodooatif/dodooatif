import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Counter from "./components/Counter"
import FormContainer from "./components/FormContainer"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
function App() {
  return (
      <>
      <NavBar />
      <main>
        <Hero />
        <Counter />
        <Projects />
        <FormContainer />
        <Footer />
        
      </main>
      </>
  );
}

export default App;
