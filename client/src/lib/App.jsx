import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a href="https://t53kt8tm-4000.use2.devtunnels.ms/auth/google">Login</a>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </>
  );
}

export default Home;
