import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  server: {
    port: 3000,
  },
  base: "/Nature-of-code-Blog/",
  build: {
    outDir: "../docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        RandomWalk: resolve(__dirname, "src/Random Walk/index.html"),
        Noise: resolve(__dirname, "src/Noise/index.html"),
        Forces: resolve(__dirname, "src/Forces/index.html"),
        Oscillation: resolve(__dirname, "src/Oscillation/index.html"),
        Systems: resolve(__dirname, "src/Systems/index.html"),
        Simulation: resolve(__dirname, "src/Simulation/index.html"),
      },
    },
  },
  publicDir: resolve(__dirname, "public"),
});
