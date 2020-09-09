declare function SapperPreload(
  this: {
    fetch: (
      input: RequestInfo,
      init?: RequestInit | undefined
    ) => Promise<Response>;
    error: (status: number, message: string) => void;
  },
  page: { host: string; path: string; params: any; query: any },
  session: any
): any;
