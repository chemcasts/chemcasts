import React from "react";
import ReactMarkdown from "react-markdown";
import ReamarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const Markdown = ({ markdown }) => {
  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[ReamarkGfm]}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    />
  );
};

export default Markdown;
