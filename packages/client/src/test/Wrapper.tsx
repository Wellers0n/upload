import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Wrapper;
