import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
                colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        }
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)',
                        full: '9999px', // Add full for rounded-full
                },
                animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                        'gradient': 'gradient 2s ease infinite',
                        'grow-in': 'grow-in .2s cubic-bezier(.75, 0, 1, 1) forwards',
                        'bounce-in': 'bounce-in .2s cubic-bezier(0, 0, 0.3, 1.5) .2s forwards',
                        'grow-out': 'grow-out .2s cubic-bezier(.75, 0, 1, 1) forwards',
                        'bounce-out': 'bounce-out .2s cubic-bezier(0, 0, 0.3, 1.5) .2s forwards',
                },
                keyframes: {
                        float: {
                                '0%, 100%': { transform: 'translateY(0px)' },
                                '50%': { transform: 'translateY(-10px)' },
                        },
                        'pulse-glow': {
                                '0%, 100%': { boxShadow: '0 0 20px oklch(0.51 0.22 275 / 0.3)' },
                                '50%': { boxShadow: '0 0 30px oklch(0.51 0.22 275 / 0.6)' },
                        },
                        gradient: {
                                '0%': { backgroundPosition: '0% 50%' },
                                '50%': { backgroundPosition: '100% 50%' },
                                '100%': { backgroundPosition: '0% 50%' },
                        },
                        'grow-in': {
                            '0%': {
                                borderRadius: '11px',
                                transform: 'translateX(0) scale(1)',
                            },
                            '100%': {
                                borderRadius: `${(1 / (34 / 22) * 11)}px / ${(1 / (16 / 22) * 11)}px`,
                                transform: 'translateX(8px) scale(calc(34 / 22), calc(16 / 22))',
                            },
                        },
                        'bounce-in': {
                            '0%': {
                                borderRadius: `${(1 / (34 / 22) * 11)}px / ${(1 / (16 / 22) * 11)}px`,
                                transform: 'translateX(8px) scale(calc(34 / 22), calc(16 / 22))',
                            },
                            '100%': {
                                borderRadius: '11px',
                                transform: 'translateX(100%) scale(1)',
                            },
                        },
                        'grow-out': {
                            '0%': {
                                borderRadius: '11px',
                                transform: 'translateX(100%) scale(1)',
                            },
                            '100%': {
                                borderRadius: `${(1 / (34 / 22) * 11)}px / ${(1 / (16 / 22) * 11)}px`,
                                transform: 'translateX(2px) scale(calc(34 / 22), calc(16 / 22))',
                            },
                        },
                        'bounce-out': {
                            '0%': {
                                borderRadius: `${(1 / (34 / 22) * 11)}px / ${(1 / (16 / 22) * 11)}px`,
                                transform: 'translateX(2px) scale(calc(34 / 22), calc(16 / 22))',
                            },
                            '100%': {
                                borderRadius: '11px',
                                transform: 'translateX(0) scale(1)',
                            },
                        },
                },
        }
  },
  plugins: [tailwindcssAnimate],
};