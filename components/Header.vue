<template>
  <header>
    <a href="http://twicpics.com" target="_blank">
      <TwicImg
        class="logo"
        src="components/logos/twicpics-by-frontify-on-dark.png"
        ratio="300/58"
      ></TwicImg>
    </a>
    <nav>
      <a href="http://twicpics.com/blog/components-feature-twic-picture" target="_blank"> Blog post </a>
      <a href="https://github.com/TwicPics/components-demo-twic-picture/" target="_blank"> See on GitHub </a> </nav>
  </header>
</template>

<style>

.logo{
  max-width:300px;
}

header{
  align-items: center;
  display:grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom:1rem;
}

nav {
  display:flex;
  gap:1rem;
  justify-content: flex-end;
}

nav a {
  font-size: 1rem;
  color:#8B91A0;
  text-decoration: inherit;
}

nav a:hover {
  color:#FFF;
}

@media (min-width: 640px) {
  nav a {
    font-size: 1.25rem;
  }
}

</style>
