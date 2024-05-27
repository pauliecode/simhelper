<template>
  <footer
    class="flex flex-col px-20 pb-12 mt-32 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full"
  >
    <hr
      class="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full"
    />
    <div
      class="flex gap-5 mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full"
    >
      <div class="flex flex-col self-start mt-3.5">
        <NuxtLink to="/">
          <figure class="flex items-center w-[5%]">
            <img
              loading="lazy"
              src="/public/img/logo.png"
              alt="SimHelper's logo"
              class="mr-4"
            />
            <h4 class="text-2xl leading-9 text-fuchsia-800">SimHelper</h4>
          </figure>
        </NuxtLink>

        <div class="flex gap-2 mt-24 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3429e2eccfee71c37a593e8fb04eb8027775e2fd4efdad268367ce5e4cd20d63?apiKey=de96e3c014f24fc59b81afe797583090&"
            alt="Social media icon"
            class="shrink-0 w-10 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/df661a2f7d625473c7b20e0c9fcd0c8511018b8dbff32fbdadd1a4962ffd5190?apiKey=de96e3c014f24fc59b81afe797583090&"
            alt="Social media icon"
            class="shrink-0 w-10 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/81d4e3c6581fa8b6caee39b2a5b9b35d446e00481431b6ddeb33329c44e332b5?apiKey=de96e3c014f24fc59b81afe797583090&"
            alt="Social media icon"
            class="shrink-0 w-10 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a6ab5e858ae1677ede080164b3845faaa20e89664e1e353742140fc88b0ff89?apiKey=de96e3c014f24fc59b81afe797583090&"
            alt="Social media icon"
            class="shrink-0 w-10 aspect-square"
          />
        </div>
      </div>
      <section class="flex-auto max-md:max-w-full">
        <div class="flex max-md:flex-col max-md:gap-0">
          <nav class="flex flex-col w-[90%] max-md:ml-0 max-md:w-full">
            <span
              class="flex flex-col justify-between items-end grow text-base font-medium leading-6 whitespace-nowrap text-zinc-700 max-md:mt-8"
            >
              <span class="text-fuchsia-800">Topic</span>
              <a href="#page1" class="mt-6">Page</a>
              <a href="#page2" class="mt-6">Page</a>
              <a href="#page3" class="mt-6">Page</a>
            </span>
          </nav>
        </div>
      </section>
    </div>
  </footer>
</template>
