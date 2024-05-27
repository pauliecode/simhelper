<template>
  <main
    class="flex flex-col px-20 mt-8 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
  >
    <section>
      <h2
        class="self-center text-6xl font-bold tracking-tighter text-center text-fuchsia-800 max-md:max-w-full max-md:text-4xl"
      >
        What simulator should I pick?
      </h2>
      <p
        class="self-center mt-6 text-2xl leading-9 text-center text-zinc-700 max-md:max-w-full"
      >
        The first step you have to take is deciding what flight simulator you
        prefer. There are a lot of variables involved in this decision, so we
        will try to summarize the main points for you. But first, let's see what
        your main options are:
      </p>
    </section>
    <section class="flex flex-row space-x-32 mt-8">
      <figure class="!flex items-center w-[25%]">
        <NuxtLink to="/msfs">
          <img
            loading="lazy"
            src="/public/img/msfs_banner.png"
            alt="SimHelper's logo"
            class="rounded-xl"
          />
        </NuxtLink>
      </figure>
      <figure class="!flex items-center w-[25%]">
        <NuxtLink to="/xplane">
          <img
            loading="lazy"
            src="/public/img/xplane_banner.png"
            alt="SimHelper's logo"
            class="rounded-xl"
          />
        </NuxtLink>
      </figure>
      <figure class="!flex items-center w-[25%]">
        <NuxtLink to="p3d">
          <img
            loading="lazy"
            src="/public/img/p3dv5_banner.png"
            alt="SimHelper's logo"
            class="rounded-xl"
          />
        </NuxtLink>
      </figure>
    </section>
    <section class="mt-8">
      <div
        class="self-center mt-6 text-xl leading-9 text-center text-zinc-700 max-md:max-w-full"
      >
        <p>
          <span class="text-[#8412AA] font-semibold"
            >Microsoft Flight Simulator (MSFS)</span
          >
          is the most popular flight sim in the market at the moment. MSFS has
          brought a never-before-seen
          <span class="text-[#8412AA] font-semibold">boom of popularity</span>
          for flight simulation thanks to the accessibility that this sim
          provides, with freeware aircrafts and other addons powered by a
          <span class="text-[#8412AA] font-semibold">very large community</span
          >, and with how
          <span class="text-[#8412AA] font-semibold">easy</span> it is to start
          playing without needing to download or set up almost anything. With
          <span class="text-[#8412AA] font-semibold"
            >extremely attractive graphics and a ton of variety, it is the
            default option for newcomers and experienced simmers.</span
          >
          <br />
          <br />
          <span class="text-[#8412AA] font-semibold">X-Plane</span> currently
          has two active versions,
          <span class="text-[#8412AA] font-semibold">11 and 12</span>, both are
          actively used by lots of users, but the most recent one and the one
          with active development from the developers is
          <span class="text-[#8412AA] font-semibold">X-Plane 12</span>. It is
          usually said that X-Plane makes up for what it lacks on the visual
          department with its
          <span class="text-[#8412AA] font-semibold">physics and realism</span>,
          but the visuals are slowly catching up to MSFS and the physics in MSFS
          are slowly catching up to X-Plane. This simulator also has a
          <span class="text-[#8412AA] font-semibold"
            >large community with freeware addons, extremely good default
            airports and a lot of experienced aircraft developers.</span
          >
          <br />
          <br />
          <span class="text-[#8412AA] font-semibold"
            >Prepar3D (P3D) was the defacto flight simulator</span
          >
          for many years before the release of MSFS. Most
          <span class="text-[#8412AA] font-semibold"
            >major developers like PMDG, FSLabs, Aerosoft</span
          >, etc, were developing for this flight sim. This made it the
          <span class="text-[#8412AA] font-semibold"
            >most popular one at the time</span
          >, and therefore has a great
          <span class="text-[#8412AA] font-semibold">variety of aircraft</span>
          to purchase, but most developers have
          <span class="text-[#8412AA] font-semibold">moved on to MSFS</span>.
          The graphics and physics are
          <span class="text-[#8412AA] font-semibold">falling behind</span> the
          competition, and the
          <span class="text-[#8412AA] font-semibold">amount of work</span>
          needed to set it up compared to X-Plane and MSFS really puts it off
          for many players. But
          <span class="text-[#8412AA] font-semibold"
            >many simmers are still using it and it can be an attractive option
            depending on what you want out of it.</span
          >
        </p>
      </div>
    </section>
    <div class="relative flex py-5 mt-16 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>
    <section class="mt-4">
      <div
        class="self-center mt-6 text-xl leading-9 text-center text-zinc-700 max-md:max-w-full"
      >
        <p class="mb-6">
          Here is a list of the three points that we consider to be the most
          important when choosing your flight simulator:
        </p>
        <ul class="list-disc list-outside indent-0">
          <li>
            <span class="text-[#8412AA] font-semibold">Price:</span> This is the
            a big one, right? Flight simming will always be an investment, but
            some investments are bigger than others.
          </li>
          <li class="pr-[35px]">
            <span class="text-[#8412AA] font-semibold">Accessibility:</span> How
            hard is it to set it up? How much time do I have to invest in
            getting it running without crashes?
          </li>
          <li>
            <span class="text-[#8412AA] font-semibold">Requirements:</span>
            Flight simulation requires a good pc, but some sims require more
            powerful PCs than others, as well as other factors like the OS.
          </li>
        </ul>
      </div>
    </section>
    <div class="relative flex py-5 mt-16 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>
    <section class="mt-8">
      <div
        class="self-center mt-6 text-xl leading-9 text-center text-zinc-700 max-md:max-w-full"
      >
        <p>
          Now, with all of that out of the way,
          <span class="text-[#8412AA] font-semibold"
            >click on the picture/banner of the simulator you prefer</span
          >
          to get more information about it and learn how to get started with it.
          Of course,
          <span class="text-[#8412AA] font-semibold"
            >you can always go back if you change your mind</span
          >
        </p>
      </div>
    </section>
  </main>
</template>
