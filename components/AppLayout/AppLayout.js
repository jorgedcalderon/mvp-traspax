import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Image from 'next/image';

export const AppLayout = ({ children }) => {
    const { user } = useUser();


    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-gray-800 px-4 py-3">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-gray-300 hover:text-white">
                        <span className="text-lg font-bold">Traspax</span>
                    </Link>

                    {user ? (
                        <div className="flex items-center">
                            <span className="text-gray-300 text-sm mr-2">{user.name}</span>
                            <img
                                src={user.picture}
                                alt={user.name}
                                className="w-8 h-8 rounded-full"
                            />
                        </div>
                    ) : (
                        <Link href="/api/auth/login" className="text-gray-300 hover:text-white">
                            Login
                        </Link>
                    )}
                </div>
            </nav>

            {/* Sidebar */}
            <div className="grid grid-cols-[200px_1fr] h-screen max-h-screen">
                <div className='flex flex-col text-white overflow-hidden'>
                    <div className='bg-slate-800'>tokens disponibles</div>
                    <div className='flex-1 over-flow-auto bg-gradient-to-b from-slate-800 to-cyan-800'>links</div>
                    <div className='bg-cyan-800 flex items-center gap-2 border-t border-t-black/50 h-20'>
                        Footer
                    </div>
                </div>
                <main className=''>{children}</main>
            </div>
        </div>

    );
};


