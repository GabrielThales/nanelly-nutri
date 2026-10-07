"use client";

import { trackEvent, type TrackedEvent } from "@/lib/analytics";

type Props = {
  href: string;
  event: TrackedEvent;
  location: string; // onde o botão está (hero, footer, floating...)
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

/** Link externo que dispara um evento do GA4 ao ser clicado. */
export default function TrackedLink({
  href, event, location, className, ariaLabel, children,
}: Props) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={className}
      onClick={() => trackEvent(event, { location })}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
