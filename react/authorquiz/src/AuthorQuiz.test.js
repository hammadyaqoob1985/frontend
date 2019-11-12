import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adapter()});
const state = {
  turnData : {
    books :['The Shining', 'IT', 'David CopperField', 'A Tale of Two Citites', 'Hamlet'],
    author : {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David CopperField', 'A Tale of Two Citites']
    }
  },
  highlight: 'none'
}
describe("Author Quiz", () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
});

describe("When no answer has been selected", () => {

  let wrapper;

  beforeAll(() => {
    wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => {}}/>);
  })
  it('has no background color', () => {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('white');
  });
});

describe("When wrong answer has been selected", () => {

  let wrapper;

  beforeAll(() => {
    wrapper = mount(<AuthorQuiz {...(Object.assign({},state, {highlight: 'wrong'}))} onAnswerSelected={() => {}}/>);
  })
  it('should have a red color', () => {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
  });
});

describe("When correct answer has been selected", () => {

  let wrapper;

  beforeAll(() => {
    wrapper = mount(<AuthorQuiz {...(Object.assign({},state, {highlight: 'correct'}))} onAnswerSelected={() => {}}/>);
  })
  it('should have a red color', () => {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
  });
});

describe("WWhen the first answer selected", () => {

  let wrapper;

  const handleAnswerSelected = jest.fn();
  beforeAll(() => {
    wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected}/>);
    wrapper.find('.answer').first().simulate('click');
  })
    
  it('onAnswerSelected should be called', () => {
    expect(handleAnswerSelected).toHaveBeenCalled();
  });

  it('should have received the Shining', () => {
    expect(handleAnswerSelected).toHaveBeenCalledWith('The Shining');
  });
});