import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useCounter');
jest.mock('../../../hooks/useFetch');

describe('Testing MultipleCustomHook hook', () => {

  beforeEach(() => {
    useCounter.mockReturnValue({ counter: 10, increment: () => {} });
  });

  test('should show correctly', () => {
    useFetch.mockReturnValue({ data: null, loading: true, error: null });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show data', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Dany', quote: '-' }],
      loading: false,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert').exists()).toBe(false);
  });
});
