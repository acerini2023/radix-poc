import { ESLint } from "eslint";

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map((file) => eslint.isPathIgnored(file)),
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);
  return filteredFiles.join(" ");
};

export default {
  "**/*.{ts,tsx,js,jsx}": async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return `eslint --fix --report-unused-disable-directives --max-warnings=0 ${filesToLint}`;
  },
  "*.{ts,tsx,js,jsx,json,css}": "prettier --write",
  "*.css": "stylelint --fix",
};
