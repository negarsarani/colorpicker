import { useEffect, useState } from 'react';

const textColor = (item = '#ffffff') => {
  let textColors: string = item
  const rgbColor = hexToRgb(item);

  const relativeLuminance = calculateRelativeLuminance(rgbColor);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  relativeLuminance > 0.5 ? (textColors = '#000000') : (textColors = '#FFFFFF');

  return textColors;
};

function hexToRgb(hexColor: string): { r: number; g: number; b: number } {
  const hex = hexColor.replace('#', '');

  if (hex.length !== 3 && hex.length !== 6) {
    throw new Error('Invalid hex color value');
  }

  const numericValue = parseInt(hex, 16);

  if (hex.length === 3) {
    // Expand shorthand notation (e.g. #abc => #aabbcc)
    const r = (numericValue >> 8) & 0xf;
    const g = (numericValue >> 4) & 0xf;
    const b = numericValue & 0xf;

    return {
      r: (r << 4) | r,
      g: (g << 4) | g,
      b: (b << 4) | b,
    };
  } else {
    return {
      r: (numericValue >> 16) & 0xff,
      g: (numericValue >> 8) & 0xff,
      b: numericValue & 0xff,
    };
  }
}

function calculateRelativeLuminance({
  r,
  g,
  b,
}: {
  r: number;
  g: number;
  b: number;
}): number {
  const sRGB = [r, g, b].map((value) => {
    const normalized = value / 255;

    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });

  return sRGB[0] * 0.2126 + sRGB[1] * 0.7152 + sRGB[2] * 0.0722;
}

export default textColor;
