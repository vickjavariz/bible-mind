import type { ComponentProps } from "react";

export default function PageContent({
  children,
  className,
  ...rest
}: ComponentProps<"div">) {
  const mergedClassName = `flex flex-col flex-1 w-full max-w-6xl mx-auto px-4 pt-4 pb-16 md:px-6 md:pb-4 lg:px-8 ${className || ""}`;

  return (
    <div className={mergedClassName} {...rest}>
      {children}
    </div>
  );
}
