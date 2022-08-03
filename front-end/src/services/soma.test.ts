import { soma } from "./soma"

describe('soma', () => {
  it('deve somar dois números', () => {
    const resultado = soma(2, 4)
    expect(resultado).toBe(6)
  })
  
  it('deve somar outros dois números', () => {
    const resultado = soma(2, 3)
    expect(resultado).toBe(5)
  })
})
