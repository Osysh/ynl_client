import { useState } from 'react';
// @ts-ignore
import { ReactComponent as Chevron } from '../icons/right-chevron.svg';

interface CalculousProps {
  randomNumberTuple: Array<number>;
  onCalculousResult: (input: number) => void
}

export function Calculous(props: CalculousProps) {
  const [input, setInput] = useState<string>('');

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput((event.target as HTMLInputElement).value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onCalculousResult(Number(input));
    setInput('');
  }
  
  return (
    <div style={{ marginTop: 50 }}>
      <h1 style={{ fontSize: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div>
          <span>{props.randomNumberTuple[0]}</span>
          <span> x </span>
          <span>{props.randomNumberTuple[1]}</span>
        </div>
        <span>=</span>
      </h1>
      <form style={{ display: 'flex', alignItems: 'center', gap: 12 }} onSubmit={onSubmit}>
        <input type="text" autoFocus value={input} onInput={onInputChange} />
        <button className='rounded-btn' disabled={isNaN(Number(input)) || input === ''} type="submit"><Chevron style={{ width: 10, float: 'left'  }} /></button>
      </form>
    </div>
  );
}

