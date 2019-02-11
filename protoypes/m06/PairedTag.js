import Node from './Node';

function makeString() {
  const value = this.children.length > 0 ? this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
}

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = makeString;
}
