import React from "react";
import "./App.scss";
import { MarkdownToMatrix } from 'react-markdown-to-matrix';

function App() {

  return (
    <MarkdownToMatrix
      title='TrustLayer Engineering'
      subtitle='Competency Explorer'
      enabledOptions={['diff', 'filters', 'displayMode']}
      fileUrls={['README.md', { url: 'managers.md', hideByDefault: true }]}
      excludeHeaders={['FAQ']}
      customTheme={{
        light: '#FFFFFF',
        lightTheme: '#FFFFFF',
        darkTheme: '#051424',
        dark: `#051424`
      }}
    />
  );
}

export default App;
