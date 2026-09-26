import type { Service } from "@/data/services";

const paths: Record<Service["icon"], React.ReactNode> = {
  ai: (
    <>
      <circle cx="12" cy="5.5" r="2.1" fill="currentColor" />
      <circle cx="5.5" cy="16.5" r="2.1" fill="currentColor" />
      <circle cx="18.5" cy="16.5" r="2.1" fill="currentColor" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M12 7.6v2M7.2 15.1l2.6-2.1M16.8 15.1l-2.6-2.1"
      />
    </>
  ),
  fullstack: (
    <>
      <path
        fill="currentColor"
        d="M4.2 7.2 12 3.5l7.8 3.7v1.6L12 5.2 4.2 8.8V7.2Zm0 4.6L12 8.1l7.8 3.7v1.6L12 9.8 4.2 13.4v-1.6Zm0 4.6L12 12.7l7.8 3.7v1.6L12 14.4 4.2 18v-1.6Z"
      />
    </>
  ),
  mobile: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.2 2.5h7.6c1.1 0 2 .9 2 2v15c0 1.1-.9 2-2 2H8.2c-1.1 0-2-.9-2-2v-15c0-1.1.9-2 2-2Zm0 1.5c-.3 0-.5.2-.5.5v15c0 .3.2.5.5.5h7.6c.3 0 .5-.2.5-.5v-15c0-.3-.2-.5-.5-.5H8.2Zm2.3 14.2h3v1.2h-3v-1.2Z"
        clipRule="evenodd"
      />
    </>
  ),
  design: (
    <>
      <path
        fill="currentColor"
        d="M12 3.2a8.8 8.8 0 1 1 0 17.6 8.8 8.8 0 0 1 0-17.6Zm0 1.6a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4Zm0 3.1a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 1.5a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Z"
      />
    </>
  ),
  staff: (
    <>
      <path
        fill="currentColor"
        d="M9.2 6.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Zm6.4 1.2a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM4.5 18.8c0-2.9 2.4-5.1 4.7-5.1h.1c1.2 0 2.3.5 3.1 1.3.7-.5 1.6-.8 2.6-.8 2.1 0 3.8 1.6 4 3.6v.1c0 .5-.4.9-.9.9H5.4c-.5 0-.9-.4-.9-.9v-.1Z"
      />
    </>
  ),
  cloud: (
    <>
      <path
        fill="currentColor"
        d="M7.4 17.8h10c2.1 0 3.8-1.7 3.8-3.7 0-1.9-1.4-3.4-3.3-3.7-.5-2.4-2.6-4.2-5.2-4.2-2.3 0-4.2 1.4-5 3.5-2 .3-3.5 2-3.5 4 0 2.3 1.9 4.1 4.2 4.1Z"
      />
    </>
  ),
  strategy: (
    <>
      <path
        fill="currentColor"
        d="M4 18.5V5.5h1.6v11.4H4Zm3.2-3.2v3.2h1.6v-3.2H7.2Zm3.2-4v7.2h1.6V11.3h-1.6Zm3.2-3.2v10.4h1.6V8.1h-1.6Zm3.2-4v14.4H18V4.1h-1.2Z"
      />
    </>
  ),
  qa: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.2a8.8 8.8 0 1 1 0 17.6 8.8 8.8 0 0 1 0-17.6Zm0 1.6a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4Zm3.4 4.3-4.7 4.8-2.1-2.1-1.15 1.15 3.25 3.25 5.85-5.95L15.4 9.1Z"
        clipRule="evenodd"
      />
    </>
  ),
  data: (
    <>
      <path
        fill="currentColor"
        d="M4.5 6.2c0-1.7 3.4-3 7.5-3s7.5 1.3 7.5 3-3.4 3-7.5 3-7.5-1.3-7.5-3Zm0 3.8v2.2c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V10c-.8.9-3.6 1.8-7.5 1.8S5.3 10.9 4.5 10Zm0 5.2v2.2c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-2.2c-.8.9-3.6 1.8-7.5 1.8S5.3 16.1 4.5 15.2Z"
      />
    </>
  ),
};

export default function ServiceIcon({
  name,
  className = "",
}: {
  name: Service["icon"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
