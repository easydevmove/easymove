import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 26V6H18V10H10V14H18V18H10V22H18V26H6Z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M20 6H26L20 16V6Z"
        fill="hsl(var(--accent))"
      />
      <path
        d="M20 26H26L20 16V26Z"
        fill="hsl(var(--accent))"
      />
    </svg>
  );
}
