<template>
  <div class="column">
    <div class="table-container">
      <h1 class="title">Tabla de Mascotas</h1>
      <div class="table-container">
        <table border="1" class="table is-hoverable is-fullwidth" v-if="arrayPets.length !== 0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Edad</th>
              <th>Tamaño</th>
              <th>Peso</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pet, index) in arrayPets" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ pet.getName }}</td>
              <td>{{ pet.getType }}</td>
              <td>{{ pet.getAge }} años</td>
              <td>{{ pet.getWeigth }} kg</td>
              <td>{{ pet.getSize }} cm</td>
              <div>
                <td v-if="pet.getType === 'Perro'">Raza: {{ pet.getRace }}</td>
                <td v-else-if="pet.getType === 'Gato'">Color de ojos: {{ pet.getEyesColor }}</td>
                <td v-else-if="pet.getType === 'Loro'">Color de plumas: {{ pet.getFeatherColor }}</td>
                <td v-else-if="pet.getType === 'Pez'">Tipo de pez: {{ pet.getTypeFish }}</td>
              </div>
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
  props: ["arrayPets"]
};
</script>

<style lang="scss" scoped>
</style>