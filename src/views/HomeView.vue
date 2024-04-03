<template>
  <div class="home">
    <main>
      <section class="one" id="one">
        <div class="img-container">
          <img
            src="../assets/img/photo_2024-01-02_09-07-06.jpg"
            alt="profile image"
          />
        </div>
      </section>
      <section class="two" id="two">
        <div class="heading">
          <h2>I'm <span>Mohammed Saeed</span></h2>
          <h2>CS Student</h2>
        </div>
        <p>
          I am a Yemeni Computer Science student who has interest in Machine
          Learning and Data Science. In this website you can have a quick look
          at my history with these magical machine called computers.
        </p>
        <a class="spec-btn" href="">
          <p class="special-p">my resume</p>
          <button>
            <img
              src="../assets/img/download-icon.svg"
              alt="arrow image"
              class="download-icon"
            />
          </button>
        </a>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  height: calc(100vh - 3rem);
  display: flex;
  gap: 10%;

  @media (max-width: 1050px) {
    justify-content: center;
    gap: 0;
  }

  // animation for section one and two
  @keyframes appear {
    0% {
      transform: translateY(-2rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  // section one styling
  .one {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1050px) {
      display: none;
    }

    // img styling
    .img-container {
      width: 400px;
      height: 500px;
      position: relative;
      z-index: 1;
      transition: all 0.2s ease-in-out;

      &::before {
        content: " ";
        height: 100%;
        width: 100%;
        background-color: #fdb500;
        position: absolute;
        z-index: -1;
        top: 2rem;
        right: 2rem;
        transition: all 0.2s ease-out;
      }

      &:hover {
        transform: scale(1.1);
        &::before {
          top: 0;
          right: 0;
        }
      }
    }
  }

  // section two styling
  .two {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 1rem;
    @media (max-width: 1050px) {
      width: 80%;
      align-items: center;
    }

    // heading styling
    h2 {
      font-size: 2rem;
      color: white;
      margin: 0;
      padding: 0.5rem;
      text-align: left;
      @media (max-width: 1050px) {
        text-align: center;
      }
      @media (max-width: 450px) {
        font-size: 1.5rem;
      }
      @media (max-width: 300px) {
        font-size: 1.2rem;
      }

      span {
        font-weight: bold;
        color: #fdb500;
      }
    }

    // description style
    p {
      width: 80%;
      color: #afafaf;
      text-align: left;
      @media (max-width: 1050px) {
        text-align: center;
      }
      @media (max-width: 450px) {
        font-size: 0.8rem;
      }
      @media (max-width: 300px) {
        font-size: 0.7rem;
      }
    }

    //special button styling
    .spec-btn {
      width: 12rem;
      height: 3rem;
      display: flex;
      justify-content: space-between;
      align-content: center;
      border: 2px solid #fdb500;
      border-radius: 3rem;
      cursor: pointer;
      transition: all 0.2s ease;
      .special-p {
        width: 50%;
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
        position: relative;
        height: 3rem;
        margin: 0 0 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        transition: all 0.2s ease;
      }
      // animation for the button
      @keyframes pop-up {
        0% {
          transform: scale(1);
        }
        35% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        65% {
          transform: scale(1);
        }
        100% {
          transform: scale(1);
        }
      }
      button {
        width: 3rem;
        height: 3rem;
        overflow: hidden;
        background-color: #fdb500;
        outline: none;
        border: 2px solid #fdb500;
        position: relative;
        z-index: -1;
        border-radius: 50%;
        transition: all 0.2s ease;
        box-sizing: border-box;
        padding: 0.5rem;
        .download-icon {
          transition: all 0.2s ease;
          animation: pop-up 1s linear infinite;
        }
      }

      &:hover {
        background-color: #fdb500;
        p {
          width: 9rem;
          letter-spacing: 2px;
          transform: translateX(5%);
        }
        button {
          img {
            transform: translateX(50%);
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "HomeView",
};
</script>
