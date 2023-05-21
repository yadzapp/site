<template>

  <div class="flex flex-col justify-between h-screen pb-8">

    <!-- Logo -->
    <div class="w-full p-2">
      <img src="@/assets/yadz-logo.svg" class="w-full">
    </div>

    <!-- Grid 12 cols -->
    <div class="flex justify-between px-8">

      <p class="">Yet Another DayZ Launcher</p>

      <ul class="flex flex-row space-x-8">
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
