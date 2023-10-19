import { robotoSlab } from "@/lib/fonts";
import clsx from "clsx";
import { title } from "process";
import { FC, ReactNode } from "react";

const Header: FC<{
    children: ReactNode,
    logo: string,
    screenshot: string,
    title: ReactNode,
    description: ReactNode
}> = ({children, logo, screenshot, title, description}) => {
    return (
        <article className="flex flex-col items-stretch rounded border-dashed gap-4 border-4 border-amber-900 p-4">
            <header className="flex flex-row items-center gap-4">
                <img src={logo} className="w-12 rounded-lg" />
                <div className="flex-1 px-2 flex flex-col gap-2 justify-start items-start">
                    <h3 className={clsx('text-2xl font-bold', robotoSlab.className)}>{title}</h3>
                </div>
            </header>
            <p>{description}</p>
            {screenshot && <img className="rounded-lg aspect-[4/3]" src={screenshot} />}
            {children}
        </article>
    );
};

export default Header;