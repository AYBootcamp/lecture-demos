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

export const PATH = {
    root: '/',
    jsxDemoPage: 'jsxDemoPage',
    stateDemoPage: 'stateDemoPage',
    lifecycleDemoPage: 'lifecycleDemoPage',
    customHookPage: 'customHookPage',
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
]

const Nav = () => {
    return (
        <div>
            <NavContainer>
                <ul>
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link to={link.to}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </NavContainer>
            <PageWrapper>
                <Outlet />
            </PageWrapper>
        </div>
    )
}

export default Nav
