import './App.css';
import Hello from './Hello';

function App() {
  // excercise 1: fix the issue with Hello visibility
  // provide an explanation in the comments

  // EXERCISE 1 - EXPLANATION: [your explanation here]
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
