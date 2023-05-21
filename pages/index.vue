<template>

  <div class="flex flex-col justify-between h-screen">

    <div id="bg-image" class="w-full h-4/5"></div>

    <!-- Logo -->
    <!-- <div class="w-full">
      <img src="@/assets/yadz-logo.svg" class="w-full">
    </div> -->

    <!-- Grid 12 cols -->
    <div class="grow flex items-center justify-between px-12">

      <div class="flex items-center gap-6">
        <img src="@/assets/yadz-logo.svg" class="logo">
        <p class="">Yet Another DayZ Launcher</p>
      </div>

      <ul class="flex flex-row space-x-6">
        <li class="opacity-50">Join the conversation</li>
        <li><a href="https://discord.gg/cGYmqqYT" title="Discord" class="hover:underline">Discord</a></li>
        <li><a href="https://twitter.com/yadzapp" title="Twitter" class="hover:underline">Twitter</a></li>
      </ul>

      <!-- Item 4 cols -->
      <!-- <div class="flex justify-center items-center flex-col col-start-5 col-end-9"> -->

        <!-- Logo -->
        <!-- <img src="@/assets/yadz-logo.svg"> -->
        <!-- <h1 class="text-2xl font-bold tracking-tight mt-6">Yet Another DayZ Launcher</h1> -->
      <!-- </div> -->
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    // alert('hey')
  }
}
</script>
