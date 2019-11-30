<template>
  <div class="column is-two-fifths">
    <h1 class="title">Registro de mascotas</h1>
    <form @submit.prevent="register(name, size, age, weigth, selected)" id="formRegister">
      <div class="field">
        <label class="label">Nombre</label>
        <div class="control">
          <input
            class="input"
            autocomplete="off"
            type="text"
            placeholder="Nombre"
            id="name"
            ref="name"
            v-model="name"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Tamaño</label>
        <div class="control">
          <input
            class="input"
            autocomplete="off"
            type="number"
            placeholder="Tamaño"
            id="size"
            v-model="size"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Edad</label>
        <div class="control">
          <input
            class="input"
            autocomplete="off"
            type="number"
            placeholder="Edad"
            id="age"
            v-model="age"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Peso</label>
        <div class="control">
          <input
            class="input"
            autocomplete="off"
            type="number"
            placeholder="Peso"
            id="weigth"
            v-model="weigth"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Tipo de Mascota</label>
        <div class="control">
          <div class="select">
            <select v-model="selected" id="select">
              <option disabled value>Seleccione una opción</option>
              <option v-for="(pet, id) in petsNames" :key="id">{{ pet }}</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div v-if="selected === 'Perro'" class="field">
          <label class="label">Perro</label>
          <div class="control">
            <div>
              <input class="input" v-model="race" type="text" placeholder="Raza" />
              <br />
            </div>
          </div>
        </div>
        <div v-else-if="selected === 'Gato'" class="field">
          <label class="label">Gato</label>
          <div class="control">
            <div>
              <input class="input" v-model="eyesColor" type="text" placeholder="Color de ojos" />
            </div>
          </div>
        </div>
        <div v-else-if="selected === 'Loro'" class="field">
          <label class="label">Loro</label>
          <div class="control">
            <div>
              <input class="input" v-model="featherColor" type="text" placeholder="Color de plumas" />
            </div>
          </div>
        </div>
        <div v-else-if="selected === 'Pez'" class="field">
          <label class="label">Loro</label>
          <div class="control">
            <div>
              <input class="input" v-model="type" type="text" placeholder="Tipo" />
            </div>
          </div>
        </div>
        <div v-else>
          <span></span>
        </div>
      </div>
      <br />
      <div class="control">
        <button class="button is-link">Registrar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Pet } from "../../model/Pet";
import { Dog } from "../../model/Dog.js";
import { Cat } from "../../model/Cat.js";
import { Parrot } from "../../model/Parrot.js";
import { Fish } from "../../model/Fish.js";

export default {
  data() {
    return {
      name: "",
      size: "",
      age: "",
      weigth: "",
      race: "",
      eyesColor: "",
      featherColor: "",
      type: "",
      petsNames: ["Perro", "Gato", "Loro", "Pez"],
      pet: Pet,
      pets: [],
      selected: ""
    };
  },
  methods: {
    register(name, size, age, weigth, specification) {
      this.validatePet(specification, name, size, age, weigth);
      this.pets.push(this.pet);
      this.reset(this.$refs.name);
    },
    validatePet(specification, name, size, age, weigth) {
      switch (specification) {
        case "Perro":
          this.pet = new Dog(name, size, age, weigth, this.race);
          break;
        case "Gato":
          this.pet = new Cat(name, size, age, weigth, this.eyesColor);
          break;
        case "Loro":
          this.pet = new Parrot(name, size, age, weigth, this.featherColor);
          break;
        case "Pez":
          this.pet = new Fish(name, size, age, weigth, this.type);
          break;
        default:
          break;
      }
    },
    reset(element) {
      element.focus();
      this.name = "";
      this.size = "";
      this.age = "";
      this.weigth = "";
      this.selected = "";
    }
  },
  mounted() {
    this.reset(this.$refs.name);
    this.$emit("arrayPets", this.pets);
  }
};
</script>

<style lang="scss" scoped>
</style>