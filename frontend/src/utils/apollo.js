import React from "react";

export const withStaticProps = staticProps => Component => props => (
  <Component {...props} {...staticProps} />
);
