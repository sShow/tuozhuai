import Node from './node';

export default class Manager {
  private _mounted: boolean;

  protected platform: string;
  protected componentTree: Node;
  protected functionList: string[];
  protected variableList: string[];

  constructor() {
    this._mounted = false;
    this.platform = 'pc';
    this.componentTree = new Node('page');
    this.functionList = [];
    this.variableList = [];
  }

  mounted() {
    this._mounted = true;
  }

  destroy() {
    this._mounted = false;
  }

  getComponentTree() {
    return this.componentTree;
  }

  getFunctionList() {
    return this.functionList;
  }

  getVariableList() {
    return this.variableList;
  }

  registerMaterial() {
    console.log('registerMaterial');
  }
}
