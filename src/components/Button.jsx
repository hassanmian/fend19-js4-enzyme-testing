import React from "react"
import { Link } from "react-router-dom"

export default function Button({
  prepend,
  title,
  subtitle,
  append,
  fullWidth,
  size,
  colorScheme,
  onClick,
  nextLink,
  disabled,
  id,
  ...props
}) {
  const getSize = () => {
    if (size === "lg") {
      return "btn-lg"
    }
    return ""
  }

  const getColorScheme = () => {
    if (colorScheme === "purple") {
      return "btn-primary"
    }
    if (colorScheme === "outlinedPurple") {
      return "btn-outline-primary"
    }
    if (colorScheme === "gray") {
      return "btn-outline-gray"
    }
    if (colorScheme === "white") {
      return "btn-outline-white"
    }
    if (colorScheme === "light-purple") {
      return "btn-light-purple"
    }
    return "btn-primary"
  }

  function handleOnClick() {
    if (onClick && !disabled) {
      onClick()
    }
  }

  function renderButton() {
    return (
      <button
        onClick={() => {
          handleOnClick()
        }}
        className={`button-component
        btn 
        ${getColorScheme()} 
        ${fullWidth ? "btn-block" : ""}
        ${getSize()}
        ${props.className || ""}
        `}
        disabled={disabled}
      >
        <p className={`m-0 text-wrap`}>
          {prepend} {title} <span className="subtitle">{subtitle}</span>{" "}
          {append}
        </p>
      </button>
    )
  }

  function renderComponent() {
    if (nextLink) {
      return <Link to={!disabled && nextLink}>{renderButton()}</Link>
    } else {
      return renderButton()
    }
  }

  return renderComponent()
}
