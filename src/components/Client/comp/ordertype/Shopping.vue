<template>
  <div>
    <div class="columns">
      <div class="column is-6">
        <b-field label="From">
          <b-input v-model="from"></b-input>
        </b-field>
      </div>

      <div class="column is-6">
        <b-field label="To">
          <b-input v-model="to"></b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>