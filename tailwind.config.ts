import type { Config } from 'tailwindcss';
export default {
  theme: {
    extend: {
      colors: {
        primary: "#6867C5",
      },
      container: {
        center: true,
        screens: {
          sm: "470px",
          md: "598px",
          lg: "854px",
          xl: "1110px",
        }
      }
    }
  }
}
