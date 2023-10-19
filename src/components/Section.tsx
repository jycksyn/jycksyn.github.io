

import { FC, ReactNode } from "react";

const Section: FC<{
    children: ReactNode
}> = ({children}) => {
    return (
    <section className="flex flex-col mt-3 gap-4">{children}</section>
    )
};

export default Section;