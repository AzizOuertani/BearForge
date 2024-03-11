import React, { SVGProps } from "react";

export const TwitchLogo = (props: SVGProps<SVGSVGElement>) => (
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
        d="M40.317 0h-40v40h40V0ZM13.552 6.47 8.72 11.302v17.396h5.798v4.832l4.833-4.832h3.865L31.914 20V6.47H13.552Zm16.43 12.564-3.866 3.865H22.25l-3.383 3.383v-3.383h-4.349V8.403h15.463v10.63Zm-2.9-7.249H25.15v5.799h1.933v-5.799Zm-7.248 0h1.933v5.799h-1.933v-5.799Z"
        fill="currentColor"
      />
    </g>
    <path
      d="M8.317 1h24v-2h-24v2Zm31 7v24h2V8h-2Zm-7 31h-24v2h24v-2Zm-31-7V8h-2v24h2Zm7 7a7 7 0 0 1-7-7h-2a9 9 0 0 0 9 9v-2Zm31-7a7 7 0 0 1-7 7v2a9 9 0 0 0 9-9h-2Zm-7-31a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9v2Zm-24-2a9 9 0 0 0-9 9h2a7 7 0 0 1 7-7v-2Z"
      fill="none"
    />
    <defs>
      <clipPath id="a">
        <path
          d="M.317 8a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8h-24a8 8 0 0 1-8-8V8Z"
          fill="none"
        />
      </clipPath>
    </defs>
  </svg>
);
