import React, { useState } from 'react';
import { Home, Image, FileText, Twitter, Linkedin, Copy, MessageCircle, ExternalLink, Youtube, Check, Mail, Pen } from 'lucide-react';
import { EmailBadgeIcon } from './Icons';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [emailCopied, setEmailCopied] = useState(false);
  const email = 'amiyamandal3092@gmail.com';

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <aside className="hidden sm:flex w-[293px] bg-gray-50 p-6 flex-col gap-8 fixed h-full border-r border-gray-200">
      <div>
        <h1 className="text-xl font-normal text-[#262220]">Amiya Mandal</h1>
        <div className="mt-2 border-b border-gray-300"></div>
      </div>

      <Link
        to="/"
        className={`rounded-lg px-4 py-2.5 flex items-center gap-2.5 transition-colors ${
          currentPath === '/' ? 'bg-[#262220] text-white' : 'hover:bg-gray-100 text-[#262220]'
        }`}
      >
        <Home className="w-4 h-4" />
        <span className="text-sm">Home</span>
      </Link>

      <nav className="flex flex-col gap-3">
        <div className="text-[10px] uppercase tracking-wider text-[#262220]/60 font-medium">My Space</div>
        <Link
          to="/experiences"
          className={`flex items-center gap-2.5 px-4 py-2 rounded-lg transition-colors ${
            currentPath === '/experiences' ? 'bg-[#262220] text-white' : 'hover:bg-gray-100 text-[#262220]'
          }`}
        >
          <Image className="w-4 h-4" />
          <span className="text-sm">Experiences</span>
        </Link>
        <Link
          to="/writing"
          className={`flex items-center gap-2.5 px-4 py-2 rounded-lg transition-colors ${
            currentPath === '/writing' ? 'bg-[#262220] text-white' : 'hover:bg-gray-100 text-[#262220]'
          }`}
        >
          <Pen className="w-4 h-4" />
          <span className="text-sm">Writing</span>
        </Link>
        <Link
          to="/valuable"
          className={`flex items-center gap-2.5 px-4 py-2 rounded-lg transition-colors ${
            currentPath === '/valuable' ? 'bg-[#262220] text-white' : 'hover:bg-gray-100 text-[#262220]'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span className="text-sm">Valuable</span>
        </Link>
      </nav>

      <nav className="flex flex-col gap-3">
        <div className="text-[10px] uppercase tracking-wider text-[#262220]/60 font-medium">Online</div>
        <a
          href="https://x.com/amiyamandal02"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors group text-[#262220]"
        >
          <div className="flex items-center gap-2.5">
            <Twitter className="w-4 h-4" />
            <span className="text-sm">X</span>
          </div>
          <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <a
          href="https://www.linkedin.com/in/amiyamandal/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors group text-[#262220]"
        >
          <div className="flex items-center gap-2.5">
            <Linkedin className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </div>
          <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <button
          onClick={handleCopyEmail}
          className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors group text-[#262220] text-left w-full"
        >
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Email</span>
          </div>
          {emailCopied ? (
            <span className="text-xs text-green-600">Copied!</span>
          ) : (
            <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </button>
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors group text-[#262220]"
        >
          <div className="flex items-center gap-2.5">
            <Youtube className="w-4 h-4" />
            <span className="text-sm">YouTube</span>
          </div>
          <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <a
          href="https://calendly.com/amiya-mandal-3092/25-mins-catchup"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors group text-[#262220]"
        >
          <div className="flex items-center gap-2.5">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">Book chat</span>
          </div>
          <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </nav>
    </aside>
  );
}


