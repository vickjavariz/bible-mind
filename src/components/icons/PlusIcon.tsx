import type { SVGProps } from "react";

export default function SvgPlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M11 17v4h2v-8h8v-2h-8V3h-2v8H3v2h8z" />
    </svg>
  );
}
