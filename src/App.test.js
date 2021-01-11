import App from './App';

import { shallow, mount } from 'enzyme';

describe("Test App.js", () => {
  it("Checks that Learn React exists", () => {
    const wrapper = shallow(<App />)
    console.log(wrapper.debug())
    expect(wrapper.find("a").text()).toContain("Learn React")
  })

  it("Checks for hello", () => {
    const wrapper = mount(<App />)
    console.log(wrapper.debug())
    expect(wrapper.find('h1').text()).toContain("Hello")
  })
})