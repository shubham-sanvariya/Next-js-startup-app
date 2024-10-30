import {ReactNode} from "react";

export default function Layout( { children } : Readonly<{ children : ReactNode }>){
    return (
      <main className={"font-work-sans"}>
          {children}
      </main>
    );
}
