import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});

describe('index.html', () => {
  before(() => {
    return JSDOM.fromFile('./src/index.html')
      .then((dom) => {
        global.window = dom.window;
        global.document = window.document;
      });
  });

  it('should say hello', () => {
    // const index = fs.readFileSync('./src/index.html', 'utf-8');
    // jsdom.env(index, function(err, window) {
    const h1 = document.querySelectorAll('h1')[0];
    expect(h1.innerHTML).to.equal('Hello World!');
  });
});
