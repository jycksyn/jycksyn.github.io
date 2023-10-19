import { ReactNode } from "@mdx-js/react/lib";
import { FC } from "react";

const Icons: FC<{
    children: ReactNode
}> = ({children}) => {
    return (
        <div className="flex flex-row gap-4">
            {children}
        </div>
    );
};

export default Icons;