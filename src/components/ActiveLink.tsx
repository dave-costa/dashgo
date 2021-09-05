import Link, { LinkProps } from 'next/link'
import { ReactElement } from 'react'
import { cloneElement } from 'react'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
    children: ReactElement
    match?: boolean
}

export function ActiveLink ({children, match= false, ...rest}: ActiveLinkProps) {
    
    let isActive = false
    const { asPath } = useRouter()

    if (match && ( asPath === String(rest.href) || asPath == String(rest.as) )) {
        isActive = true
        
    }

    if(!match && 
        (asPath.startsWith(String(rest.href)) ||
        asPath.startsWith(String(rest.as))
        )) {
        isActive = true
    }
    return (
        <Link {...rest} >
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}