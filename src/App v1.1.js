import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  function handlePre() {
    if (step > 1) {
      setStep(s => s - 1);
      // updating the state by2
      // setStep(s => s - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      // always use this for updating the state
      setStep(s => s + 1);
      // update the state by 2
      // setStep(s => s + 1);
    }
  }

  return (
    <>
      <div className='close' onClick={() => setOpen(is => !is)}>
        &times;
      </div>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step === 3 ? 'active' : ''}>3</div>
          </div>
          <div className='message'>
            <p>
              Step {step}: {messages[step - 1]}
            </p>
          </div>
          <div className='buttons'>
            <Button
              bgColor='rgb(25, 25, 197)'
              txtColor='#fff'
              text='Previous'
              onClick={handlePre}
              emoji='👈'
            />
            <Button
              bgColor='rgb(25, 25, 197)'
              txtColor='#fff'
              text='Next'
              onClick={handleNext}
              emoji='👉'
            />
          </div>
        </div>
      )}
    </>
  );
}

function Button({ txtColor, bgColor, text, onClick, emoji }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: txtColor }}
      onClick={onClick}
    >
      <span>{emoji}</span> {text}
    </button>
  );
}
