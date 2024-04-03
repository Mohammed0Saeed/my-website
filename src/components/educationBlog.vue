<template>
  <div class="blog">
    <p class="institute">{{ edus.institute }}</p>
    <p class="time-location">2023 - jetzt | Franfurt am Main, Germany</p>
    <p class="score">Score: 2+</p>
  </div>
</template>

<script>
import edus from "../json/education.json";
export default {
  name: "edPost",
  data: function () {
    return {
      education: edus,
    };
  },
};
</script>

<style scoped lang="scss">
.blog {
  width: 350px;
  height: 150px;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  p {
    margin: 0;
  }
  .institute {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;
  }
}
</style>
