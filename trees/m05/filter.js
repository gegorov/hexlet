const filter = (f, node) => {
  if (!f(node)) {
    return null;
  }

  const children = node.children.map(n => filter(f, n)).filter(v => v);
  return { ...node, children };
};

export default filter;
