import { siteConfig } from '#/config/site';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">{siteConfig.name}</h1>
      <div className="space-y-10 text-white">
        {siteConfig.categories.map((category) => {
          return (
            <div key={category.name} className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {category.name}
              </div>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {category.apps.map((app) => {
                  return (
                    <Link
                      href={`/${app.slug}`}
                      key={app.name}
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        {app.name}
                      </div>

                      {app.description ? (
                        <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                          {app.description}
                        </div>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
