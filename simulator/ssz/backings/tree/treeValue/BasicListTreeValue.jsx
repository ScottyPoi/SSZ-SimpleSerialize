export class BasicListTreeValue extends BasicArrayTreeValue {

    constructor(type, tree) {
      super(type, tree);
      this.type = type;
    }
  
    push(...values) {
      return this.type.tree_push(this.tree, ...values);
    }
  
    pop() {
      return this.type.tree_pop(this.tree);
    }
  }
  