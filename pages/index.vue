<template>

  <div class="flex flex-col justify-between h-screen">

    <!-- <div id="bg-image" class="w-full h-4/5"></div> -->

    <ul class="bg-image relative w-full h-4/5">
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-01.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-02.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-03.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-04.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-05.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-06.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-07.jpg" class="absolute w-full h-full object-cover"></li>
      <li class="bg-image-item"><img src="~/assets/bg/bg-image-08.jpg" class="absolute w-full h-full object-cover"></li>
    </ul>

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
    // const ImagesItems = document.querySelectorAll('.bg-image-item')


    // Randomize images
    // https://stackoverflow.com/a/11972692/1615587
    for (var i = ImagesContainer.children.length; i >= 0; i--) {
      ImagesContainer.appendChild(ImagesContainer.children[Math.random() * i | 0]);
    }



    // Just some time for loading
    setTimeout(function () {

      // Slideshow
      // Every 10s fades out image, remove and prepend
      setInterval(function(){
        const last = document.querySelector('.bg-image-item:last-child')
        last.classList.add('off')
        
        // wait for the fadeout animation ends
        setTimeout(function(){
          last.remove()
          last.classList.remove('off')
          ImagesContainer.prepend(last)
        }, 2000)
      }, 10000)

      ImagesContainer.classList.add('on')
    }, 100)

    ImagesContainer.addEventListener('click', function(){
      
    })

  }
}
</script>
