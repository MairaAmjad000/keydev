import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

const eslintConfig = [
  // Build output and vendored third-party scripts must not be linted.
  { ignores: ['.next/**', 'out/**', 'node_modules/**', 'public/**', 'next-env.d.ts', '*.tsbuildinfo'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    // The section markup was converted 1:1 from the original HTML and its images are
    // handled by slick/jQuery, so plain <img> is intentional here.
    files: ['src/components/**/*.tsx'],
    rules: { '@next/next/no-img-element': 'off' },
  },
];

export default eslintConfig;
