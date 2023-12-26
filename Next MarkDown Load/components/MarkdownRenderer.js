// MarkdownRenderer.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdownFile = async () => {
      try {
        const response = await fetch(filePath);
        const content = await response.text();
        setMarkdownContent(content);
      } catch (error) {
        console.error('Error loading Markdown file:', error);
      }
    };

    fetchMarkdownFile();
  }, [filePath]);

  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
