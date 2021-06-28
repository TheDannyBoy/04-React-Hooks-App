import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Testing useCounter hook', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('should increment the counter in 1', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;
    
    act(() => increment());
    const { counter } = result.current;
    expect(counter).toBe(11);
  });

  test('should decrement the counter in 1', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;
    
    act(() => decrement());
    const { counter } = result.current;
    expect(counter).toBe(9);
  });

  test('should reset the counter', () => {
    const { result } = renderHook(() => useCounter());
    const { increment, reset } = result.current;
    
    act(() => increment());
    act(() => reset());
    const { counter } = result.current;
    expect(counter).toBe(10);
  });
})
