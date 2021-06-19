export class ContainerTreeValue extends TreeValue {
    type;
  
    constructor(type, tree) {
      super(type, tree);
      this.type = type;
    }
  
    getProperty(property) {
      if (!this.type.fields[property]) {
        return undefined;
      }
      const propType = this.type.getPropertyType(property);
      const propValue = this.type.tree_getProperty(this.tree, property);
      if (isCompositeType(propType)) {
        return (createTreeBacked(propType, propValue));
      } else {
        return propValue;
      }
    }
  
    setProperty(property, value) {
      const propType = this.type.getPropertyType(property);
      if (isCompositeType(propType)) {
        if (isTreeBacked(value)) {
          return this.type.tree_setProperty(this.tree, property, value.tree);
        } else {
          return this.type.tree_setProperty(
            this.tree,
            property,
            propType.struct_convertToTree((value))
          );
        }
      } else {
        return this.type.tree_setProperty(this.tree, property, value);
      }
    }
  
    *keys() {
      yield* this.getPropertyNames();
    }
  
    *values() {
      for (const [_key, value] of this.entries()) {
        yield value;
      }
    }
  
    *entries() {
      const keys = this.getPropertyNames();
      let i = 0;
      for (const value of this.type.tree_iterateValues(this.tree)) {
        const propName = keys[i];
        const propType = this.type.getPropertyType(propName);
        if (isCompositeType(propType)) {
          yield [propName, createTreeBacked(propType, value)];
        } else {
          yield [propName, value];
        }
        i++;
      }
    }
  
    *readonlyValues() {
      for (const [_key, value] of this.readonlyEntries()) {
        yield value;
      }
    }
  
    *readonlyEntries() {
      const keys = this.getPropertyNames();
      let i = 0;
      for (const value of this.type.tree_readonlyIterateValues(this.tree)) {
        const propName = keys[i];
        const propType = this.type.getPropertyType(propName);
        if (isCompositeType(propType)) {
          yield [propName, createTreeBacked(propType, value)];
        } else {
          yield [propName, value];
        }
        i++;
      }
    }
  }
  