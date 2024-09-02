import React from "react";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                <h1>Guardian bot</h1>
                <main>{children}</main>
            </body>
        </html>
    )
}