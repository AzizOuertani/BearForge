import React, { SVGProps } from "react";

export const TwitterLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={41}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 0H0V40H40V0ZM33.086 6L22.6629 17.856L34 34H25.6624L18.0268 23.128L8.47041 34H6L16.9316 21.568L6 6H14.3376L21.5677 16.294L30.6155 6H33.086ZM18.1729 20.154L19.2805 21.704L26.8235 32.264H30.6176L21.3721 19.324L20.2645 17.774L13.1539 7.82H9.35975L18.1729 20.154Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width="40" height="40" rx="8" fill="none" />
      </clipPath>
    </defs>
  </svg>
);
