export default function Footer() {
  return (
    <footer className="bg-[#F5F1E8]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-[#4E463A] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="The Vira Society logo"
            className="h-25 w-auto opacity-90 md:h-35"
          />
          <p>© 2026 The Vira Society</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@thevirasociety.com"
            className="transition hover:text-[#4D5300]"
          >
            hello@thevirasociety.com
          </a>

          <a
            href="https://instagram.com/thevirasociety"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#4D5300]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[48px] w-[48px]"
            >
              <path d="M7.75 2C4.686 2 2 4.686 2 7.75v8.5C2 19.314 4.686 22 7.75 22h8.5C19.314 22 22 19.314 22 16.25v-8.5C22 4.686 19.314 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm8.25 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}