import {extractTotal} from '../repos-contributors-count';

describe('Helpers (ReposContributorsCount)', () => {
  describe('extractTotal', () => {
    it('extract total pages from Link header\'s last url', () => {
      const header = `
        <https://api.github.com/repos/?page=2>; rel="next",
        <https://api.github.com/repos/?page=5>; rel="last"
      `;
      expect(extractTotal(header)).toBe(5);
    });

    it('returns zero if there is no last url on Link header', () => {
      const header = `
        <https://api.github.com/repos/?page=2>; rel="prev",
        <https://api.github.com/repos/?page=5>; rel="next"
      `;
      expect(extractTotal(header)).toBe(0);
    });

    it('returns zero if no header is provided', () => {
      expect(extractTotal(undefined)).toBe(0);
      expect(extractTotal(null)).toBe(0);
    });
  });
});
