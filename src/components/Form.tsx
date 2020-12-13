import React, { useState } from 'react';

export interface FormProps {
  addTodo(val: string): void,
}

const Form: React.FC<FormProps> = ({addTodo}) => {
  const [item, setItem] = useState<string | ''>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    addTodo(item);
    setItem('');
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  }

  return (
      <form onSubmit={handleSubmit} className="form">
        <input value={item} onChange={onChange} className="form__input" />
        <input type="submit" value="Submit" className="form__button" />
      </form>
  );
}
 
export default Form;