<template>
  <footer
    class="h-[250px] w-full bg-blue-50 bottom-0 p-10 min-h-[50px] relative z-40"
  >
    <div class="w-full h-full flex flex-col py-2 mx-auto max-w-[1024px]">
      <img class="w-28" src="../assets/icons/Group.png" alt="" />
      <div class="flex flex-row justify-center items-start gap-80">
        <div class="flex flex-col justify-center">
          <span class="font-semibold text-[18px] pb-2">Ürünlerimiz</span>
          <nav class="hover:text-blue-500 text-zinc-600">
            <a href="https://www.eyartu.com/">E-yartu</a>
          </nav>

          <nav class="hover:text-blue-500 text-zinc-600">
            <a href="https://www.yartu.io/Products/Suite">Yartu Suite</a>
          </nav>
          <nav class="hover:text-blue-500 text-zinc-600">
            <a href="https://www.yartu.io/Block-Suite">Block Suite</a>
          </nav>
        </div>

        <div class="flex flex-col justify-center">
          <span class="font-semibold text-[18px] pb-2">İletişim</span>
          <span class="text-zinc-600">Tel: 0555 555 55 55</span>
          <span class="text-zinc-600">E-mail: xxx@yartu.io</span>
        </div>
      </div>
    </div>

    <div class="pt-2 flex flex-row justify-end gap-2">
      <a class="" href="https://twitter.com/yartubilisim/" target="_blank">
        <img class="w-6 h-6" src="../assets/icons/twitter.svg" />
      </a>
      <a
        class=""
        href="https://www.linkedin.com/company/yartu/?originalSubdomain=tr"
        target="_blank"
      >
        <img class="w-6 h-6" src="../assets/icons/icons8-linkedin.svg" />
      </a>
    </div>
  </footer>
</template>
