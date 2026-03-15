"use client";

import Script from "next/script";

export default function CalendlyEmbed() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/optinext/30min"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </>
  );
}
