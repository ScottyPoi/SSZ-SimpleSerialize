

import TreeValue from "./treeValue";



export default function BasicArrayTreeValue(props) {

  
    function getProperty(property) {
      return props.type.tree_getProperty(props.tree, property);
    }
  
    function setProperty(property, value) {
      return props.type.tree_setProperty(props.tree, property, value);
    }
  
    function *keys() {
      const propNames = props.getPropertyNames();
      // pop off "length"
      propNames.pop();
      yield* propNames.map(String);
    }
  
    function values() {
      return props.type.tree_iterateValues(props.tree);
    }
  
    function *entries() {
      const keys = props.getPropertyNames();
      let i = 0;
      for (const value of values()) {
        yield [String(keys[i]), value];
        i++;
      }
    }
  
    function readonlyValues() {
      return props.type.tree_readonlyIterateValues(props.tree);
    }
  
    function *readonlyEntries() {
      const keys = props.getPropertyNames();
      let i = 0;
      for (const value of readonlyValues()) {
        yield [String(keys[i]), value];
        i++;
      }
    }

    return (
      <TreeValue
      type={props.type}
      tree={props.tree}
      >{props.children}</TreeValue>
    )

  }
  