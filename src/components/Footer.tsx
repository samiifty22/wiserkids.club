import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

          {/* Logo + Tagline + Social */}
          <div className="space-y-4 col-span-2">
            <div className="flex items-center">
              <img
                src="/images/logo-footer.png"
                alt="WiserKids"
                className="h-30 w-auto object-contain"
              />
            </div>
            <p className="text-xs font-bold text-[#192A4B] max-w-xs leading-relaxed">
              Being Financially Smart, Creative &amp;<br />Entrepreneurial
            </p>
            <p className="text-xs text-[#606F72] max-w-xs leading-relaxed">
              Empowering the next generation of thinkers, earners, and leaders one child at a time.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#192A4B] transition-colors group">
                <svg className="w-4 h-4 text-[#606F72] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#192A4B] transition-colors group">
                <svg className="w-4 h-4 text-[#606F72] group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#192A4B] transition-colors group">
                <svg className="w-4 h-4 text-[#606F72] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#192A4B] transition-colors group">
                <svg className="w-4 h-4 text-[#606F72] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-[#192A4B] mb-4 sm:mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3 text-xs font-bold text-[#606F72]">
              <li><Link href="/" className="hover:text-[#192A4B] transition-colors">Home</Link></li>
              <li><Link href="/programs" className="hover:text-[#192A4B] transition-colors">Programs</Link></li>
              <li><Link href="/store" className="hover:text-[#192A4B] transition-colors">Store</Link></li>
              <li><Link href="/admission" className="hover:text-[#192A4B] transition-colors">Admission</Link></li>
              <li><Link href="/contact" className="hover:text-[#192A4B] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal + Contact */}
          <div className="space-y-8">
            <div>
              <h4 className="font-extrabold text-[#192A4B] mb-4 sm:mb-6 text-sm">Legal</h4>
              <ul className="space-y-3 text-xs font-bold text-[#606F72]">
                <li><a href="#" className="hover:text-[#192A4B] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#192A4B] transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-[#192A4B] mb-4 text-sm">Contact</h4>
              <ul className="space-y-3 text-xs font-bold text-[#606F72]">
                <li>
                  <a href="mailto:info@wiserkids.club" className="hover:text-[#192A4B] transition-colors">
                    info@wiserkids.club
                  </a>
                </li>
                <li className="text-[#606F72] font-medium">Dhaka, Bangladesh</li>
                <li className="text-[#606F72] font-medium">Dubai, UAE</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] font-bold text-[#606F72]">© 2026 WiserKids. All rights reserved.</p>
          <p className="text-[10px] text-[#606F72]/70">Built for curious kids and confident parents.</p>
        </div>
      </div>
    </footer>
  );
}
