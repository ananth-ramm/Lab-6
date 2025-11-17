import React, { useState } from 'react';

const NumberInput = ({ label, value, onChange }) => (
  <div style={{ marginBottom: '10px' }}>
    <label style={{ marginRight: '10px' }}>{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ width: '60px' }}
    />
  </div>
);

const OperatorSelect = ({ operator, onChange }) => (
  <div style={{ marginBottom: '10px' }}>
    <label style={{ marginRight: '10px' }}>Operator</label>
    <select value={operator} onChange={(e) => onChange(e.target.value)}>
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
  </div>
);

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let res;
    switch (operator) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Error: Div by 0';
        break;
      default:
        res = 'Invalid operator';
    }
    setResult(res);
  };

  const reset = () => {
    setNum1(0);
    setNum2(0);
    setOperator('+');
    setResult(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>Simple Calculator</h2>

      <NumberInput label="Number 1:" value={num1} onChange={setNum1} />
      <NumberInput label="Number 2:" value={num2} onChange={setNum2} />
      <OperatorSelect operator={operator} onChange={setOperator} />

      <div style={{ marginTop: '10px' }}>
        <button onClick={calculate} style={{ marginRight: '10px' }}>Calculate</button>
        <button onClick={reset}>Reset</button>
      </div>

      {result !== null && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Result: {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;
