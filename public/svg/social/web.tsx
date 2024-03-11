import React, { SVGProps } from "react";

export const WebLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40 0H0v40h40V0ZM14.6 18.91h-4.358a9.827 9.827 0 0 1 7.277-8.412 17.783 17.783 0 0 0-2.919 8.411Zm2.19 0A15.6 15.6 0 0 1 20 10.782a15.6 15.6 0 0 1 3.21 8.126h-6.42ZM20 29.216a15.6 15.6 0 0 0 3.21-8.126h-6.42A15.6 15.6 0 0 0 20 29.217Zm-9.758-8.126H14.6a17.783 17.783 0 0 0 2.919 8.411 9.827 9.827 0 0 1-7.277-8.411Zm15.158 0a17.783 17.783 0 0 1-2.919 8.411 9.827 9.827 0 0 0 7.277-8.411H25.4Zm0-2.182h4.358a9.827 9.827 0 0 0-7.277-8.411 17.783 17.783 0 0 1 2.919 8.411ZM20 8C13.373 8 8 13.373 8 20s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8Z"
      fill="currentColor"
    />
    <path
      d="M8 1h24v-2H8v2Zm31 7v24h2V8h-2Zm-7 31H8v2h24v-2ZM1 32V8h-2v24h2Zm7 7a7 7 0 0 1-7-7h-2a9 9 0 0 0 9 9v-2Zm31-7a7 7 0 0 1-7 7v2a9 9 0 0 0 9-9h-2ZM32 1a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9v2ZM8-1a9 9 0 0 0-9 9h2a7 7 0 0 1 7-7v-2Z"
      fill="none"
    />
  </svg>
);
