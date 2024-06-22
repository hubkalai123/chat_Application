'use client';
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { RouterGuard } from "./routergraud";
import { Suspense } from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <Suspense>
                <RouterGuard>
                    {children}
                </RouterGuard>
            </Suspense>
        </Provider>
    )
}

export default Layout;
