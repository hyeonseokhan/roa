import '#/styles/globals.css';
import { Metadata } from 'next';
import { GlobalNav } from '#/components/global-nav';
import { siteConfig } from '#/config/site';
import Byline from '#/components/byline';
import pkg from '#/package.json';
import {Providers} from "#/app/providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: `${pkg.homepage}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36">
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <GlobalNav />
          <div className="lg:pl-72">
            <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
              {/* 본 컨텐츠 페이지 */}
              <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                <div className="rounded-lg bg-black p-3.5 lg:p-6">
                  {children}
                </div>
              </div>
              <Byline />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
