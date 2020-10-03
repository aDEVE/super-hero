<template>
  <div class="img" :style="{ backgroundImage: `url('${image}')` }">
    <div class="footer">
      <span class="name">Joker</span>
      <ul class="skills">
        <li v-for="skill in skills" :key="skill" class="skill">
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
    skills: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.img {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 250px;
  border-radius: 20px;
}

.footer {
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100px;
  background: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.name {
  font-size: 24px;
  line-height: 32px;
  color: white;
}

.skills {
  display: flex;
  align-self: flex-end;
  list-style: none;
}

.skill + .skill {
  margin-left: 5px;
}
</style>
