import * as React from "react";

type Props = {
  name: string | undefined;
  value: string | undefined;
  textarea: boolean;
};

const DemoNamedOutput = ({name, value, textarea}: Props): JSX.Element => (
  <div className='container'>
    <div className='control is-expanded'>
      {textarea ?
      <input 
      className="form-control form-control-sm" 
      type="text" 
      readOnly
      value={value || ""}
      aria-label=".form-control-sm example" />
        :
        <input 
        className='input'
          type='text'
          readOnly={true}
          value={value || ""}
          aria-label='.form-control-sm input'
        
        />
      }
    </div>
  </div>
);

export default DemoNamedOutput;