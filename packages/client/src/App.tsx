import React, { Suspense } from "react";
import Router from "./Router";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const DEVELOPMENT_ENV = process.env.ENVIRONMENT !== "production";

function App() {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <Suspense fallback={"Loading..."}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
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
