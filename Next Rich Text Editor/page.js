"use client"

// Way 1
/*
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function MyComponent() {
  const [value, setValue] = useState('');
  const handel = (e) => {
    console.log(e)
    setValue(e);
  }
  return <ReactQuill theme="snow" value={value} onChange={handel} />;
}
export default MyComponent;
*/
// ================================================================

//Way 2

import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function MyComponent() {
  const [value, setValue] = useState('');

  // Load content from localStorage when component mounts
  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setValue(savedContent);
    }
  }, []);

  // Save content to localStorage on change
  const handleOnChange = (content, delta, source, editor) => {
    setValue(content);
    console.log(content);
    localStorage.setItem('editorContent', content);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['link', 'image', 'code-block', 'video'],
      [{ 'color': [] }, { 'background': [] }],
      // [{ 'size': ['small', 'large', 'huge', false] }], // Font size options
      [{ 'script': 'sub' }, { 'script': 'super' }],
      ['clean']
    ],
  };


  // without toolbar
  // const modules = {
  //   toolbar: false
  // };


  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'align',
    'list', 'bullet', 'link', 'image', 'code-block', 'color', 'background', 'video'
  ];

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleOnChange}
        modules={modules}
        formats={formats}
      />

    </>
  );
}

export default MyComponent;




// =============================================================

// Way 3
/*
import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.snow.css';

const Editor = () => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} }
  });

  if (Quill && !quill) {
    // const BlotFormatter = require('quill-blot-formatter');
    Quill.register('modules/blotFormatter', BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldContents) => {
        console.log('Text change!');
        console.log(delta);

        let currrentContents = quill.getContents();
        console.log(currrentContents.diff(oldContents));
      });
    }
  }, [quill, Quill]);

  return (
    <div>
      <div ref={quillRef} />
    </div>
  );
};
export default Editor;
*/



// ========================================================

// Way 4
/*
import { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';


Quill.register('modules/imageResize', ImageResize);


class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
    console.log(html);
  }

  render() {
    return (
      <ReactQuill
        theme={this.state.theme}
        onChange={this.handleChange}
        value={this.state.editorHtml}
        modules={Editor.modules}
        formats={Editor.formats}
        bounds={'#root'}
        placeholder={this.props.placeholder}
      />
    );
  }
}


//  * Quill modules to attach to editor
//  * See https://quilljs.com/docs/modules/ for complete options

Editor.modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'align': [] }],
    ['link', 'image', 'code-block', 'video'],
    [{ 'color': [] }, { 'background': [] }],
    // [{ 'size': ['small', 'large', 'huge', false] }], // Font size options
    [{ 'script': 'sub' }, { 'script': 'super' }],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  },
  imageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize']
  }
};

Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'align',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'code-block',
  'color',
  'background'
];

export default Editor;

*/


// ========================================================


// Way 5 
/*

import React, { useState, useEffect } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);

const Editor = ({ placeholder }) => {
  const [editorHtml, setEditorHtml] = useState('');

  // Load content from local storage on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setEditorHtml(savedContent);
    }
  }, []);


  const handleChange = (html) => {
    setEditorHtml(html);
    // console.log(html);
    localStorage.setItem('editorContent', html);
  };



  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['link', 'image', 'code-block', 'video'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      ['clean']
    ],
    clipboard: {
      matchVisual: false
    },
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
    }
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'code-block',
    'color',
    'background'
  ];

  return (
    <ReactQuill
      theme="snow"
      onChange={handleChange}
      value={editorHtml}
      modules={modules}
      formats={formats}
      bounds={'#root'}
      placeholder={placeholder}
    />
  );
};

export default Editor;

*/


// ========================================================