import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ooo: {
          bmo: "#47CFB8",
          bmoDark: "#238070",
          bmoScreen: "#C7F5EE",
          bmoScreenDark: "#85D9CA",
          marceline: "#E03668",
          marcelineDark: "#60142C",
          moss: "#528561",
          mossLight: "#95CE9C",
          mossPale: "#D4ECD8",
          relic: "#D8DED9",
          relicDark: "#8C9691",
          cosmic: "#1C2230",
          cosmicMuted: "#46526B",
          cassette: "#FFF8EA",
          cassetteDark: "#F0E3C7",
          electricMint: "#3CF0A2",
          electricPink: "#FF478B",
          solarGold: "#FFD642",
          skyPastel: "#BDECF0",
          skyDusk: "#D3EFF5",
        },
        pastel: {
          sky: "#A8E6F0",
          skyLight: "#DDF8FA",
          pink: "#FFB6D9",
          pinkCoral: "#FF91B3",
          cream: "#FFF8E8",
          creamLight: "#FFFCF4",
          yellow: "#FFE9A8",
          mint: "#BDECCB",
          mintLight: "#E8F8EE",
          lavender: "#CBBDF4",
          navy: "#1C2230",
          navyMuted: "#46526B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        relic: "4px 4px 0px #1C2230",
        "relic-hover": "6px 6px 0px #1C2230",
        "relic-sm": "2px 2px 0px #1C2230",
        "relic-neon": "4px 4px 0px #1C2230, 0 0 16px rgba(71, 207, 184, 0.35)",
        "marceline-neon": "4px 4px 0px #1C2230, 0 0 16px rgba(224, 54, 104, 0.35)",
        adventure: "4px 4px 0px #1C2230",
        "adventure-hover": "6px 6px 0px #1C2230",
        "adventure-sm": "2px 2px 0px #1C2230",
      },
      animation: {
        "float-slow": "float 5s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "bmo-blink": "bmoBlink 4s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        bmoBlink: {
          "0%, 94%, 100%": { transform: "scaleY(1)" },
          "96%": { transform: "scaleY(0.1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
