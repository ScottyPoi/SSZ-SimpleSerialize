import * as React from "react";

type Props = {
  name: string | undefined;
  value: string | undefined;
  textarea: boolean;
};

const NamedOutput = ({name, value, textarea}: Props): JSX.Element => (
  <div className='container p-0 m-0'>

        <div className='row'><h3 className='text-center' >{ name.toUpperCase()}</h3></div>
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

export default NamedOutput;