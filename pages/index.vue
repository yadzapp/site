<template>

  <div class="flex flex-col justify-between h-screen">

    <!-- Images slideshow -->
    <ul class="bg-image relative w-full h-4/5 cursor-crosshair">
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-01.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-02.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-03.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-04.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-05.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-06.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-07.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-08.jpg" class="absolute w-full h-full object-cover"></li>
    </ul>

    <!-- Logo and Social -->
    <div class="grow flex items-center justify-between px-4 md:px-12">

      <!-- Logo -->
      <div class="flex items-center gap-6">
        <div id="logo" v-html="yadzLogo" />
        <p>Yet Another DayZ Launcher</p>
      </div>

      <!-- Social -->
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

    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-FTTMEJ49JT');



    // Interactions
    const ImagesContainer = document.querySelector('.bg-image')
    ImagesContainer.classList.add('on')
    // const ImagesItems = document.querySelectorAll('.bg-image-item')



    // Randomize images
    // https://stackoverflow.com/a/11972692/1615587
    for (var i = ImagesContainer.children.length; i >= 0; i--) {
      ImagesContainer.appendChild(ImagesContainer.children[Math.random() * i | 0]);
    }



    // Slideshow
    // Every xs fades out image, remove and prepend
    const slideshowTime = 10000
    setInterval(StartSlideshow, slideshowTime)


    // Click on image slideshow
    ImagesContainer.addEventListener('click', RemoveLastChild)



    // Start slideshow interval
    function StartSlideshow(){
      const last = document.querySelector('.bg-image-item:last-child')
      last.classList.add('off')

      // wait for the fadeout animation ends
      setTimeout(RemoveLastChild, 2000)
    }



    // Remove image last child
    function RemoveLastChild(){
      const last = document.querySelector('.bg-image-item:last-child')
      last.remove()
      last.classList.remove('off')
      ImagesContainer.prepend(last)
    }
  }
}
</script>
