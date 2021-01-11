import App from './App';

import { shallow, mount } from 'enzyme';

describe("Test App.js", () => {
  it("contains an H1 with greeting message", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('h1').text()).toBe("Welcome")
  })

  it("contains a div with class 'counter'", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find("div.counter").text()).toBe("0")
  })

  it("contains a button with text 'increment'", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find("button.increment").text()).toBe("Increment")
  })

  it("contains a button with text 'decrement'", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find("button.decrement").text()).toBe("Decrement")
  })

  it("click on increment should increment state variable counter", () => {
    const wrapper = shallow(<App />)
    wrapper.find("button.increment").simulate("click")
    expect(wrapper.find("div.counter").text()).toBe("1")
  })

  it("click on decrement should decrement state variable counter", () => {
    const wrapper = shallow(<App />)
    wrapper.find("button.decrement").simulate("click")
    expect(wrapper.find("div.counter").text()).toBe("-1")

  })

})

/*
  $("div")

  $(".foo")

  $("#foo")

  $("[data-id=2]")

  $("div.foo")

  $("div#foo")



*/