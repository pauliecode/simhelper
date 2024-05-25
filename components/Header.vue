<template>
  <header
    class="flex justify-between px-20 py-14 w-full text-xl font-medium leading-8 text-fuchsia-800 bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full"
  >
    <figure class="flex items-center w-[5%]">
      <img
        loading="lazy"
        src="/public/img/logo.png"
        alt="An airplane on the ground with loading equipment and personnel"
        class="mr-4"
      />
      <h1 class="my-auto">SimHelper</h1>
    </figure>
    <nav class="flex gap-5 items-center">
      <NuxtLink to="/about">About</NuxtLink>
      <a href="#contribute" class="self-stretch my-auto">Contribute</a>
      <a
        href="#home"
        class="justify-center self-stretch px-6 py-3.5 text-base text-white whitespace-nowrap bg-fuchsia-800 rounded-lg shadow-sm max-md:px-5"
        >Home</a
      >
    </nav>
  </header>
</template>
