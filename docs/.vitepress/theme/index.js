import DefaultTheme from "vitepress/theme";
import HomeDataCards from "./components/HomeDataCards.vue";
import PricingExplorer from "./components/PricingExplorer.vue";
import "./styles.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("HomeDataCards", HomeDataCards);
    app.component("PricingExplorer", PricingExplorer);
  },
};
