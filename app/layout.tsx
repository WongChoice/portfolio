import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ankit D. — AI Automation Engineer | AI Agents & Production Automation',
  description:
    'AI Automation Engineer and ex-Amazon Software Engineer building production-grade AI agents, autonomous workflows, n8n automation, and scalable AI infrastructure.',
  keywords: [
    'AI Engineer',
    'AI Automation Engineer',
    'LangGraph',
    'n8n',
    'Python',
    'FastAPI',
    'OpenAI',
    'Claude API',
    'Upwork Top Rated',
    'Amazon Software Engineer'
  ],
  authors: [{ name: 'Ankit D.' }],
  openGraph: {
    title: 'Ankit D. — AI Automation Engineer',
    description:
      'Ex-Amazon Software Engineer building production-grade AI agents and autonomous n8n workflows designed to run 24/7 without breaking.',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit D. — AI Automation Engineer',
    description: 'Ex-Amazon Software Engineer building production-grade AI agents and autonomous n8n workflows.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#080C14] text-slate-100 antialiased selection:bg-[#F05323] selection:text-white">
        {children}
      </body>
    </html>
  );
}
