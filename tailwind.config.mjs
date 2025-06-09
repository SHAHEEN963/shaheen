/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#A35C6A",
                biege: "#F2DDB0",
                tprimary: "#0D3E4C",
                tsecondary: "#556070",
                "section-secondary": "#F0F1F3",
            },
            boxShadow: {
                double: "inset 0px 4px 4px 0px #00000040, 0px 4px 4px 0px #00000040",
                "experience-double":
                    "0px 36px 105px 0px #2B384C1A ,0px 4px 4px 0px #00000040",
                card: "0px 4px 4px 0px #00000040",
            },
            backgroundImage: {
                "avatar-gradient":
                    "linear-gradient(to top right,#A35C6A 0%,#A35C6A 60%,#fff 60% , #fff 100%)",
                "container-gradient":
                    "linear-gradient(to top right, #F2DDB0, white)",
                "beige-to-transparent":
                    "linear-gradient(to top, #F2DDB0 0% ,#F2DDB0 50% , transparent 50%, transparent 100%)",
            },
            keyframes: {
                rotate: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                move: {
                    "0%": { transform: "translate(0px,0px)" },
                    "100%": { transform: "translate(-10px,-10px)" },
                },
                increaseWidth: {
                    "0%": { width: "0%" },
                    "100%": { width: "100%" },
                },
            },
            animation: {
                rotate: "rotate 5s linear 2",
                shake: "move 1.5s alternate infinite",
                stretch: "increaseWidth 1s ease-in-out",
            },
        },
    },
    plugins: [],
}
