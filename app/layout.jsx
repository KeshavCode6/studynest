import "../styles/globals.css";

export const metadata = {
  title: "StudyNest",
  description: "Study your best with StudyNest!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
