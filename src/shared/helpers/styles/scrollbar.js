
export const scrollbar = () => `
  ::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, .05);
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .3);
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-button {
    display: none;
    background-color: transparent;
  }

  ::-webkit-scrollbar-corner {
    background-color: #000;
  }
`
