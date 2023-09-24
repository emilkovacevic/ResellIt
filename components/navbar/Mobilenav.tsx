'use client'

import React, { useState, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import SignOut from '@/utils/SignOut';
import ToggleTheme from '../theme/ToggleTheme';
import { useSession } from 'next-auth/react';

const Mobilenav: React.FC = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const closeDrawer = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = (event: Event) => {
            if (isOpen) {
                event.preventDefault();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('scroll', handleScroll, { passive: false } as any);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('scroll', handleScroll, { passive: false } as any);
        };
    }, [isOpen]);

    // Add event listener to close the navbar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isOpen && target && !target.classList.contains('mobilenav')) {
                closeDrawer();
            }
        };

        document.addEventListener('click', handleClickOutside as any);

        return () => {
            document.removeEventListener('click', handleClickOutside as any);
        };
    }, [isOpen]);

    return (
        <li className="md:hidden">
            <div className="flex items-center justify-between px-4">
                <button onClick={toggleDrawer} className="text-3xl cursor-pointer">
                    &#9776;
                </button>
            </div>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div
                    className={`bg-secondary w-3/4 px-4 h-full transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <ul className="py-8">
                        <li className="my-4">
                            <Link href="/">Home</Link>
                        </li>
                        {session ? (
                            <>
                                <li className="my-4">
                                    <Link href="/account">Account</Link>
                                </li>
                                <li className="my-4">
                                    <SignOut />
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="my-4">
                                    <Link href="/signin">Sign In</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/register">Register</Link>
                                </li>
                            </>
                        )}
                        <li className="my-8">
                            <Link
                                href="/new-post"
                                className={`hover:bg-accent ${session
                                        ? 'bg-primary font-extrabold text-primary-foreground'
                                        : 'hover:text-accent-foreground bg-primary font-extrabold text-primary-foreground'
                                    } py-2 px-4`}
                            >
                                ADD NEW
                            </Link>
                        </li>
                        <li><hr /></li>
                        <li className="my-4">
                            <ToggleTheme />
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default Mobilenav;
