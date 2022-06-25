import Container from "./Components/Container";
import brandLogo from "./images/logo.svg";
function App() {
  return (
    <div className='App'>
      <img className='BrandIcon' src={brandLogo} alt='Brand Logo' />
      <Container />
    </div>
  );
}

export default App;
