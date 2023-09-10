import './App.css';
import Button from './components/CustomButtonComponent';

function App() {
  let audio = new Audio("/died.mp3")

  const start = () => {
    audio.play()
  }

  return (
    <>
    <div className='App'>
        <div className={`${['d-flex']}`}>
          <div className={`${['center']}`}>
            <div style= {{flexDirection: 'column'}}>
              <h1 className='App-header'>&nbsp; Click me! <br /> (Sound on)</h1>
              <br />
              <div>
              <Button
                border="none"
                color="orange"
                height = "100px"
                onClick={start}
                radius = "100%"
                width = "100px"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
