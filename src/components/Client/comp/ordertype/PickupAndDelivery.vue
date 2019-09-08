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

    <div class="columns">
      <div class="column is-6">
        <b-field type="is-success" label="Item Weight">
          <b-select v-model="weight" placeholder="Select a order type" expanded>
            <option v-for="(option,i) in weights" :key="i">{{option}}</option>
          </b-select>
        </b-field>
      </div>

      <div class="column is-6">
        <b-field label="Est Price">
          <b-input v-model="est_price"></b-input>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <b-field label="Contacts">
          <b-input v-model="contact"></b-input>
        </b-field>
      </div>

      <div class="column is-6">
        <b-button
          type="is-success"
          @click="validateOrder"
          class="is-fullwidth mt-3"
          icon-left="plus"
        >Complete Order</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { llg } from "llg";
import uid from "uid";
export default {
  props: ["type"],
  data() {
    return {
      from: "",
      to: "",
      weight: "",
      est_price: 0,
      notes: "",
      contact: "",
      status: "pending",
      order_type: "Pick Up & Delivery",
      weights: [
        "<= 1kg",
        "> 1kg & <= 10kg",
        "> 10kg & <= 50kg",
        "> 50kg & <200kg",
        "200kg above"
      ]
    };
  },

  
  methods: {
    completeOrder() {
      let order = {
        order_id: uid(5),
        order_type: this.order_type,
        from: this.from,
        to: this.to,
        contact: this.contact,
        notes: this.notes,
        weight: this.weight,
        status: this.status,
        date: Date.now(),
        user_id: this.$session.get("xyz").uid,
        user_email: this.$session.get("xyz").email
      };

      //dispatch new order
      this.$store.dispatch('pnd_order', order);
      llg(order);
    },
    validateOrder() {
      if (
        this.from.trim() == "" ||
        this.to.trim() == "" ||
        this.weight.trim() == "" ||
        this.contact.trim() == ""
      ) {
        llg("Empty");
      } else {
        llg("calling complete order");
        this.confirmOrder();
      }
    },

    clearFields() {
      this.from = "";
      this.to = "";
      this.weight = "";
      this.contact = "";
    },
    confirmOrder() {
      this.$buefy.dialog.confirm({
        title: "Confirm Order",
        message: "Are you sure you want to <b>confirm</b> your order?",
        confirmText: "Confirm",
        type: "is-success",
        hasIcon: true,
        onConfirm: () => {
          this.$buefy.toast.open("Order Created Successfully");
          this.completeOrder();
          this.clearFields();
        }
      });
    },

   
  }
};
</script>

<style>
.mt-3 {
  margin-top: 30px;
}
</style>