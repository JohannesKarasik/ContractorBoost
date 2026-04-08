import { Manrope } from "next/font/google";
import "../globals.css";

const font = Manrope({ subsets: ["latin"] });

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* Custom Header */}
   
        </div>

        {children}

        {/* Custom Footer */}

      </body>
    </html>
  );
}