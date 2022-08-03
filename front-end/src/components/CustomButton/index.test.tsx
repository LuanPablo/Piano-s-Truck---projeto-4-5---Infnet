import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { CustomButton } from "."

describe('<CustomButton />', () => {
  it('should render button with text', () => {
    render(<CustomButton>Label</CustomButton>)
    expect(screen.getByRole('button')).toHaveTextContent('Label')
  })

  it('should call handle event on click', () => {
    const handleClick = jest.fn()
    render(<CustomButton onClick={handleClick}>Label</CustomButton>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toBeCalledTimes(1)
  })

  it('should render as a link if href is provided', () => {
    render(<CustomButton href='/url'>Label</CustomButton>)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/url')
  })

  it('should render as link if to is provided', () => {
    render(
      <BrowserRouter>
        <CustomButton to='/url'>Label</CustomButton>
      </BrowserRouter>
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', '/url')
  })

  it('should render loading if loading is true', () => {
    render(<CustomButton loading>Label</CustomButton>)
    const status = screen.getByRole('status')
    expect(status).toBeVisible()
    expect(status).toHaveTextContent('Carregando...')
  })

  it('should NOT render loading if loading is false', () => {
    render(<CustomButton loading={false}>Label</CustomButton>)
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('should NOT render loading if loading is not provided', () => {
    render(<CustomButton>Label</CustomButton>)
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('should disable button if disabled is true', () => {
    const handleClick = jest.fn()
    render(<CustomButton disabled onClick={handleClick}>Label</CustomButton>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(handleClick).toBeCalledTimes(0)
  })
})