import { rem } from '../src'

describe('rem', () => {
  it('should return the correct rem value', () => {
    expect(rem(16)).toBe('1rem')
    expect(rem(32)).toBe('2rem')
  })
})
