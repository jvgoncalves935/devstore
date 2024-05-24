import { Header } from "@/components/header";
import { CartProvider } from "@/contexts/cart-context";
import { ReactNode, Suspense } from "react";

export default function StoreLayout({ children }: { children: ReactNode }){
    return (
        <CartProvider>
            <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
                <Header />
                <Suspense>
                    {children}
                </Suspense>
            </div>
        </CartProvider>
    )
}