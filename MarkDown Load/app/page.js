"use client"
import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const App = () => {
  return (
    <div>
      <h1>Markdown File Viewer</h1>
      <MarkdownRenderer filePath="./sample.md" />
    </div>
  );
};

export default App;
