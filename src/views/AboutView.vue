<template>
  <main>
    <div class="post-container">
      <section class="post-one">
        <div class="text-area">
          I am Mohammed Saeed, a computer science student from Yemen. My
          Interest in computers and machine learning began when I played a chess
          match with my father, who told me a story which changed the way I see
          computers. He told me that once upon a time, a robot could beat Garry
          Kasparov, who was the world chess champion at that time and one of the
          highly skilled players in chess in the history. That was a story that
          could be forgotten easily with the time, but for it was the ignite
          that will push me towards studying computer science and forming my
          live around the goal of specializing myself in Artificial Intelligence
          and Machine learning.
        </div>
        <img
          class="post-img"
          src="../assets/img/Garry.jpeg"
          alt="Garry vs Deep-Blue"
        />
        <!-- layer to make the text readable -->
        <div class="post-layer"></div>
      </section>
      <h2>Education</h2>
      <section class="post-two">
        <img
          class="post-img"
          src="../assets/img/JAHS.jpeg"
          alt="Jamal-Abdulnasser-School-logo"
        />
        <div class="text-area">
          I completed my high school at Jamal Abdulnasser High School (JAHS),
          which is a special high school for students with top scores across the
          country. I got 95.13% after the general high school examination, and
          100 in mathematics.
        </div>
        <div class="post-layer"></div>
      </section>
      <section class="post-three">
        <div class="text-area">
          After the completion of my high school, I decided to start studying
          computer science with some free online courses from Harvard X, and
          then I did two Semesters in this field at Sana’a University, before I
          decided to head to Germany to complete my Bachelor there. My GPA at
          the first year was 92%. While I was studying I learned C++, Python,
          HTML, CSS, JavaScript and SQL.
        </div>
        <img
          class="post-img"
          src="../assets/img/sanaa-university.jpg"
          alt="Sanaa-University-Logo"
        />
        <div class="post-layer"></div>
      </section>
      <section class="post-four">
        <img
          class="post-img"
          src="../assets/img/goethe_logo.jpg"
          alt="Geothe-University"
        />
        <div class="text-area">
          And currently I am doing a preparation year at Goethe University in
          German to prepare myself for the German system of education. I study
          mathematics, physics, chemistry, German and computer science
          (introduction). In addition to the programming languages that I have
          learned, I am learning now Java and Vue Js. My preparation year will
          end in July 2024, and then I am planning to study at the Technical
          University of Darmstadt.
        </div>
        <div class="post-layer"></div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style lang="scss" scoped>
// import the resposive design
@import "../sass/aboutResp";

// design of the main section
main {
  width: 100vw;
  height: 90vh;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }

  // post container design
  .post-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    // general styling for each post
    section {
      width: 80%;
      display: flex;
      justify-content: center;

      // a post overlayer that will only appear in a specific width
      .post-layer {
        display: none;
      }
      // general styling for text content
      .text-area {
        width: 450px;
        padding: 1rem;
        background-color: #171717;
        text-align: left;
        letter-spacing: 0.5px;
        color: #ddd;
      }
      // general styling for the img close to the content
      .post-img {
        width: 300px;
        height: 300px;
        object-fit: cover;
      }
    }
  }
}
</style>
