export class CompositeArrayTreeValue extends TreeValue {

    constructor(type, tree) {
      super(type, tree);
      this.type = type;
    }
  
    getProperty(property) {
      if (property === "length") {
        return this.type.tree_getProperty(this.tree, property);
      }
      return createTreeBacked(this.type.elementType, this.type.tree_getProperty(this.tree, property));
    }
  
    setProperty(property, value) {
      return this.type.tree_setProperty(
        this.tree,
        property,
        isTreeBacked(value)
          ? value.tree
          : this.type.elementType.struct_convertToTree((value))
      );
    }
  
    *keys() {
      const propNames = this.getPropertyNames();
      // pop off "length"
      propNames.pop();
      yield* propNames.map(String);
    }
  
    *values() {
      for (const tree of this.type.tree_iterateValues(this.tree)) {
        yield createTreeBacked(this.type.elementType, tree);
      }
    }
  
    *entries() {
      const keys = this.getPropertyNames();
      let i = 0;
      for (const value of this.values()) {
        yield [String(keys[i]), value];
        i++;
      }
    }
  
    *readonlyValues() {
      for (const tree of this.type.tree_readonlyIterateValues(this.tree)) {
        yield createTreeBacked(this.type.elementType, tree);
      }
    }
  
    *readonlyEntries() {
      const keys = this.getPropertyNames();
      let i = 0;
      for (const value of this.readonlyValues()) {
        yield [String(keys[i]), value];
        i++;
      }
    }
  }
  
  