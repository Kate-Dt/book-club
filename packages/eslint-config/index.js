/** @type {import("eslint").Linter.Config} */
export default {
root: false,
extends: [
"next/core-web-vitals",
"eslint:recommended"],
parserOptions: {
ecmaVersion: 2022,
sourceType: "module"
},
rules: {
"@next/next/no-html-link-for-pages": "off"
}
};