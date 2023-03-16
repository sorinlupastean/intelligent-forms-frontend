import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function RichTextEditor() {
  return (
    <ReactQuill
      theme="snow"
      formats={[
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
      ]}
    />
  );
}

export default RichTextEditor;
