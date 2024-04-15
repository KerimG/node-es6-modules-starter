import styleGuide from "eslint-config-standard";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";


export default [
  ...[].concat(styleGuide),
  eslintPluginPrettierRecommended,
];
