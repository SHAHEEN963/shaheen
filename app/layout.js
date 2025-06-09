import "../public/style.css"
import "./globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const metadata = {
    title: "Mohammad Shaheen",
    description: "Mohammad Shaheen's Portfolio",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
