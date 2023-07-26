import Navbar from '@/components/Navbar';
import './globals.css';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'StackQuiz',
    description:
        'StackQuiz gets you ready for all your tech related job interviews',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={cn(
                    inter.className,
                    'antialiased min-h-screen pt-16'
                )}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
