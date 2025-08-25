import React from 'react';

type SpeechBubblePropsBase = {
  tail?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
  variant?: 'default' | 'comic';
};

/**
 * Pure CSS speech bubble. The bubble resizes with its text and keeps the tail aligned.
 * Avoids images to satisfy PRD requirements.
 */
export default function SpeechBubble({ children, tail = 'left', variant = 'default', className }: React.PropsWithChildren<SpeechBubblePropsBase>) {
  return (
    <div
      className={`speech-bubble rounded-xl bg-white/95 text-gray-900 shadow-md px-3 py-2 leading-snug ${className ?? ''}`}
      data-tail={tail}
      data-variant={variant}
    >
      <span className="block text-sm md:text-base">{children}</span>
    </div>
  );
}


