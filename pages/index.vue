<template>

  <div class="flex flex-col justify-between h-screen">

    <!-- <div id="bg-image" class="w-full h-4/5"></div> -->

    <div class="bg-image relative w-full h-4/5">
      <img src="~/assets/bg/bg-image-01.jpg" class="bg-image-item absolute w-full h-full object-cover">
      <img src="~/assets/bg/bg-image-02.jpg" class="bg-image-item absolute w-full h-full object-cover">
      <img src="~/assets/bg/bg-image-03.jpg" class="bg-image-item absolute w-full h-full object-cover">
      <img src="~/assets/bg/bg-image-04.jpg" class="bg-image-item absolute w-full h-full object-cover">
      <img src="~/assets/bg/bg-image-05.jpg" class="bg-image-item absolute w-full h-full object-cover">
      <img src="~/assets/bg/bg-image-06.jpg" class="bg-image-item absolute w-full h-full object-cover">
      <img src="~/assets/bg/bg-image-07.jpg" class="bg-image-item absolute w-full h-full object-cover">
      <img src="~/assets/bg/bg-image-08.jpg" class="bg-image-item absolute w-full h-full object-cover">
    </div>

    <!-- Grid 12 cols -->
    <div class="grow flex items-center justify-between px-12">

      <div class="flex items-center gap-6">
        <div id="logo" v-html="yadzLogo" />
        <p class="">Yet Another DayZ Launcher</p>
      </div>

      <ul class="flex flex-row space-x-6">
        <!-- <li class="opacity-50">Join the conversation</li> -->
        <li><a href="https://twitter.com/yadzapp" title="Twitter" class="">Twitter</a></li>
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

    const ImagesContainer = document.querySelector('.bg-image')
    const ImagesItems = document.querySelectorAll('.bg-image-item')

    setTimeout(function () {
      setInterval(function(){
        const last = document.querySelector('.bg-image-item:last-child')
        last.classList.add('off')

        setTimeout(function(){
          last.remove()
          last.classList.remove('off')
          ImagesContainer.prepend(last)
        }, 2000)
      }, 8000)
    }, 200)

  }
}
</script>
