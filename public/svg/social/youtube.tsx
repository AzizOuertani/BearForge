import * as React from "react";

export const YouTubeLogo = (props: React.SVGProps<SVGSVGElement>) => (
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
        d="M40.317 0h-40v40h40V0Zm-5.618 12.453a3.759 3.759 0 0 0-2.644-2.644c-2.348-.642-11.738-.642-11.738-.642s-9.39 0-11.738.618a3.836 3.836 0 0 0-2.644 2.668c-.618 2.348-.618 7.216-.618 7.216s0 4.893.618 7.216a3.759 3.759 0 0 0 2.644 2.644c2.372.643 11.738.643 11.738.643s9.39 0 11.738-.618a3.76 3.76 0 0 0 2.644-2.644c.618-2.348.618-7.216.618-7.216s.025-4.893-.618-7.24ZM17.327 23.995l7.809-4.497L17.326 15v8.995Z"
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
