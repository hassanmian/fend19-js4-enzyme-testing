import Button from '../Button'
import { shallow } from 'enzyme'

describe("Test getSize", () => {
  it("contains btn-lg class if size==lg", () => {
    const wrapper = shallow(<Button size="lg"/>)
    expect(wrapper.find("button").hasClass('btn-lg')).toBe(true)
  })

  it("does not contain btn-lg when size is not set", () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find("button").hasClass('btn-lg')).not.toBe(true)
  })
})

describe("Test getColorScheme", () => {
  it("has class btn-primary when colorScheme==purple", () => {
    const wrapper = shallow(<Button colorScheme="purple"/>)
    expect(wrapper.find("button").hasClass('btn-primary')).toBe(true)
  })
  it("has class btn-outline-primary when colorScheme==outlinedPurple", () => {
    const wrapper = shallow(<Button colorScheme="outlinedPurple"/>)
    expect(wrapper.find("button").hasClass('btn-outline-primary')).toBe(true)
  })
  it("has class btn-outline-gray when colorScheme==gray", () => {
    const wrapper = shallow(<Button colorScheme="gray"/>)
    expect(wrapper.find("button").hasClass('btn-outline-gray')).toBe(true)
  })
  it("has class btn-outline-white when colorScheme==white", () => {
    const wrapper = shallow(<Button colorScheme="white"/>)
    expect(wrapper.find("button").hasClass('btn-outline-white')).toBe(true)
  })
  it("has class btn-light-purple when colorScheme==light-purple", () => {
    const wrapper = shallow(<Button colorScheme="light-purple"/>)
    expect(wrapper.find("button").hasClass('btn-light-purple')).toBe(true)
  })
  it("has class btn-primary when colorScheme is not set", () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find("button").hasClass('btn-primary')).toBe(true)
  })
})

describe("Test handleOnClick", () => {
  it("triggers onClick if onClick is set", () => {
    let counter = 0
    const wrapper = shallow(<Button onClick={() => counter++}/>)
    wrapper.simulate("click")
    expect(counter).toBe(1)
  })

  it("does not trigger onClick if disabled is set", () => {
    let counter = 0
    const wrapper = shallow(<Button disabled onClick={() => counter++}/>)
    wrapper.simulate("click")
    expect(counter).toBe(0)
  })
})

describe("Test renderButton", () => {
  it("renders default classes", () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find("button").hasClass('button-component')).toBe(true)
    expect(wrapper.find("button").hasClass('btn')).toBe(true)
  })
  it("renders btn-block if fullWidth is set", () => {
    const wrapper = shallow(<Button fullWidth />)
    expect(wrapper.find("button").hasClass('btn-block')).toBe(true)
  })
  it("renders classnames correctly", () => {
    const wrapper = shallow(<Button className="foo" />)
    expect(wrapper.find("button").hasClass('foo')).toBe(true)
  })
  it("sets disabled prop correctly", () => {
    const wrapper = shallow(<Button disabled />)
    expect(wrapper.find("button").prop('disabled')).toBe(true)
  })
  it("p tag contains default classes", () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find("button p").hasClass('m-0')).toBe(true)
    expect(wrapper.find("button p").hasClass('text-wrap')).toBe(true)
  })
})


describe("Test Strings", () => {
  it("renders prepend correctly", () => {
    const wrapper = shallow(<Button prepend="prepend"/>)
    expect(wrapper.find("button").text()).toContain("prepend")
  })
  it("renders title correctly", () => {
    const wrapper = shallow(<Button title="title"/>)
    expect(wrapper.find("button").text()).toContain("title")
  })
  it("renders subtitle correctly", () => {
    const wrapper = shallow(<Button subtitle="subtitle"/>)
    expect(wrapper.find("button span.subtitle").text()).toContain("subtitle")
  })
  it("renders append correctly", () => {
    const wrapper = shallow(<Button append="append"/>)
    expect(wrapper.find("button").text()).toContain("append")
  })
})

describe("Test renderComponent", () => {
  it("renders Link when nextLink is set", () => {
    const wrapper = shallow(<Button nextLink="/login"/>)
    expect(wrapper.find("Link").prop("to")).toBe("/login")
  })
  it("renders Link but not nextLink when disabled is set", () => {
    const wrapper = shallow(<Button disabled nextLink="/login"/>)
    expect(wrapper.find("Link").prop("to")).not.toBe("/login")
  })
})

