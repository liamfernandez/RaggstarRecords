<script lang="ts">
  import PhotoCarousel from '$lib/components/PhotoCarousel.svelte';
  import VideoContainer from '$lib/components/VideoContainer.svelte';
</script>

<svelte:head>
  <title>
    Atlanta Recording Studio | RAGGSTARRECORDS
  </title>
</svelte:head>

<section id="Book Now Hero Video">
  <VideoContainer />
</section>
<section id="Main Room + Pics">
  <span class=" bg-black w-full flex flex-col items-center py-4 md:py-10 justify-center">
    <h1 class=" text-white font-Futura text-2xl md:text-5xl ">
      Main Room
    </h1>
    <p class="md:hidden text-[10px] opacity-50">swipe to view pictures</p>
  </span>
  <PhotoCarousel />
</section>
