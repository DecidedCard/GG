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
          100: "#0D6E6E",
          200: "#4a9d9c",
          300: "#afffff",
        },
        accent: {
          100: "#FF3D3D",
          200: "#ffe0c8",
          300: "#e51e1b",
        },
        text: {
          100: "#FFFFFF",
          200: "#e0e0e0",
        },
        bg: {
          100: "#0D1F2D",
          200: "#1d2e3d",
          300: "#354656",
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
