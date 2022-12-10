import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav`
    background-color: bisque;
    & > ul {
        margin-top: 0;
        margin-bottom: 20px;
        display: flex;
        list-style: none;
        & > * {
            padding: 10px;
            margin: 10px;
        }
    }
    & a {
        text-decoration: none;
    }
    & li {
        border: 1px solid darkcyan;
        border-radius: 10px;
    }
    & li:hover {
        background-color: aliceblue;
    }
`

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LinkWrapper = styled.ul`
    & > li:last-child {
        margin-left: auto;
    }
`

export const PATH = {
    root: '/',
    jsxDemoPage: 'jsxDemoPage',
    stateDemoPage: 'stateDemoPage',
    lifecycleDemoPage: 'lifecycleDemoPage',
    customHookPage: 'customHookPage',
    reactRouterPage: 'reactRouterPage',
}

const links = [
    {
        to: PATH.root,
        title: 'Landing Page',
    },
    {
        to: PATH.jsxDemoPage,
        title: 'JSX demo Page',
    },
    {
        to: PATH.stateDemoPage,
        title: 'State Demo Page',
    },
    {
        to: PATH.lifecycleDemoPage,
        title: 'Lifecycle Demo Page',
    },
    { to: PATH.customHookPage, title: 'Custom Hook Page' },
    { to: PATH.reactRouterPage, title: 'React Router Page' },
]

/**
 * Top navigation component. Directs to specific demo page when clicking on link buttons
 */
const Nav = () => {
    return (
        <div>
            <NavContainer>
                <LinkWrapper>
                    {/* RouterDemo #3: Create Links for navigation */}
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link to={link.to}>{link.title}</Link>
                        </li>
                    ))}
                    <li>
                        <Link to={'error'}>Error Page</Link>
                    </li>
                </LinkWrapper>
            </NavContainer>
            <PageWrapper>
                <Outlet />
            </PageWrapper>
        </div>
    )
}

export default Nav
