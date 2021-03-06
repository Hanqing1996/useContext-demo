import React, {useState, createContext,useContext} from 'react'

const C = createContext(null);

function App() {

  console.log('App is rendered')
  const [n, setN] = useState(0);// 用 useReducer 也可以
  return (
    <C.Provider value={{ n, setN }}>
      <div>
        <Baba />
      </div>
    </C.Provider>
  );
}

function Baba() {
  console.log('Baba is rendered')
  const { n, setN } = useContext(C);
  return (
    <div>
      我是爸爸 n: {n} <Child />
    </div>
  );
}

function Child() {
  console.log('Child is rendered')
  const { n, setN } = useContext(C);
  const onClick = () => {
    setN(i => i + 1);
  };
  return (
    <div>
      我是儿子 我得到的 n: {n}
      <button onClick={onClick}>+1</button>
    </div>
  );
}

export default App