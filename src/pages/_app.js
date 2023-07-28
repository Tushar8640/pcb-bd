import RootLayout from "@/layout/RootLayout";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
  <Provider store={store}>
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
    </Provider>
  );
}
