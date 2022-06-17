import { defineConfig, PluginOption, searchForWorkspaceRoot } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), watchStoryFileUpdates()],
  server: {
    fs: {
      strict: false,
    },
  },
});

export function watchStoryFileUpdates(): PluginOption {
  const pluginOption: PluginOption = {
    name: "ocular-watch-story-file-updates",
    configureServer: (server) => {
      const handleFileChange = () => {
        server.ws.send({ type: "full-reload" });
      };

      server.watcher.on("add", handleFileChange);
      server.watcher.on("unlink", handleFileChange);
    },
  };

  return pluginOption;
}
