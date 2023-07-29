import RootLayout from "@/layout/RootLayout";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}
