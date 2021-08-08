import * as React from "react";

type Props = {
  name: string | undefined;
  value: string | undefined;
  textarea: boolean;
};

const NamedOuput = ({name, value, textarea}: Props): JSX.Element => (
  <div className='container'>
    <div className='control'>
      <a className='button is-static'>
        {name}
      </a>
    </div>
    <div className='form-floating'>
      {textarea ?
        <textarea className='form-control'
          readOnly={true}
          value={value || ""}
        />
        :
        <input className='form-control'
          type='text'
          readOnly={true}
          value={value || ""}
        />
      }
    </div>
  </div>
);

export default NamedOuput;