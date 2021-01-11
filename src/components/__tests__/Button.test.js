import Button from '../Button'
import { shallow } from 'enzyme'

describe("Test getSize", () => {
  it('contains btn-lg when size==lg', () => {
    const wrapper = shallow(<Button size="lg"/>)
    expect(wrapper.find('button').hasClass('btn-lg')).toBe(true);
  })
  it('does not contain btn-lg when size is not sent', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button').hasClass('btn-lg')).not.toBe(true);
  })
})

describe("Test getColorScheme", () => {
  it("sets has btn-primary when colorScheme==purple", () => {
    const wrapper = shallow(<Button colorScheme="purple"/>)
    expect(wrapper.find('button').hasClass('btn-primary')).toBe(true);
  })

  it("sets has btn-outline-primary when colorScheme==outlinedPurple", () => {
    const wrapper = shallow(<Button colorScheme="outlinedPurple"/>)
    expect(wrapper.find('button').hasClass('btn-outline-primary')).toBe(true);
  })

  it("sets has btn-outline-gray when colorScheme==gray", () => {
    const wrapper = shallow(<Button colorScheme="gray"/>)
    expect(wrapper.find('button').hasClass('btn-outline-gray')).toBe(true);
  })

  it("sets has btn-outline-white when colorScheme==white", () => {
    const wrapper = shallow(<Button colorScheme="white"/>)
    expect(wrapper.find('button').hasClass('btn-outline-white')).toBe(true);
  })

  it("sets has btn-light-purple when colorScheme==light-purple", () => {
    const wrapper = shallow(<Button colorScheme="light-purple"/>)
    expect(wrapper.find('button').hasClass('btn-light-purple')).toBe(true);
  })

  it("sets has btn-primary when colorScheme is not set", () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button').hasClass('btn-primary')).toBe(true);
  })
})

describe("Test handleOnClick", () => {
  // handleOnClick
  it("triggers handleOnClick if handleOnClick is set", () => {
    let counter = 0
    const wrapper = shallow(<Button onClick={() => {counter++}} />)
    expect(counter).toBe(0)
    wrapper.simulate("click")
    expect(counter).toBe(1)
  })

  it("do not trigger handleOnClick if disabled is true", () => {
    let counter = 0
    const wrapper = shallow(<Button disabled onClick={() => {counter++}} />)
    expect(counter).toBe(0)
    wrapper.simulate("click")
    expect(counter).toBe(0)
  })
})

describe("Test renderButton", () => {


  // Test renderButton
  it("renders default classNames", () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button').hasClass("button-component")).toBe(true)
    expect(wrapper.find('button').hasClass("btn")).toBe(true)
  })

  it("renders btn-block if fullWidth==true", () => {
    const wrapper = shallow(<Button fullWidth />)
    expect(wrapper.find('button').hasClass("btn-block")).toBe(true)
  })

  it("does not render btn-block if fullWidth is not set", () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button').hasClass("btn-block")).not.toBe(true)
  })

  it("renders custom classNames ", () => {
    const wrapper = shallow(<Button className="foo" />)
    expect(wrapper.find('button').hasClass("foo")).toBe(true)
  })

  it("has attribute disabled if disabled is set", () => {
    const wrapper = shallow(<Button disabled />)
    expect(wrapper.find('button').prop("disabled")).toBe(true)
  })

  it("p tag contains default classess", () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button p').hasClass("m-0")).toBe(true)
    expect(wrapper.find('button p').hasClass("text-wrap")).toBe(true)
  })
})

describe("Test Strings", () => {
  // Test strings
  it("renders prepend", () => {
    const wrapper = shallow(<Button prepend="prepend"/>)
    expect(wrapper.find('button').text()).toContain("prepend")
  })

  it("renders title", () => {
    const wrapper = shallow(<Button title="title"/>)
    expect(wrapper.find('button').text()).toContain("title")
  })

  it("renders subtitle", () => {
    const wrapper = shallow(<Button subtitle="subtitle"/>)
    expect(wrapper.find('button').text()).toContain("subtitle")
  })

  it("renders append", () => {
    const wrapper = shallow(<Button append="append"/>)
    expect(wrapper.find('button').text()).toContain("append")
  })
})

describe("Test nextLink", () => {
  // Test nextLink
  it("renders next Link", () => {
    const wrapper = shallow(<Button nextLink="/nextLink"/>)
    expect(wrapper.find("Link").prop("to")).toBe("/nextLink")
  })
})

