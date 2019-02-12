import Node from './Node';

function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);

  // this.toString = makeString;
}

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};

export default SingleTag;
