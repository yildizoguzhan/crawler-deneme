<template>
  <div
    class="w-full h-[275px] flex items-center justify-center bg-zinc-100"
    v-if="$route.name == 'home'"
  >
    <div class="w-1/3 flex flex-col gap-2">
      <span
        class="pb-4 font-bold text-[30px] font-manrope text-center"
        style="white-space: nowrap"
      >
        Yartu Destek
      </span>

      <y-input
        class="bg-white rounded-lg"
        v-if="$route.name == 'home'"
        placeholder="   Search"
      />
    </div>
  </div>
</template>
