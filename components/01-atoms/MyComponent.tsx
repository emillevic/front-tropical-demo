import React from "react";

interface MyComponentInterface {
  className?: string;
}

const MyComponent = ({
  className = "bg-sky-500",
  children,
}: React.PropsWithChildren<MyComponentInterface>) => {
  return <div className={className}>{children}</div>;
};

export default MyComponent;
