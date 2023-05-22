<template>

  <div class="flex flex-col justify-between h-screen">

    <div id="bg-image" class="w-full h-4/5"></div>

    <!-- Grid 12 cols -->
    <div class="grow flex items-center justify-between px-12">

      <div id="logo" class="flex items-center gap-6">
        <div v-html="yadzLogo" />
        <p class="">Yet Another DayZ Launcher</p>
      </div>

      <ul class="flex flex-row space-x-6">
        <li class="opacity-50">For updates</li>
        <li><a href="https://twitter.com/yadzapp" title="Twitter" class="hover:underline">Twitter</a></li>
      </ul>
    </div>

  </div>
</template>

<script>
import yadzLogo from "~/assets/yadz-logo.svg?raw";

export default {
  data() {
    return { yadzLogo };
  },
  mounted() {
    // alert('hey')
  }
}
</script>
