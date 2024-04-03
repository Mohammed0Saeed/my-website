<template>
  <main>
    <section class="websites">
      <a
        class="website one"
        href="https://mohammed0saeed.github.io/projects/Laraverse/home.html"
      >
        <img src="../assets/img/laraverse.png" alt="laraverse website" />
        <div class="over-layer"></div>
        <h2>Laraverse</h2>
      </a>
      <a
        class="website two"
        href="https://mohammed0saeed.github.io/projects/child%20store/home.html"
      >
        <img src="../assets/img/child-com.png" alt="laraverse website" />
        <div class="over-layer"></div>
        <h2>Child.com</h2>
      </a>
      <a
        class="website three"
        href="https://mohammed0saeed.github.io/projects/Edukated/index.html"
      >
        <img src="../assets/img/edukated.png" alt="laraverse website" />
        <div class="over-layer"></div>
        <h2>Edukated</h2>
      </a>
    </section>
    <section class="other-projects">
      <a class="other" href="#">
        <img src="../assets/img/coming-soon.jpg" alt="coming soon" />
        <div class="over-layer"></div>
        <h2>coming soon</h2>
      </a>
      <a class="other" href="#">
        <img src="../assets/img/coming-soon.jpg" alt="coming soon" />
        <div class="over-layer"></div>
        <h2>coming soon</h2>
      </a>
    </section>
  </main>
</template>
<style lang="scss" scoped>
// import responsive settings
@import "../sass/portfolioResp";
main {
  width: 100vw;
  height: 85vh;
  display: flex;

  // styling of websites gallery
  .websites {
    width: 60%;
    height: fit-content;
    padding: 1rem;
    display: grid;
    gap: 1rem;

    // locating the websites in a grid
    .one {
      grid-column: 1;
      grid-column-end: 3;
      grid-row-start: 1;
    }
    .two {
      grid-column: 1;
      grid-row: 2;
    }
    .three {
      grid-column: 2;
      grid-row: 2;
    }

    // website box design
    .website {
      width: 100%;
      height: 300px;
      overflow: hidden;
      border-radius: 1rem;
      position: relative;
      transition: 0.3s ease;

      // image styling
      img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }

      // overlayer with gradient
      .over-layer {
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: linear-gradient(transparent, 50%, #000);
        transform: translateY(10rem);
        opacity: 0.8;
        transition: all 0.3s ease;
      }

      // name's of the website styling
      h2 {
        position: absolute;
        bottom: 2rem;
        left: 4rem;
        font-size: 3rem;
        color: #fff;
        transform: translateY(10rem);
        transition: all 0.3s ease;
      }

      // small effect when hovering
      &:hover {
        transform: scale(1.025);
        h2 {
          transform: translateY(0);
        }
        .over-layer {
          transform: translateY(0);
        }
      }
    }
  }

  // sb projects that I will add in the future
  .other-projects {
    width: 40%;
    height: fit-content;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;

    // each box styling
    .other {
      display: block;
      width: 100%;
      height: 300px;
      overflow: hidden;
      border-radius: 1rem;
      position: relative;
      transition: 0.3s ease;

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        object-fit: cover;
      }

      .over-layer {
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: linear-gradient(transparent, 50%, #000);
        transform: translateY(10rem);
        opacity: 0.8;
        transition: all 0.3s ease;
      }
      h2 {
        position: absolute;
        bottom: 2rem;
        left: 4rem;
        font-size: 3rem;
        color: #fff;
        transform: translateY(10rem);
        transition: all 0.3s ease;
      }

      &:hover {
        transform: scale(1.025);
        h2 {
          transform: translateY(0);
        }
        .over-layer {
          transform: translateY(0);
        }
      }
    }
  }
}
</style>
<script>
export default {
  name: "experienceView",
};
</script>
