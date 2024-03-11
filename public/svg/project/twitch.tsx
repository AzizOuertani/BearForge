import React, { SVGProps } from "react";

export const TwitchLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={49}
    height={49}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.317 8.5a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8v-32Z"
      fill="#fff"
    />
    <g clipPath="url(#a)">
      <path
        d="m12.371 9.651-1.966 5.16v20.632h7.205v3.871h3.933l3.929-3.87h5.895l7.862-7.736V9.651H12.371Zm2.619 2.578h21.62v14.187l-4.587 4.515h-7.206l-3.928 3.865v-3.865h-5.9V12.229Zm7.207 12.9h2.62V17.39h-2.62v7.737Zm7.205 0h2.62V17.39h-2.62v7.737Z"
        fill="#A645FF"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(10.405 9.651)"
          d="M0 0h28.824v29.697H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
