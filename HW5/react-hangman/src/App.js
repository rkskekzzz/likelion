import { useEffect, useState } from 'react';
import Waiting from './Waiting';
import Hangman from './Hangman';
import './static/style.css';
import axios from 'axios';

function App() {
  const [puzzle, setPuzzle] = useState('');
  const [loading, setLoading] = useState(true);

  const getPuzzle = async () => {
    try {
      const p = await axios.get('https://puzzle.mead.io/puzzle?wordCount=1');
      console.log(p);
      let word = p.data.puzzle;
      setPuzzle(word);
      console.log(word);
    } catch {
      console.log('정보를 불러오지 못함');
    } finally {
      setLoading(false);
    }
  };

  const reload = () => window.location.reload();

  useEffect(() => {
    getPuzzle();
  }, []);

  return (
    <>
      {loading ? (
        <Waiting />
      ) : (
        <>
          <Hangman puzzle={puzzle} maxError={5} />
          <button id="resetBtn" onClick={reload}>
            새로고침
          </button>
        </>
      )}
    </>
  );
}

export default App;
