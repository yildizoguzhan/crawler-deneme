<template>
  <div
    class="flex flex-row justify-center h-40 gap-2 pt-6"
    style="max-width: 80rem"
  >
    <div class="justify-center pb-4 pl-6 w-full pt-6" style="max-width: 40rem">
      <y-listbox :options="model" v-model="selected" @click="clicked()">
        <template #template="{ item, onClick }"
          ><button
            @click="onClick(item)"
            class="flex items-center w-full gap-3.5 p-4 border-b border-BORDER hover:bg-LIGHTBLUE-6 transition-all duration-200"
          >
            {{ item.name }}
          </button>
        </template>
      </y-listbox>
    </div>
    <div class="w-1/4 pt-6">
      <y-chip class="font-semibold text-[30px]"> Sıkça Sorulan Sorular</y-chip>
      <y-dropdown-drawer-item
        class="gap-1"
        prefix="yi yi-folder"
        postfix="yi yi-arrow-right"
      >
        Konu
      </y-dropdown-drawer-item>
      <y-dropdown-drawer-item
        class="gap-1"
        prefix="yi yi-folder"
        postfix="yi yi-arrow-right"
      >
        Konu
      </y-dropdown-drawer-item>
      <y-dropdown-drawer-item
        class="gap-1"
        prefix="yi yi-folder"
        postfix="yi yi-arrow-right"
      >
        Konu
      </y-dropdown-drawer-item>
    </div>
  </div>
  <div class="h-[400px] bg-red-500">afasd</div>
</template>

<script setup>
import { ref } from "vue";

const model = ref([
  { link: "/email", name: "İnstallition" },
  { link: "/email", name: "Sending" },
  { link: "/email", name: "Mailbox using" },
  { link: "/email", name: "Error massages" },
]);

const selected = ref(model.value[0].link);

const clicked = () => {
  console.log(selected.value.link);
};
</script>
