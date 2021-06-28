import { shallow } from "enzyme";
import { RealExample } from "../../../components/04-useRef/RealExample";

describe('Testing RealExample', () => {
  test('should show correctly', () => {
    const wrapper = shallow(<RealExample />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('should show component <MultipleCustomHooks>', () => {
    const wrapper = shallow(<RealExample />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
