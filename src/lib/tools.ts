export type Tool = {
    image: string,
    name: string,
    href?: string
}

const tools: Record<string, Tool> = {
    Node: {
        image: 'node.svg',
        name: 'Node.js',
        href: "https://nodejs.org/",
    },
    CSS: {
        image: 'css.svg',
        name: 'CSS',
    },
    Firebase: {
        image: 'firebase.svg',
        name: 'Firebase',
        href: "https://firebase.google.com/",
    },
    HTML: {
        image: 'html.svg',
        name: 'HTML',
    },
    MUI: {
        image: 'mui.svg',
        name: 'MaterialUI',
        href: "https://mui.com/",
    },
    NextJS: {
        image: 'next-js.svg',
        name: 'NextJS',
        href: "https://nextjs.org/",
    },
    React: {
        image: 'react.svg',
        name: 'React',
        href: "https://react.dev/",
    },
    Remotion: {
        image: 'remotion.svg',
        name: 'Remotion',
        href: "https://www.remotion.dev/",
    },
    TypeScript: {
        image: 'ts.svg',
        name: 'TypeScript',
        href: "https://www.typescriptlang.org/",
    },
}

export default tools;