import './App.css';
import Hello from './Hello';

function App() {
  let showButton = false;

  const clickHandler = () => {
    console.log('toggling...');
    showButton = !showButton;
    console.log('showButton is now ', showButton);
  }
  return (
    <main>
      <div className='btn-container'>
        <button onClick={clickHandler}>
          Toggle
        </button>
      </div>

      {showButton && <Hello />}
    </main>
  );
}

export default App;
