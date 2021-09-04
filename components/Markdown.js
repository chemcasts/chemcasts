import document from "next/document";
import React from "react";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import ReamarkGfm from "remark-gfm";
const Markdown = ({ markdown }) => {
  return <ReactMarkdown children={markdown} remarkPlugins={[ReamarkGfm]} />;
};

export default Markdown;
