import Router from "./Router";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";

const DEVELOPMENT_ENV = process.env.ENVIRONMENT !== "production";

function App() {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <Suspense>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <QueryClientProvider client={queryClient}>
            <Router />
            {DEVELOPMENT_ENV && <ReactQueryDevtools initialIsOpen={false} />}
          </QueryClientProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
