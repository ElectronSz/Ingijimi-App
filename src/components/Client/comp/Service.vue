<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">New Order</p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                <b-field type="is-success" label="Order Type">
                  <b-select v-model="order_type" placeholder="Select a order type" expanded>
                    <option v-for="(option,i) in order_types" :key="i">{{option}}</option>
                  </b-select>
                </b-field>

                <div v-if="order_type=='Shopping'">
                  <Shopping/>
                </div>

                <div v-else-if="order_type=='Delivery'">
                    <Delivery/>
                </div>

                <div v-else-if="order_type=='Transport'">
                    <Transport/>
                </div>

                <div v-else-if="order_type=='Pick Up & Delivery'">
                    <PickupAndDelivery :type="order_type"/>
                </div>

                <div v-else>
                    Nothing More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Recent Orders</p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                <b-table
                  :data="getRecentOrders()"
                  :striped="isStriped"
                  :hoverable="isHoverable"
                  :columns="columns"
                ></b-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Delivery from "./ordertype/Delivery.vue"
import Shopping from "./ordertype/Shopping.vue"
import PickupAndDelivery from "./ordertype/PickupAndDelivery.vue"
import Transport from "./ordertype/Transport.vue"
export default {
    components: {
        Delivery,
        PickupAndDelivery,
        Transport,
        Shopping
    },
  data() {
    return {
      isHoverable: true,
      isStriped: true,
      order_type: "",
      order_types: ["Shopping", "Delivery", "Pick Up & Delivery", "Transport"],
     
      columns: [
        {
          field: "order_id",
          label: "Order Id",
          numeric: true
        },
        {
          field: "order_type",
          label: "Order Type"
        },
        {
          field: "status",
          label: "Status"
        },
        {
          field: "date",
          label: "Order Date",
          centered: true
        }
      ]
    };
  },
  created(){
      let uid = this.$session.get("xyz").uid;
      this.$store.dispatch("orders", uid);
  },

  methods: {
      getRecentOrders(){
        return this.$store.getters.getOrders
    }
  },
   watch: {
    order_type: function (val) {
      this.order_type = val
    },
   }
};
</script>