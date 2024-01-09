import { PropsWithChildren } from "react";
import Header from "./_components/Header";

function ProvidersLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="bg-red-50 grow flex flex-col w-full">
      <Header />
      {children}
    </div>
  );
}

export default ProvidersLayout;
