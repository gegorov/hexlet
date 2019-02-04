// @flow

//  { type: tagsList, body: [ { type: tag, name: <>, body: <>, options: {} } ] }

const myHtml = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span'],
      ['span', { class: 'text', id: 'uniq-key' }],
    ]],
  ]],
]];

const expected = '<html><head><title>hello, hexlet!</title></head><body class="container"><h1 class="header">html builder example</h1><div><span></span><span class="text" id="uniq-key"></span></div></body></html>';
// // BEGIN (write your solution here)
// const iterAst = (ast) => {


//   switch (ast.type) {
//     case 'tagsList':
//       // console.log('%%%%%%%%%%%%%%');
//       // console.log(ast);
//       return `${ast.body.map(iterAst).join('')}`;
//     case 'tag':
//       // console.log('!!!!!!!!!!!!!!!');
//       // console.log(ast.name);
//       // console.log(ast.options);
//           // console.log('%%%%%%%%%%%%%%');
//       // console.log(ast);
//  const attrsLine = Object.keys(ast.options).map(key => ` ${key}="${ast.options[key]}"`).join('');

//       // console.log('!!!!!!!!!');
//       // console.log(attrsLine);
//       return `<${ast.name}${attrsLine}>${iterAst(ast.body)}</${ast.name}>`;
//     default:
//       return ast;
//   }
// };

// const iter = (data) => {
//   if (data[0] instanceof Array) {
//     return { type: 'tagsList', body: data.map(iter) };
//   }

//   let body;
//   let options;
//   if (data.length === 3) {
//     [, options, body] = data;
//   } else if (data.length === 2) {
//       // console.log('!!!!!!!!!!!!!!!');
//       // console.log(data);
//       if (data[1] instanceof Array || (typeof data[1] === 'string')) {
//         console.log('BEGIN FUUUUCK')
//         body = data[1];
//         options = {};
//         console.log(body);
//         console.log('END FUUUUCK')
//       } else {
//         body = '';
//         options = data[1];
//       }
//   }
//   else if (data.length === 1) {
//     body = '';
//   }

//   const processedBody = body instanceof Array ? iter(body) : body;
//   // console.log(`name: ${data[0]}`);
//   // console.log(`body: ${processedBody}`);
//   // console.log(`options: ${options}`);
//   return {
//     type: 'tag', name: data[0], body: processedBody, options,
//   };
// };

// const buildHtml = (data) => {
//   const result = iter(data);
//   return iterAst(result);
// };

const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)
const render = (ast) => {
  const { name, body } = ast;
  let { attributes } = ast;
  attributes = Object.keys(attributes).reduce((acc, key) => `${acc} ${key}="${attributes[key]}"`, '');

  const children = ast.children.map(render);
  if (singleTagsList.has(name)) {
    return `<${name}${attributes}>`;
  }
  const content = children.length > 0 ? children.join('') : body;
  return `<${name}${attributes}>${content}</${name}>`;
};

const parse = (data) => {
  const name = data[0];
  let value;
  let attributes = {};
  if (data.length === 3) {
    [, attributes, value] = data;
  } else if (data.length === 2) {
    if (data[1] instanceof Array || typeof data[1] === 'string') {
      [, value] = data;
    } else {
      value = '';
      [, attributes] = data;
    }
  } else {
    value = '';
  }

  let body = '';
  let children;

  if (value instanceof Array) {
    children = value.map(parse);
  } else {
    body = value;
    children = [];
  }

  return {
    name,
    attributes,
    body,
    children,
  };
};

const buildHtml = data => render(parse(data));

// export default buildHtml;

// END
console.log(buildHtml(myHtml));
console.log(buildHtml(myHtml) === expected);
