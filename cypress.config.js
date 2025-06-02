import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    env: {
      API_URL: "https://api.clickup.com/api/v2",
      TEAM_ID: "90151244811",
      TOKEN: "pk_200540491_JF747JSA50120BFLS6W7U8ETGOF9HG9V",
      allureLogCypress: false,
      allureReuseAfterSpec: true,
    },
    async setupNodeEvents(on, config) {
      const allureWriter = (await import('@shelex/cypress-allure-plugin/writer.js')).default;
      allureWriter(on, config);
      return config;
    },
  },
});