<template>
  <main>
    <Header/>
    <button @click="toggleMode" class="toggle-button">Switch Mode</button>
    <p class="label">{{ mode === 'cover' ? 'This Is Cover' : 'This Is Contain' }}</p>
    <hr>
    <p class="label">This Uses TwicPicture</p>
    <TwicPicture
      alt="Photo by Karsten Winegeart from Unsplash"
      src="puppy-dressed-as-a-reindeer.jpeg"
      eager
      :mode="mode"
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
    <TwicPicture
      alt="Photo by Karsten Winegeart from Unsplash"
      src="components/dogs/karsten-winegeart-7sgPfAcM6_o-unsplash.jpg"
      eager
      :mode="mode"
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
    <hr>
    <p class="label">This Uses TwicImg</p>
    <div class="grid">
      <TwicImg
        v-for="(image, index) in images"
        :key="index"
        alt="Photo by Karsten Winegeart from Unsplash"
        class="item"
        ratio="4/3"
        :src="`${image}?v=${mode=='contain' ? 1 : 0}`"
        :mode="mode"
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

.toggle-button {
  display: block;
  margin: 16px auto;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-button:hover {
  background-color: #0056b3;
}

.label {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  margin-top: 16px;
}
</style>

<script>
export default {
  data() {
    return {
      mode: "cover",
      images: [
        'puppy-dressed-as-a-reindeer.jpeg',
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
  methods: {
    toggleMode() {
      this.mode = this.mode === "cover" ? "contain" : "cover";
    },
  },
};
</script>
