import { createContext, useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const LayoutContext = createContext();

const Layout = ({ children }) => {
  return (
    <LayoutContext.Provider value={{}}>
      <main className="grid lg:grid-cols-5">
        {/* first-col hide on small screen */}

        {/* second-col hide dropdown on big screen */}

        <div className="lg:col-span-4">
          {/* <Navbar /> I move this component to "_app.js"*/}
          <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
        </div>
      </main>
    </LayoutContext.Provider>
  );
};
export const useLayoutContext = () => useContext(LayoutContext);
export default Layout;
