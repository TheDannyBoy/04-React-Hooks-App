import { shallow } from "enzyme"
import { HooksApp } from "../HooksApp"

describe('Testing HooksApp', () => {
  test('Should create component and match snapshot', () => {
    const wrapper = shallow(<HooksApp />);
    const h1Text = wrapper.find('h1').text();

    expect(wrapper).toMatchSnapshot();
    expect(h1Text).toBe('Hola Mundo');
  });
});
