<template>
  <div
    class="flex flex-row justify-between gap-4 mx-auto max-w-[1024px]"
    style="min-width: 60rem"
  >
    <div class="pb-4 pl-8 w-full pt-12" style="max-width: 40rem">
      <router-view></router-view>
      <span v-if="$route.name == 'calendar'">
        <h1 class="font-bold text-xl pb-4">Konu başlığı</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At in
          tellus integer feugiat scelerisque varius morbi enim. Odio morbi quis
          commodo odio aenean sed adipiscing. Ut lectus arcu bibendum at varius.
          Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Proin
          fermentum leo vel orci porta. Tempor commodo ullamcorper a lacus
          vestibulum sed. Venenatis urna cursus eget nunc scelerisque viverra
          mauris in. Et netus et malesuada fames ac turpis egestas sed. Aliquam
          faucibus purus in massa tempor nec feugiat nisl. Pellentesque
          adipiscing commodo elit at imperdiet dui accumsan sit. Eu feugiat
          pretium nibh ipsum. Proin libero nunc consequat interdum varius.
        </p>
        <span>
          Ipsum dolor sit amet consectetur adipiscing. Duis tristique
          sollicitudin nibh sit amet commodo. Tortor consequat id porta nibh
          venenatis. Et netus et malesuada fames ac turpis egestas. Pellentesque
          massa placerat duis ultricies lacus sed turpis. Dictumst quisque
          sagittis purus sit amet volutpat consequat mauris nunc. Risus in
          hendrerit gravida rutrum quisque non tellus. Sit amet nisl purus in
          mollis. Sed euismod nisi porta lorem mollis aliquam. Adipiscing elit
          duis tristique sollicitudin nibh. Praesent semper feugiat nibh sed
          pulvinar. Aliquet bibendum enim facilisis gravida. Integer feugiat
          scelerisque varius morbi enim nunc faucibus.
        </span>
        <span>
          Ipsum dolor sit amet consectetur adipiscing. Duis tristique
          sollicitudin nibh sit amet commodo. Tortor consequat id porta nibh
          venenatis. Et netus et malesuada fames ac turpis egestas. Pellentesque
          massa placerat duis ultricies lacus sed turpis. Dictumst quisque
          sagittis purus sit amet volutpat consequat mauris nunc. Risus in
          hendrerit gravida rutrum quisque non tellus. Sit amet nisl purus in
          mollis. Sed euismod nisi porta lorem mollis aliquam. Adipiscing elit
          duis tristique sollicitudin nibh. Praesent semper feugiat nibh sed
          pulvinar. Aliquet bibendum enim facilisis gravida. Integer feugiat
          scelerisque varius morbi enim nunc faucibus.
        </span>
        <span>
          Ipsum dolor sit amet consectetur adipiscing. Duis tristique
          sollicitudin nibh sit amet commodo. Tortor consequat id porta nibh
          venenatis. Et netus et malesuada fames ac turpis egestas. Pellentesque
          massa placerat duis ultricies lacus sed turpis. Dictumst quisque
          sagittis purus sit amet volutpat consequat mauris nunc. Risus in
          hendrerit gravida rutrum quisque non tellus. Sit amet nisl purus in
          mollis. Sed euismod nisi porta lorem mollis aliquam. Adipiscing elit
          duis tristique sollicitudin nibh. Praesent semper feugiat nibh sed
          pulvinar. Aliquet bibendum enim facilisis gravida. Integer feugiat
          scelerisque varius morbi enim nunc faucibus.
        </span>
      </span>
    </div>
    <div class="w-1/4 z-10">
      <y-navigation-drawer class="bottom-0 h-auto sticky top-[64px]" open>
        <y-dropdown-drawer
          title="Konu Başlığı"
          toggleIcon="yi yi-arrow-right"
          collapse
        >
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            @click="$router.push('/home/calenadar/konu1mail')"
          >
            Konu1
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="$router.push('/home/calendar/konu2mail')"
          >
            Konu2
          </y-dropdown-drawer-item>
        </y-dropdown-drawer>
        <y-dropdown-drawer
          title="Konu Başlığı"
          toggleIcon="yi yi-arrow-right"
          collapse
        >
          <y-dropdown-drawer-item class="gap-1" prefix="yi yi-minus">
            Konu
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi yi-minus"
            postfix="yi yi-arrow-right"
          >
            Konu
          </y-dropdown-drawer-item>
        </y-dropdown-drawer>
        <y-dropdown-drawer
          title="Konu Başlığı"
          toggleIcon="yi yi-arrow-right"
          collapse
        >
          <y-dropdown-drawer-item class="gap-1" prefix="yi  yi-minus">
            Konu
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
          >
            Konu
          </y-dropdown-drawer-item>
        </y-dropdown-drawer>
      </y-navigation-drawer>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
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
