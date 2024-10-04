import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard", "sans-serif"],
      },
      fontSize: {
        "title/28px": ["28px", { lineHeight: "110%", fontWeight: "700" }],
        "title/32px": ["32px", { lineHeight: "110%", fontWeight: "700" }],
        "title/40px": ["40px", { lineHeight: "110%", fontWeight: "700" }],
        "title/48px": ["48px", { lineHeight: "110%", fontWeight: "700" }],
        "body/10px": ["10px", { lineHeight: "100%", fontWeight: "400" }],
        "body/14px": ["14px", { lineHeight: "100%", fontWeight: "400" }],
        "body/18px": ["18px", { lineHeight: "100%", fontWeight: "400" }],
        "body/22px": ["22px", { lineHeight: "100%", fontWeight: "400" }],
        "body/26px": ["26px", { lineHeight: "100%", fontWeight: "400" }],
      },
      screens: {
        md: { max: "1200px" },
      },
    },
  },
  plugins: [],
};
export default config;
