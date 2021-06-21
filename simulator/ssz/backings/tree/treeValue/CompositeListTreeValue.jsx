export class CompositeListTreeValue extends CompositeArrayTreeValue {
    type;
  
    constructor(type, tree) {
      super(type, tree);
      this.type = type;
    }
  
    push(...values) {
      const convertedValues = values.map((value) =>
        isTreeBacked(value)
          ? value.tree
          : this.type.elementType.struct_convertToTree((value))
      );
      return this.type.tree_push(this.tree, ...convertedValues);
    }
  
    pop() {
      return this.type.tree_pop(this.tree);
    }
  }
  