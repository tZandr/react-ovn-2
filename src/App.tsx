import { ProfileCard } from './components/ProfileCard';
import { ShowTemp } from './components/temperature';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [showComponent, setShowComponent] = useState<boolean>(true);

  useEffect(() => {
    console.log('App component has been rendered');
  }, []);

  return (
    <div className="root">
      <h1>React Övning 2</h1>
      <div>
        <button onClick={() => setShowComponent((prev) => !prev)}>
          {showComponent ? 'Hide ' : 'Show '}
          Profile
        </button>
        {showComponent && (
          <ProfileCard name="Alexander" occupation="AppDev" city="Stockholm" />
        )}
      </div>
      <div>
        <ShowTemp />
      </div>
    </div>
  );
}

export default App;
