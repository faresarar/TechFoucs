import React from 'react';
const parseAndStyleText = (text: string, style?: string) => {
  // Split text by {{ and }}
  const segments = text.split(/({{.*?}})/g);
  return segments.map((segment, index) => {
    if (segment.startsWith("{{") && segment.endsWith("}}")) {
      // Remove {{ and }} and get inner content
      const content = segment.slice(2, -2);
      return (
        <span
          key={index}
          className={style} // Tailwind classes for highlighted text
        >
          {content}
        </span>
      );
    }
    // Return regular text
    return <span key={index}>{segment}</span>;
  });
};

export { parseAndStyleText };
