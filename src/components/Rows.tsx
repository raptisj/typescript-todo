import React, { useState } from 'react';

export interface RowsProps {
  content: string,
  deleteTodo(id: number): void,
  index: number
}
 
const Rows: React.FC<RowsProps> = ({ content, deleteTodo, index }) => {
const [value, setValue] = useState(false);

  const onChange = () => {
    setValue(!value)
  }

  return ( 
      <div className="row">
        <p className={value ? 'line-trough' : ''}>{content}</p>
        <div className="row__actions">
          <button className="delete" onClick={() => deleteTodo(index)}>delete</button>
          <label>
            strike <input type="checkbox" onChange={onChange} />
          </label>
        </div>
      </div>
   );
}
 
export default Rows;