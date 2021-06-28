import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Testing useForm hook', () => {
  let renderHookResult;
  const initialForm = {
    name: 'fernando',
    email: 'fernando@gmail.com'
  };

  beforeEach(() => {
    renderHookResult = renderHook(() => useForm(initialForm)).result;
  });

  test('should return a default form', () => {
    expect(renderHookResult.current[0]).toStrictEqual(initialForm);
  });

  test('should change the form value', () => {
    const [, handleInputChange] = renderHookResult.current;
    const evt = { target: { name: 'name', value: 'daniel' }};

    act(() => handleInputChange(evt));
    expect(renderHookResult.current[0]).toStrictEqual({ ...initialForm, name: 'daniel' });
  });

  test('should reset the form values', () => {
    const [, handleInputChange, reset] = renderHookResult.current;
    const evt = { target: { name: 'name', value: 'daniel' }};

    act(() => handleInputChange(evt));
    act(() => reset());
    expect(renderHookResult.current[0]).toStrictEqual(initialForm);
  });
  
})
