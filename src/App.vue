<template>
  <img
    src="./assets/img/photo_2024-01-02_09-07-06.jpg"
    id="background-img"
    alt="profile"
  />
  <div class="layer"></div>
  <nav>
    <div class="logo">{{ name }}</div>
    <div
      class="container"
      aria-checked="unclicked"
      id="btn"
      @click="clickedNav()"
    >
      <div class="small-nav-1" id="btn1"></div>
      <div class="small-nav-2" id="btn2"></div>
      <div class="small-nav-3" id="btn3"></div>
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>

    <!-- small nav bar -->
    <div class="links-small-nav" id="small-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fdb500;
  position: relative;
}

#background-img {
  display: none;
  @media (max-width: 1050px) {
    display: block;
    position: absolute;
    z-index: -3;
  }
}

// animtion
@keyframes zooming {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.7);
  }
}
.layer {
  display: none;
  @media (max-width: 1050px) {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.9;
    background-color: #111;
    z-index: -2;
    animation: zooming 60s linear infinite;
  }
}

nav {
  padding: 1rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
  @media (max-width: 1050px) {
    justify-content: space-between;
  }

  //small navigation bar
  .container {
    display: none;
    position: relative;
    height: 1.25rem;
    cursor: pointer;
    @media (max-width: 1050px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease;
    }
    @media (max-width: 300px) {
      height: 1rem;
    }
    .small-nav-1 {
      width: 2rem;
      height: 0.25rem;
      border-radius: 1rem;
      background-color: #fdb500;
      transition: all 0.3s ease;
      @media (max-width: 300px) {
        width: 1.25rem;
        height: 0.2rem;
      }
    }
    .small-nav-2 {
      width: 2rem;
      height: 0.25rem;
      border-radius: 1rem;
      background-color: #fdb500;
      transition: all 0.3s ease;
      @media (max-width: 300px) {
        width: 1.25rem;
        height: 0.2rem;
      }
    }
    .small-nav-3 {
      width: 2rem;
      height: 0.25rem;
      border-radius: 1rem;
      background-color: #fdb500;
      transition: all 0.3s ease;
      @media (max-width: 300px) {
        width: 1.25rem;
        height: 0.2rem;
      }
    }
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    @media (max-width: 300px) {
      font-size: 1rem;
    }
  }

  .links {
    width: 50vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1050px) {
      display: none;
    }
  }

  #btn {
    position: relative;
    z-index: 7;
  }
  .links-small-nav {
    display: none;
    transition: all 0.3s ease-out;
    position: absolute;
    @media (max-width: 1050px) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 20rem;
      height: 100vh;
      background: #111;
      z-index: 6;
      top: 0;
      right: 0;
      transform: translateX(100%);
    }
    @media (max-width: 450px) {
      width: 100%;
      height: calc(100vh - 2rem);
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    transition: 0.2s ease-in-out;

    &:hover {
      color: white;
    }

    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>

<script>
export default {
  data: function () {
    return {
      name: "Mohammed Saeed",
    };
  },
  methods: {
    clickedNav: function () {
      let btn = document.getElementById("btn");
      let btn1 = document.getElementById("btn1");
      let btn2 = document.getElementById("btn2");
      let btn3 = document.getElementById("btn3");
      let smallNav = document.getElementById("small-nav");
      let elementWidth;

      smallNav.onclick = () => {
        btn.ariaChecked = "unclicked";
        btn1.style.transform = "translateX(0)";
        btn2.style.display = "block";
        btn3.style.transform = "translateX(0)";
        smallNav.style.transform = "translateX(100%)";
      };
      if (window.outerWidth < 300) {
        elementWidth = "6.5px";
      } else {
        elementWidth = "8px";
      }

      if (btn.ariaChecked === "clicked") {
        btn.ariaChecked = "unclicked";
        btn1.style.transform = "translateX(0)";
        btn2.style.display = "block";
        btn3.style.transform = "translateX(0)";
        smallNav.style.transform = "translateX(100%)";
      } else if (btn.ariaChecked === "unclicked") {
        btn.ariaChecked = "clicked";
        btn1.style.transform = `translateY(${elementWidth}) rotate(-45grad)`;
        btn2.style.display = "none";
        btn3.style.transform = `translateY(-${elementWidth}) rotate(45grad)`;
        smallNav.style.transform = "translateX(0)";
      }
    },
  },
};
</script>
