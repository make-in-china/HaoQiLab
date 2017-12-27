interface HeaderProps {
    menu: {
        index: number
        data: ([string, string | JSX.Element, string])[]
    },
    onMenuClick: IPage['onMenuClick']
}

interface IPage {
    menu:HeaderProps['menu']
    onChangeBreadcrumbs: (breadcrumbs: (string | JSX.Element)[]) => void
    onMenuClick: (this: void, e: {
        domEvent: object
        item: {
            props: {
                page: string
            }
        }
        key: string
        keyPath: string[]
    }) => void
}


interface ThemeApp {
    (props: {
        page: IPage
        noContent?: boolean
        noFooter?: boolean
    }): React.Component<{
        page: IPage
        noContent?: boolean
        noFooter?: boolean
    }>
}
