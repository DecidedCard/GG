import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(popover|spinner).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        union: "url('/assets/maple/union_raider_map.svg')",
      },
      gridTemplateRows: {
        "20": "repeat(20, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        "22": "repeat(22, minmax(0, 1fr))",
      },
      fontFamily: {
        Pretendard: ["Pretendard", "sans-serif"],
        DungGeunMo: ["DungGeunMo", "sans-serif"],
      },
      fontSize: {
        "title/12px": ["12px", { lineHeight: "110%", fontWeight: "700" }],
        "title/16px": ["16px", { lineHeight: "110%", fontWeight: "700" }],
        "title/20px": ["20px", { lineHeight: "110%", fontWeight: "700" }],
        "title/24px": ["24px", { lineHeight: "110%", fontWeight: "700" }],
        "title/28px": ["28px", { lineHeight: "110%", fontWeight: "700" }],
        "title/32px": ["32px", { lineHeight: "110%", fontWeight: "700" }],
        "title/40px": ["40px", { lineHeight: "110%", fontWeight: "700" }],
        "title/48px": ["48px", { lineHeight: "110%", fontWeight: "700" }],
        "body/8px": ["8px", { lineHeight: "100%", fontWeight: "400" }],
        "body/10px": ["10px", { lineHeight: "100%", fontWeight: "400" }],
        "body/14px": ["14px", { lineHeight: "100%", fontWeight: "400" }],
        "body/18px": ["18px", { lineHeight: "100%", fontWeight: "400" }],
        "body/22px": ["22px", { lineHeight: "100%", fontWeight: "400" }],
        "body/26px": ["26px", { lineHeight: "100%", fontWeight: "400" }],
      },
      colors: {
        primary: {
          100: "#0077C2",
          200: "#59a5f5",
        },
        secondary: {
          100: "#333333",
          200: "#5c5c5c",
          300: "#cccbc8",
        },
      },
      screens: {
        lg: { min: "900.01px", max: "1280px" },
        md: { min: "480.01px", max: "900px" },
        sm: { max: "480px" },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
