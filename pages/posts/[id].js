import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PostSlug() {
  return (
    <>
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          {/* <Link href="/posts">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all my-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </button>
          </Link> */}

          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    class="mr-4 w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      class="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Jese Leos
                    </a>
                    <p class="text-base font-light text-gray-500 dark:text-gray-400">
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                    <p class="text-base font-light text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </address>

              <h1 class="mb-4 prose prose-slate prose-xl lg:prose-2xl font-extrabold leading-tight lg:mb-6 dark:text-white">
                Best practices for successful prototypes
              </h1>
            </header>

            <div className="w-full mt-4 prose prose-slate prose-base dark:prose-dark max-w-none">
              <p>
                Excepteur et aliquip ipsum anim sint velit minim proident amet
                fugiat ipsum tempor sit qui. Consequat anim anim est ea anim ea.
                Dolore commodo ipsum incididunt laborum excepteur fugiat. Mollit
                eu eu id sint aliquip ut Lorem amet nulla tempor magna magna
                veniam. Laboris sunt ut velit quis aliquip qui ullamco velit ut
                nostrud. Magna labore elit minim adipisicing. Dolore eu officia
                cupidatat qui consectetur ad laborum aliquip. Non consequat
                fugiat aute laborum eiusmod consequat proident ut mollit labore
                officia ut veniam id. Aliqua veniam est pariatur id exercitation
                nulla consequat officia nostrud quis. Aliquip qui in amet
                laborum labore tempor. Duis quis officia mollit laboris ut culpa
                aute. Laboris cillum sunt labore pariatur sit ipsum consequat
                est id aliqua veniam aute Lorem velit. Sint duis culpa officia
                anim sint quis esse culpa irure minim non enim magna. Ex non
                exercitation eu cillum enim. Incididunt do deserunt quis
                excepteur in laboris. Amet culpa occaecat anim consequat ut
                laborum. Ad pariatur velit dolor ullamco aute enim ad duis sunt
                in deserunt id adipisicing consectetur.
              </p>

              <blockquote>
                <p>
                  Why is Tailwind removing the default styles on my{" "}
                  <code>h1</code> elements? How do I disable this? What do you
                  mean I lose all the other base styles too?
                </p>
              </blockquote>
            </div>
          </article>
        </div>
      </main>

      {/* <aside
        aria-label="Related articles"
        class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div class="px-4 mx-auto max-w-screen-xl">
          <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Related articles
          </h2>
          <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article class="max-w-xs">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                  class="mb-5 rounded-lg"
                  alt="Image 1"
                />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Our first office</a>
              </h2>
              <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 2 minutes
              </a>
            </article>
            <article class="max-w-xs">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                  class="mb-5 rounded-lg"
                  alt="Image 2"
                />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Enterprise design tips</a>
              </h2>
              <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 12 minutes
              </a>
            </article>
            <article class="max-w-xs">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                  class="mb-5 rounded-lg"
                  alt="Image 3"
                />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">We partnered with Google</a>
              </h2>
              <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 8 minutes
              </a>
            </article>
            <article class="max-w-xs">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                  class="mb-5 rounded-lg"
                  alt="Image 4"
                />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Our first project with React</a>
              </h2>
              <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 4 minutes
              </a>
            </article>
          </div>
        </div>
      </aside> */}
    </>
  );
}