import HorizontalScrollingText from "./components/HorizontalScrollingText/HorizontalScrollingText";
import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";
// import FormPage from "./pages/FormPage/FormPage";
import Main from "./pages/Main/Main";
import Work from "./pages/Work/Work";


function App() {
  return (
    <div className="App" >
      <HorizontalScrollingText text ={'hello'} />
      <Main/>
      <About/>
      {/* <FormPage/> */}
      <Work/>
      <Footer/>
      <HorizontalScrollingText text={'bye'} />
    </div>
  );
}

export default App;
 