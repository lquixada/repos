import {extractNext} from '../contributors';

describe('Helpers (Contributors)', () => {
  describe('extractNext', () => {
    it('extract the next url from Link header', () => {
      const header = `
        <https://api.github.com/repos/?page=2>; rel="next",
        <https://api.github.com/repos/?page=5>; rel="last"
      `;
      expect(extractNext(header)).toBe('https://api.github.com/repos/?page=2');
    });

    it('returns empty if there is no next url', () => {
      const header = `
        <https://api.github.com/repos/?page=2>; rel="prev",
        <https://api.github.com/repos/?page=5>; rel="last"
      `;
      expect(extractNext(header)).toBe('');
    });

    it('returns empty if no header is provided', () => {
      expect(extractNext(undefined)).toBe('');
      expect(extractNext(null)).toBe('');
    });
  });
});
