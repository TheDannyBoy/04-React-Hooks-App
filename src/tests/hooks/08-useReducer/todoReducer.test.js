import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos'

describe('Testing todoReducer', () => {
  test('should return the default state', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('should add a new todo', () => {
    const payload = { id: 3, desc: 'Aprender SQL', done: false };
    const action = {
      type: 'add',
      payload
    };
    const state = todoReducer(demoTodos, action);
    expect(state).toEqual([ ...demoTodos, payload ]);
  });
});
