'use client'
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import {ThemeProvider} from 'next-themes';

const queryClient=new QueryClient();
export function Providers({children}){
    return(
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>   
            {children}
          </ThemeProvider>
        </QueryClientProvider>
    );
}