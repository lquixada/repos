import {addSeparator, extractNext, extractTotal} from '../strings'

describe('Helpers (String)', () => {
  describe('addSeparator', () => {
    describe('adds separator', () => {
      it('to a four-digit number', () => {
        expect(addSeparator(1234)).toBe('1.234')
        expect(addSeparator('1234')).toBe('1.234')
      })

      it('to a seven-digit number', () => {
        expect(addSeparator(1234567)).toBe('1.234.567')
        expect(addSeparator('1234567')).toBe('1.234.567')
      })

      it('to a ten-digit number', () => {
        expect(addSeparator(1234567890)).toBe('1.234.567.890')
        expect(addSeparator('1234567890')).toBe('1.234.567.890')
      })
    })

    describe('doesn\'t add separator', () => {
      it('to a one-digit number', () => {
        expect(addSeparator(1)).toBe('1')
        expect(addSeparator('1')).toBe('1')
      })

      it('to a two-digit number', () => {
        expect(addSeparator(12)).toBe('12')
        expect(addSeparator('12')).toBe('12')
      })

      it('to a three-digit number', () => {
        expect(addSeparator(123)).toBe('123')
        expect(addSeparator('123')).toBe('123')
      })
    })

    describe('invalid values', () => {
      it('returns zero if undefined is given', () => {
        expect(addSeparator(undefined)).toBe('0')
      })

      it('returns zero if null is given', () => {
        expect(addSeparator(null)).toBe('0')
      })

      it('returns zero if any object is given', () => {
        expect(addSeparator({})).toBe('0')
      })
    })
  })

  describe('extractNext', () => {
    it('extract the next url from Link header', () => {
      const header = [
        '<https://api.github.com/repos/?page=2>; rel="next"',
        '<https://api.github.com/repos/?page=5>; rel="last"'
      ].join(', ')
      expect(extractNext(header)).toBe('https://api.github.com/repos/?page=2')
    })

    it('returns empty if there is no next url', () => {
      const header = [
        '<https://api.github.com/repos/?page=2>; rel="prev"',
        '<https://api.github.com/repos/?page=5>; rel="last"'
      ].join(', ')
      expect(extractNext(header)).toBe('')
    })

    it('returns empty if no url is provided', () => {
      const header = [
        '; rel="next"',
        '; rel="last"'
      ].join(', ')
      expect(extractNext(header)).toBe('')
    })

    it('returns empty if no header is provided', () => {
      expect(extractNext(undefined)).toBe('')
      expect(extractNext(null)).toBe('')
    })
  })

  describe('extractTotal', () => {
    it('extract total pages from Link header\'s last url', () => {
      const header = [
        '<https://api.github.com/repos/?page=2>; rel="prev"',
        '<https://api.github.com/repos/?page=5>; rel="last"'
      ].join(', ')
      expect(extractTotal(header)).toBe(5)
    })

    it('returns zero if there is no last url on Link header', () => {
      const header = [
        '<https://api.github.com/repos/?page=2>; rel="prev"',
        '<https://api.github.com/repos/?page=5>; rel="next"'
      ].join(', ')
      expect(extractTotal(header)).toBe(0)
    })

    it('returns zero if no page is provided', () => {
      const header = [
        '<https://api.github.com/repos/>; rel="prev"',
        '<https://api.github.com/repos/>; rel="last"'
      ].join(', ')

      expect(extractTotal(header)).toBe(0)
    })

    it('returns zero if no header is provided', () => {
      expect(extractTotal(undefined)).toBe(0)
      expect(extractTotal(null)).toBe(0)
    })
  })
})
