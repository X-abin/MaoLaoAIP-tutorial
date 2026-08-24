import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import BackToTopButton from "./components/BackToTopButton.vue";
import HomeDataCards from "./components/HomeDataCards.vue";
import ReadingProgress from "./components/ReadingProgress.vue";
import "./styles.css";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () => h(ReadingProgress, { variant: "bar" }),
      "nav-bar-content-after": () => h(BackToTopButton),
      "aside-top": () => h(ReadingProgress, { variant: "card" }),
    });
  },
  enhanceApp({ app }) {
    app.component("HomeDataCards", HomeDataCards);
  },
};
