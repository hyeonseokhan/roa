export default function Byline() {
  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="flex flex-col justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <div className="flex items-center gap-x-1.5">
          <div className="text-sm text-gray-400">By</div>
          <a href="https://github.com/hyeonseokhan" title="Toycode">
            Toycode
          </a>
        </div>

        <div className="text-sm text-gray-400">
          {'© 2024 '}
          <a
              className="underline decoration-dotted underline-offset-4 transition-colors hover:text-gray-300"
              href="https://hyeonseokhan.github.io/resume/"
              target="_blank"
              rel="noreferrer"
          >
            Hyeonseok Han.
          </a>
          {' All rights reserved.'}
        </div>
      </div>
    </div>
  );
}
