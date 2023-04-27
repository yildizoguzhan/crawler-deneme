<template>
  <main>
    <router-view></router-view>
    <div v-show="$route.name == 'home'" class="relative flex flex-col px-10">
      <div class="flex flex-row justify-center">
        <div class="flex flex-col items-center p-4">
          <span
            class="text-lg font-bold font-manrope"
            style="white-space: nowrap"
          >
            Nerede yardıma ihtiyacınız var?</span
          >
          <div class="flex flex-col items-center" style="max-width: 46rem">
            <span class="text-lg py-4"> Hizmetlerimiz</span>

            <div class="flex flex-wrap gap-8 w-full h-full justify-center">
              <y-card
                @click="$router.push('/home/email')"
                class="h-48 w-48 flex flex-col text-center border-2 justify-center"
              >
                <img
                  class="px-12 pt-4"
                  src="../assets/icons/amail.svg"
                  alt=""
                />

                <span class="text-center font-semibold"> E-posta</span>
              </y-card>
              <y-card
                @click="$router.push('/home/storage')"
                class="h-48 w-48 flex flex-col text-center border-2 justify-center"
              >
                <img
                  class="px-12 pt-4"
                  src="../assets/icons/depolama.svg"
                  alt=""
                />
                <span class="text-center font-semibold"> Depolama </span>
              </y-card>
              <y-card
                @click="$router.push('/home/conferance')"
                class="h-48 w-48 flex flex-col text-center border-2 justify-center"
              >
                <img
                  class="px-12 pt-4"
                  src="../assets/icons/videoKonferans.svg"
                  alt=""
                />
                <span class="text-center font-semibold"> Konferans</span>
              </y-card>
              <y-card
                @click="$router.push('/home/calendar')"
                class="h-48 w-48 flex flex-col text-center border-2 justify-center"
              >
                <img
                  class="px-12 pt-4"
                  src="../assets/icons/calendar.svg"
                  alt=""
                />
                <span class="text-center font-semibold"> Takvim</span>
              </y-card>
              <y-card
                @click="$router.push('/home/project')"
                class="h-48 w-48 flex flex-col text-center border-2 justify-center"
              >
                <img
                  class="px-12 pt-4"
                  src="../assets/icons/proje.svg"
                  alt=""
                />
                <span class="text-center font-semibold"> Proje</span>
              </y-card>
              <y-card
                @click="$router.push('/home/office')"
                class="h-48 w-48 flex flex-col text-center border-2 justify-center"
              >
                <img
                  class="px-12 pt-4"
                  src="../assets/icons/office.d24d82a.svg"
                  alt=""
                />
                <span class="text-center font-semibold"> Ofis</span>
              </y-card>
              <y-card
                @click="$router.push('/home/note')"
                class="h-48 w-48 flex flex-col text-center border-2 justify-center"
              >
                <img class="px-12 pt-4" src="../assets/icons/not.svg" alt="" />
                <span class="text-center font-semibold"> Not</span>
              </y-card>
              <y-card
                @click="$router.push('/home/contact')"
                class="h-48 w-48 flex flex-col text-center border-2 justify-center"
              >
                <img
                  class="px-12 pt-4"
                  src="../assets/icons/rehber.svg"
                  alt=""
                />
                <span class="text-center font-semibold"> Rehber</span>
              </y-card>
              <y-card
                @click="$router.push('/home/forms')"
                class="h-48 w-48 flex flex-col text-center border-2 justify-center"
              >
                <img
                  class="px-12 pt-4"
                  src="../assets/icons/rehber.svg"
                  alt=""
                />
                <span class="text-center font-semibold"> Forms</span>
              </y-card>
            </div>
          </div>
          <div class="flex w-full flex-col justify-start py-28">
            <h1 class="py-6 font-bold text-3xl border-b-2 border-zinc-300">
              Sıkça Sorulan Sorular
            </h1>
            <div class="flex justify-between">
              <div class="pt-6 justify-between flex gap-10 flex-row">
                <div class="flex flex-col gap-4">
                  <question-link
                    link="#"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  ></question-link>
                  <question-link
                    link="#"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  ></question-link>
                </div>
                <div class="flex flex-col gap-4">
                  <question-link
                    link="#"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  ></question-link>
                  <question-link
                    link="#"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  ></question-link>
                  <question-link
                    link="#"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  ></question-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import questionLink from "@/components/question-link.vue";
</script>
