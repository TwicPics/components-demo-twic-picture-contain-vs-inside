<template>
  <main>
    <Header/>
    <TwicPicture
      alt="Photo by Karsten Winegeart from Unsplash"
      src="puppy-dressed-as-a-reindeer.jpeg"
      eager
      focus="@xl top"
      ratio="
        3/4
        @666 1
        @md 4/3
        @xl 21/9
      "
      sizes="
        (max-width: 1200px) calc(100vw - 48px),
        1200px
      "
    />
    <div class="grid">
      <TwicImg
        v-for="(image, index) in images"
        :key="index"
        alt="Photo by Karsten Winegeart from Unsplash"
        class="item"
        ratio="4/3"
        :src="image"
        mode="cover"
      ></TwicImg>
    </div>
  </main>
</template>
<style>

body {
  background-color: #111317;
}

main {
  padding: 24px;
  margin: auto;
  max-width: 1200px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(311px, 1fr));
  grid-gap: 2rem;
  padding-top: 2rem;
}

</style>
<script>
export default {
  data() {
    return {
      images: [
        'components/dogs/karsten-winegeart-RU6wtyteGgc-unsplash.jpg',
        'components/dogs/karsten-winegeart-7sgPfAcM6_o-unsplash.jpg',
        'components/dogs/karsten-winegeart-uNVjLyA3xu8-unsplash.jpg',
        'components/dogs/karsten-winegeart-S8pPwBfl1XM-unsplash.jpg',
        'components/dogs/karsten-winegeart-6DEiSW4PcTE-unsplash.jpg',
        'components/dogs/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg',
        'components/dogs/karsten-winegeart-TKginKNgJDU-unsplash.jpg',
        'components/dogs/karsten-winegeart-yKs-wg3RiSs-unsplash.jpg',
        'components/dogs/karsten-winegeart-zd3P3o04tbM-unsplash.jpg',
        'components/dogs/karsten-winegeart-kxmrh4QMs70-unsplash.jpg',
        'components/dogs/karsten-winegeart-5PVXkqt2s9k-unsplash.jpg',
        'components/dogs/karsten-winegeart-aOXXUPGSu0I-unsplash.jpg',
      ],
    };
  },
};
</script>
