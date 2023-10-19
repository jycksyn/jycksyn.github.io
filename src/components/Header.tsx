import { ReactNode } from "@mdx-js/react/lib";
import { FC } from "react";

const Header: FC<{
    image: string,
    children: ReactNode
}> = ({image: src, children}) => {
    return (
        <header className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <img src={src} className="w-40 rounded-full border-amber-900 border-4" />
            <div className="flex-1 px-4 flex flex-col gap-2 justify-center items-center sm:items-start">
                {children}
            </div>
        </header>
    );
};

export default Header;