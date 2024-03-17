import "../styles/globals.css";
import AuthProvider from "./context/AuthProvider";

export const metadata = {
  title: "StudyNest",
  description: "Study your best with StudyNest!",
};


export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.svg" type="image/png"/>
        </head>
        <body>
          <AuthProvider>
          {children}
          </AuthProvider>
        </body>
      </html>
    </>
  )
}
