import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Wrapper = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: 1,
        retry: 0,
      },
    },
  });

  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SnackbarProvider>
    </>
  );
};

export default Wrapper;
