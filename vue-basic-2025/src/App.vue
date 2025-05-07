<script setup>
import { ref, onMounted } from "vue";

const name = ref("Vue Basic 2025");
const status = ref("active");
const tasks = ref(["Task One", "Task Two", "Task Three"]);
const newTask = ref("");

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deletedTask = (index) => {
  tasks.value.splice(index, 1);
};

// using onMounted lifecycle hook
onMounted(async () => {
  try {
    const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await respone.json();
    tasks.value = data.map((task) => task.title);
    console.log("Place Holder :", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

</script>

<template>
  <h2 class="text-center">{{ name }}</h2>
  <h1 class="bg-blue-500 text-white p-5">Hello Tailwind CSS!</h1>
  <p v-if="status === active">User is {{ status }}</p>
  <p v-else-if="status === pending">User is {{ status }}</p>
  <p v-else>User is {{ status }}</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h2>Tasks:</h2>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <span>
        {{ task }}
      </span>
      <button @click="deletedTask(index)">Deleted</button>
    </li>
  </ul>
  <button @click="toggleStatus">Change Status</button>
</template>
