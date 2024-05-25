<template>
  <main
    class="flex flex-col px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
  >
    <section>
      <h2
        class="self-center text-6xl font-bold tracking-tighter text-center text-fuchsia-800 max-md:max-w-full max-md:text-4xl"
      >
        Learn to fly (fake) planes!
      </h2>
      <p
        class="self-center mt-6 text-2xl leading-9 text-center text-zinc-700 max-md:max-w-full"
      >
        Flight sims can be hard, we know this. Find everything you need to start
        flying!
      </p>
      <div
        role="button"
        tabindex="0"
        class="text-center justify-center self-center px-6 py-3.5 mt-6 text-base font-medium leading-6 text-white bg-fuchsia-800 rounded-lg mx-auto w-1/4 shadow-sm"
      >
        Take Off!
      </div>
    </section>
    <figure class="mt-24 w-full aspect-[2] max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1de32768ebec9b11e76a1fb4175a67817f18197b0b3e3a22c82056308d224cde?apiKey=de96e3c014f24fc59b81afe797583090&"
        alt="An airplane on the ground with loading equipment and personnel"
      />
    </figure>
    <section>
      <h3
        class="self-start mt-32 text-4xl font-semibold leading-10 text-fuchsia-800 max-md:mt-10 max-md:max-w-full"
      >
        We have been there
      </h3>
      <p
        class="self-start mt-2 text-2xl leading-9 text-zinc-700 max-md:max-w-full"
      >
        So we understand the struggle
      </p>
      <div class="mt-8 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow p-8 mx-auto w-full font-medium bg-white rounded-xl border border-solid shadow-lg border-neutral-100 leading-[150%] max-md:px-5 max-md:mt-8"
            >
              <p class="text-xl text-zinc-700">
                “I wish I could play this too...”
              </p>
              <div
                class="flex gap-4 mt-12 text-base text-fuchsia-800 max-md:mt-10"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73607b1fdaabc899da8c9ae199c0fc90573be2ed81e528c108f792c3b9918881?apiKey=de96e3c014f24fc59b81afe797583090&"
                  alt="Profile picture of a Twitch viewer"
                  class="shrink-0 rounded-full aspect-square w-[45px]"
                />
                <div class="my-auto">Some Twitch viewer (probably)</div>
              </div>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow self-stretch p-8 mx-auto w-full font-medium bg-white rounded-xl border border-solid shadow-lg border-neutral-100 leading-[150%] max-md:px-5 max-md:mt-8"
            >
              <p class="text-xl text-zinc-700">
                “Flight sim is too overwhelming”
              </p>
              <div
                class="flex gap-4 mt-12 text-base text-fuchsia-800 max-md:mt-10"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a878366184e596fdd4ac7dc557f919817004efa1071d29bd28d05748beaa17b?apiKey=de96e3c014f24fc59b81afe797583090&"
                  alt="Profile picture"
                  class="shrink-0 rounded-full aspect-square w-[45px]"
                />
                <div class="my-auto">All of us at one point</div>
              </div>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow self-stretch p-8 mx-auto w-full font-medium bg-white rounded-xl border border-solid shadow-lg border-neutral-100 leading-[150%] max-md:px-5 max-md:mt-8"
            >
              <p class="text-xl text-zinc-700">
                “I don’t even know where to start...”
              </p>
              <div
                class="flex gap-4 mt-12 text-base text-fuchsia-800 max-md:mt-10"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e76d48defdb60b8910919ffa9d56cd1c2b3454b427ee6a5452a4ec7a86a53eb?apiKey=de96e3c014f24fc59b81afe797583090&"
                  alt="Profile picture"
                  class="shrink-0 rounded-full aspect-square w-[45px]"
                />
                <div class="my-auto">All of us at first</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
