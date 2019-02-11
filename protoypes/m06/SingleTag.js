import Node from './Node';

function makeString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
}

export default function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);

  this.toString = makeString;
}
