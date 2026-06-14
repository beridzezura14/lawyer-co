
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import { I18nProvider } from "./i18n";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body>
        <I18nProvider>
          <PageLoader />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
