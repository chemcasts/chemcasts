import React from "react";

const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <>
      <aside
        id="sidebar"
        class={
          (drawerOpen ? "block " : "hidden ") +
          "fixed z-10 inset-0 flex-none bg-black bg-opacity-25 w-full lg:bg-white lg:static h-screen lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block"
        }
      >
        <div
          id="navWrapper"
          class="overflow-y-auto scrolling-touch h-full lg:block lg:fixed lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0"
        >
          <div class="hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-0 bg-gradient-to-b from-white"></div>
          <nav
            id="nav"
            class="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky"
          >
            <ul>
              <li>
                <a
                  href="/docs"
                  class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4 text-gray-900"
                >
                  <div class="mr-3 rounded-md bg-gradient-to-br from-pink-500 to-rose-500">
                    <svg class="h-6 w-6" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 6C10.0929 6 11.1175 6.29218 12 6.80269V16.8027C11.1175 16.2922 10.0929 16 9 16C7.90714 16 6.88252 16.2922 6 16.8027V6.80269C6.88252 6.29218 7.90714 6 9 6Z"
                        fill="#FFF1F2"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15 6C16.0929 6 17.1175 6.29218 18 6.80269V16.8027C17.1175 16.2922 16.0929 16 15 16C13.9071 16 12.8825 16.2922 12 16.8027V6.80269C12.8825 6.29218 13.9071 6 15 6Z"
                        fill="#FECDD3"
                      ></path>
                    </svg>
                  </div>
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/components?utm_source=tailwindcss&amp;utm_medium=navigation"
                  class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4"
                >
                  <div class="mr-3 rounded-md bg-gradient-to-br from-purple-500 to-indigo-500">
                    <svg class="h-6 w-6" viewBox="0 0 24 24">
                      <path
                        d="M6 9l6-3 6 3v6l-6 3-6-3V9z"
                        fill="#F5F3FF"
                      ></path>
                      <path d="M6 9l6 3v6l-6-3V9z" fill="#DDD6FE"></path>
                      <path d="M18 9l-6 3v6l6-3V9z" fill="#C4B5FD"></path>
                    </svg>
                  </div>
                  Components
                </a>
              </li>
              <li>
                <a
                  href="https://play.tailwindcss.com"
                  class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4"
                >
                  <div class="mr-3 rounded-md bg-gradient-to-br from-yellow-400 to-orange-500">
                    <svg class="h-6 w-6" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.196 6.02a1 1 0 01.785 1.176l-2 10a1 1 0 01-1.961-.392l2-10a1 1 0 011.176-.784z"
                        fill="#FDE68A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.293 9.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L16.586 12l-1.293-1.293a1 1 0 010-1.414zM8.707 9.293a1 1 0 010 1.414L7.414 12l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z"
                        fill="#FDF4FF"
                      ></path>
                    </svg>
                  </div>
                  Playground
                </a>
              </li>
              <li>
                <a
                  href="https://blog.tailwindcss.com"
                  class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4"
                >
                  <div class="mr-3 rounded-md bg-gradient-to-br from-green-400 to-cyan-500">
                    <svg class="h-6 w-6" viewBox="0 0 24 24">
                      <path
                        d="M8 9a1 1 0 011-1h8a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 018 16.5V9z"
                        fill="#6EE7B7"
                      ></path>
                      <path
                        d="M15 7a1 1 0 00-1-1H7a1 1 0 00-1 1v9.5A1.5 1.5 0 007.5 18H16v-.085a1.5 1.5 0 01-1-1.415V7z"
                        fill="#ECFDF5"
                      ></path>
                      <path fill="#A7F3D0" d="M8 8h5v4H8zM8 14h5v2H8z"></path>
                    </svg>
                  </div>
                  News
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4"
                >
                  <div class="mr-3 rounded-md bg-gradient-to-br from-light-blue-400 to-indigo-500">
                    <svg class="h-6 w-6" viewBox="0 0 24 24">
                      <path
                        d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z"
                        fill="#93C5FD"
                      ></path>
                      <path
                        d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
                        fill="#BFDBFE"
                      ></path>
                      <path
                        d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z"
                        fill="#EFF6FF"
                      ></path>
                      <path
                        d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z"
                        fill="#60A5FA"
                      ></path>
                    </svg>
                  </div>
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/tailwindlabs"
                  class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-10"
                >
                  <div class="mr-3 rounded-md bg-gradient-to-br from-fuchsia-500 to-purple-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="7" fill="#F3E8FF"></circle>
                      <path
                        d="M14.52 11.136a1 1 0 010 1.728l-3.016 1.759A1 1 0 0110 13.759v-3.518a1 1 0 011.504-.864l3.015 1.76z"
                        fill="#C084FC"
                      ></path>
                    </svg>
                  </div>
                  Screencasts
                </a>
              </li>
              <li class="mt-8">
                <h5 class="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
                  Getting started
                </h5>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="mt-8">
                <h5 class="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
                  Core Concepts
                </h5>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/utility-first"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Utility-First</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/responsive-design"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Responsive Design</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/hover-focus-and-other-states"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">
                        Hover, Focus, &amp; Other States
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/dark-mode"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Dark Mode</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/adding-base-styles"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Adding Base Styles</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/extracting-components"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Extracting Components</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/adding-new-utilities"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Adding New Utilities</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/functions-and-directives"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Functions &amp; Directives</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="mt-8">
                <h5 class="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
                  Customization
                </h5>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/configuration"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Configuration</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/just-in-time-mode"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Just-in-Time Mode</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/theme"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Theme</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/breakpoints"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Breakpoints</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/customizing-colors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Colors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/customizing-spacing"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Spacing</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/configuring-variants"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Variants</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/plugins"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Plugins</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/presets"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Presets</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="mt-8">
                <h5 class="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
                  Base Styles
                </h5>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/preflight"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Preflight</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        type="button"
        aria-label="Navigation"
        class="fixed z-20 bottom-4 right-4 w-16 h-16 rounded-full bg-brand-400 text-black block lg:hidden"
      >
        <span class="sr-only">Open site navigation</span>
        {drawerOpen ? (
          <>
            <svg
              width="24"
              height="24"
              fill="none"
              class="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </>
        ) : (
          <>
            <svg
              width="24"
              height="24"
              fill="none"
              class="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform"
            >
              <path
                d="M4 8h16M4 16h16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              class="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform opacity-0 scale-80"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </>
        )}
      </button>
    </>
  );
};

export default Drawer;
