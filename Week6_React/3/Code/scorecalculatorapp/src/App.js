import './App.css';
import { CalculateScore } from './Components/CalculatorScore';

function App() {
  return (
    <div className='container'>
      <CalculateScore Name={"Steve"}
                      School = {"VNR"}
                      total={284}
                      goal={3}
      />
    </div>
  );
}

export default App;
