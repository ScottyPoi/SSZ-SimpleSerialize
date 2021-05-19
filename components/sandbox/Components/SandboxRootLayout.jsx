import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CustomCodeBlock from './CustomCodeBlock';

export default function rootLayout({ children }) {
  return (
    <MDXProvider
      components={{
        code: (props) => <CustomCodeBlock {...props} />,
      }}
    >
      {children}
    </MDXProvider>
  );
}