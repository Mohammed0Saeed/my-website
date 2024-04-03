<template>
  <main>
    <section class="contact-methods">
      <a href="mailto:s.mohddheia@gmail.com" class="mail">
        <img src="../assets/img/gmail-new-icon5198.jpg" alt="mail" />
      </a>
      <a
        href="https://github.com/Mohammed0Saeed"
        style="background-color: white"
        class="github"
      >
        <img src="../assets/img/github-icon.png" alt="github" />
      </a>
      <a href="#" style="background-color: white" class="twitter">
        <img src="../assets/img/twitter-icon.png" alt="twitter" />
      </a>
      <a href="#" style="background-color: white" class="linkedin">
        <img src="../assets/img/linkedin-icon.svg" alt="linkedin" />
      </a>
    </section>
  </main>
</template>

<style lang="scss" scoped>
// design of the main section
section {
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  // responsive design of contacts
  @media (max-width: 550px) {
    display: grid;
    .mail {
      grid-column: 1;
      grid-row: 1;
    }
    .github {
      grid-column: 1;
      grid-row: 2;
    }
    .twitter {
      grid-column: 2;
      grid-row: 2;
    }
  }
  a {
    width: 200px;
    height: 200px;
    @media (max-width: 550px) {
      width: 150px;
      height: 150px;
    }
    border-radius: 1rem;
    overflow: hidden;
    background-color: #1c1c1c;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: 0.3s ease-in-out;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
<script>
export default {
  name: "contactView",
};
</script>
