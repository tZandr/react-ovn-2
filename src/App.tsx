import { ProfileCard } from './components/ProfileCard';
import { ShowTemp } from './components/temperature';
import './App.css';

function App() {
  return (
    <div className="root">
      <h1>React Övning 2</h1>
      <div>
        <ProfileCard name="Alexander" occupation="AppDev" city="Stockholm" />
      </div>
      <div>
        <ShowTemp />
      </div>
    </div>
  );
}

export default App;
