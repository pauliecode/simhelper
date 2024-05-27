<template>
  <header
    class="flex justify-between px-20 py-14 w-full text-xl font-medium leading-8 text-fuchsia-800 bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full"
  >
    <NuxtLink to="/">
      <figure class="flex items-center w-[5%]">
        <img
          loading="lazy"
          src="/public/img/logo.png"
          alt="SimHelper's logo"
          class="mr-4"
        />
        <h1 class="my-auto">SimHelper</h1>
      </figure>
    </NuxtLink>
    <nav class="flex gap-5 items-center">
      <NuxtLink to="/about" class="hover:text-fuchsia-700">About</NuxtLink>
      <NuxtLink to="/contribute" class="hover:text-fuchsia-700"
        >Contribute</NuxtLink
      >
      <NuxtLink
        to="/"
        class="justify-center self-stretch px-6 py-3.5 text-base text-white whitespace-nowrap bg-fuchsia-800 hover:bg-fuchsia-700 rounded-lg shadow-sm max-md:px-5"
        >Home</NuxtLink
      >
    </nav>
  </header>
</template>
