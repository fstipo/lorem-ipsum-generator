import { useState } from 'react';
import paragraphs from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleText = (e) => {
    e.preventDefault();
    setText(paragraphs.slice(0, count));
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum? </h4>
      <form className="lorem-form" onSubmit={handleText}>
        <label htmlFor="">paragraphs</label>
        <input
          type="number"
          name="count"
          id="count"
          min={1}
          max={8}
          step={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((para, index) => (
          <p key={index + 1}>
            <span>{index + 1}. </span>
            {para}
          </p>
        ))}
      </div>
    </section>
  );
};
export default App;
