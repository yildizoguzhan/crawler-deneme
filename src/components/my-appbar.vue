<template>
  <div class="flex flex-col justify-center sticky top-0 z-40 my-0">
    <div class="bg-white w-full my-0">
      <div
        class="bg-white h-16 w-full flex flex-row items-center mx-auto justify-between max-w-[1024px]"
      >
        <div
          class="flex flex-row items-center w-28 cursor-pointer"
          @click="$router.push('/home')"
        >
          <img class="" src="../assets/icons/Group.png" alt="logo" />
        </div>
        <y-input
          v-if="$route.name != 'home'"
          dense
          placeholder="   Search"
          class="w-1/3"
        ></y-input>
        <div class="px-8 gap-6 flex flex-row">
          <nav class="hover:text-blue-500 font-semibold">
            <RouterLink to="/home">Anasayfa</RouterLink>
          </nav>
          <span class="border-r-2"></span>

          <y-dropdown left>
            <y-dropdown-item @click="$router.push('/home/email')">
              E-Posta
            </y-dropdown-item>
            <y-dropdown-item @click="$router.push('/home/storage')">
              Depolama
            </y-dropdown-item>
            <y-dropdown-item @click="$router.push('/home/calendar')">
              Takvim
            </y-dropdown-item>
            <y-dropdown-item @click="$router.push('/home/project')">
              Proje
            </y-dropdown-item>
            <y-dropdown-item @click="$router.push('/home/office')">
              Ofis
            </y-dropdown-item>
            <y-dropdown-item @click="$router.push('/home/note')">
              Not
            </y-dropdown-item>
            <y-dropdown-item @click="$router.push('/home/contact')">
              Rehber
            </y-dropdown-item>
            <template #activator="{ open }">
              <button class="hover:text-blue-500 font-semibold" @click="open">
                Modüller
              </button>
            </template>
          </y-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showDropdown = ref(false);

const openDropdown = () => {
  if (showDropdown.value == false) showDropdown.value = true;
  else showDropdown.value = false;
};
</script>
