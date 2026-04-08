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
        <div className="w-full border-b py-4 text-center font-semibold">
   
        </div>

        {children}

        {/* Custom Footer */}
        <div className="w-full border-t py-6 text-center text-sm text-gray-500">
          Custom Footer
        </div>
      </body>
    </html>
  );
}