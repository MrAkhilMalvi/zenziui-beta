import { defineConfig } from "tsup";
import path from "path";

export default defineConfig({
  entry: ["../components/zenziui/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  tsconfig: "./tsconfig.json",
});
