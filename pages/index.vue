<template>

  <div class="flex flex-col justify-between h-screen">

    <!-- Images slideshow -->
    <div class="bg-wrapper relative w-full h-4/5">
      <ul class="bg-image w-full h-full">
        <li class="bg-image-item"><img src="/assets/bg-1.jpg" class="image absolute w-full h-full object-cover"></li>
        <li class="bg-image-item"><img src="/assets/bg-2.jpg" class="image absolute w-full h-full object-cover"></li>
      </ul>
      <div class="credits absolute bottom-4 md:bottom-12 right-4 md:right-12 opacity-40 text-xs">
        Screenshots by <a href="https://www.twitch.tv/tuckchaylorz" title="TuckChaylorZ Twitch">TuckChaylorZ</a>
      </div>
    </div>

    <!-- Logo and Social -->
    <div class="grow flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between px-4 md:px-12 py-6 md:py-0">

      <!-- Logo -->
      <div class="flex items-start md:items-center flex-col md:flex-row gap-0 md:gap-6">
        <div id="logo" class="w-32 md:w-44 pb-2 md:pb-0" v-html="yadzLogo" />
        <div class="flex flex-col">
          <p>Yet Another DayZ Launcher</p>
          <p class="opacity-60">Simple app for launching DayZ. Coming soon.</p>
        </div>
      </div>

      <!-- Social -->
      <ul class="flex flex-row gap-2 md:gap-6 pt-4 md:pt-0">
        <li><a href="https://discord.gg/rDxwBqnVPq" title="Discord">Discord</a></li>
        <li><a href="https://twitter.com/yadzapp" title="Twitter">Twitter</a></li>
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





    // Slideshow 01
    // const imagesContainer = document.querySelector('.bg-image')
    // imagesContainer.classList.add('on')

    // Randomize images - https://stackoverflow.com/a/11972692/1615587
    // for (var i = imagesContainer.children.length; i >= 0; i--) {
    //   imagesContainer.appendChild(imagesContainer.children[Math.random() * i | 0]);
    // }

    // Every x seconds
    // const slideshowTime = 6000
    // setInterval(startSlideshow, slideshowTime)


    // Click on image slideshow
    // imagesContainer.addEventListener('click', removeLastChild)


    // Fades out image, remove and prepend
    // function startSlideshow(){
    //   const last = document.querySelector('.bg-image-item:last-child')
    //   last.classList.add('off')

    //   // wait for the fadeout animation ends
    //   setTimeout(removeLastChild, 2200)
    // }


    // Remove image last child and prepend
    // Randomize image number
    // function removeLastChild(){
    //   const lastChild = document.querySelector('.bg-image-item:last-child')
    //   const randomNumber = Math.floor(Math.random() * 23) + 1;

    //   lastChild.querySelector('.image').src = "/assets/bg-" + randomNumber + ".jpg"

    //   lastChild.remove()
    //   lastChild.classList.remove('off')
    //   imagesContainer.prepend(lastChild)
    // }





    // Slideshow 02
    const imagesWrapper = document.querySelector('.bg-wrapper')
    const imagesContainer = document.querySelector('.bg-image')
    const images = document.querySelectorAll('.bg-image-item img')
    const imgQty = 23
    
    // Randomize images
    imagesContainer.classList.add('on')
    images.forEach(function(img){
      const randomNumber = Math.floor(Math.random() * imgQty) + 1;
      img.src = "/assets/bg-" + randomNumber + ".jpg"
    })

    // Every x seconds
    const slideshowTime = 8000
    setInterval(startSlideshow, slideshowTime)

    // Fades out image, remove and prepend
    function startSlideshow(){
      const last = document.querySelector('.bg-image-item:last-child')
      last.classList.add('off')

      // wait for the fadeout animation ends
      setTimeout(removeLastChild, 2800)
    }


    // Remove image last child and prepend
    // Randomize image number
    function removeLastChild(){
      const lastChild = document.querySelector('.bg-image-item:last-child')
      const randomNumber = Math.floor(Math.random() * 23) + 1;

      lastChild.querySelector('.image').src = "/assets/bg-" + randomNumber + ".jpg"

      lastChild.remove()
      lastChild.classList.remove('off')
      imagesContainer.prepend(lastChild)
    }
  }
}
</script>
