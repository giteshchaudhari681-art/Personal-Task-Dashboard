import { useState, useEffect } from 'react';

const Home = () => {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => {
        setAdvice(data.slip.advice);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      {loading ? <p>Loading...</p> : <p className="text-lg">{advice}</p>}
    </div>
  );
};

export default Home;