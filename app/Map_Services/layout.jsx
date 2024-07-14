
import "./globals.css";
import  Lownav  from "@/components/lownav";
import  Sidenav  from "@/components/sidenav";

export const metadata = {
  title: "LocAI.ly",
  description: "team LocAI.ly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <div className={`sidenav`}><Sidenav/></div>
      <div>{children}</div>
      <div className="ln"><Lownav/></div> 
      </body>

    </html>
  );
}
