import { Josefin_Sans } from "next/font/google";
import "@/styles/globals.scss";
const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <body className={josefin.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
