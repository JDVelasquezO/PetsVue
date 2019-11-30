<template>
  <div class="column">
    <div class="table-container">
      <h1 class="title">Tabla de Mascotas</h1>
      <div class="table-container">
        <table
          class="table is-hoverable is-fullwidth"
          v-if="arrayPets.length !== 0"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Edad</th>
              <th>Tamaño</th>
              <th>Peso</th>
              <th>Características</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pet, index) in arrayPets" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ pet.getName }}</td>
              <td>{{ pet.getType }}</td>
              <td>{{ pet.getAge }} años</td>
              <td>{{ pet.getWeigth }} cm</td>
              <td>{{ pet.getSize }} kg</td>
              <div>
                <td v-if="pet.getType === 'Perro'">Raza: {{ pet.getRace }}</td>
                <td v-else-if="pet.getType === 'Gato'">
                  Color de ojos: {{ pet.getEyesColor }}
                </td>
                <td v-else-if="pet.getType === 'Loro'">
                  Color de plumas: {{ pet.getFeatherColor }}
                </td>
                <td v-else-if="pet.getType === 'Pez'">
                  Tipo de pez: {{ pet.getTypeFish }}
                </td>
              </div>
              <td>
                <button
                  @click="deletePet(index)"
                  class="button is-danger is-small"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          <h2 class="subtitle">No hay nada aquí</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deletePet(id) {
      this.arrayPets.splice(id, 1);
    }
  },
  props: ["arrayPets"]
};
</script>

<style lang="css" scoped>
.table :hover {
  cursor: pointer;
}
</style>
