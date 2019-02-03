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

const iterAst = (ast) => {
  switch (ast.type) {
    case 'tagslist':
      break;
    case 'tag':
      break;
    default:
  }
};

const iter = (data) => {
  // const type = data[0] instanceof Array ? 'tagsList' : 'tag';

  if (data[0] instanceof Array) {
    return { type: 'tagsList', body: data.map(iter) };
  }

  let body;
  let options;
  if (data.length === 3) {
    [, options, body] = data;
  } else if (data.length === 2) {
    [, body] = data;
    options = [];
  }

  const processedBody = body instanceof Array ? iter(body) : body;

  return {
    type: 'tag', name: data[0], body: processedBody, options,
  };
};

const buildHtml = (data) => {
  // if (data[1] instanceof Array) {

  //   console.log(data[0]);
  //   return `<${data[0]}>${buildHtml(data[1])}</${data[0]}>`;
  // }
  // return '*endOfRec*';
  const result = iter(data);
  console.log(result);
  return result;
};

console.log(buildHtml(myHtml) === expected);
