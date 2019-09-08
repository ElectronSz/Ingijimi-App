<template>
  <div>
    <ClientNav />
    <div class="columns">
      <div class="column is-12">
        <b-tabs type="is-toggle" expanded>
          <b-tab-item label="Service" icon="google-photos">
            <Service />
          </b-tab-item>
          <b-tab-item label="Pending Orders" icon="library-music">
            <PendingOrders />
          </b-tab-item>
          <b-tab-item label="Approved Orders" icon="video">
            <ApprovedOrders />
          </b-tab-item>
          <b-tab-item label="Order History" icon="video">
            <OrderHistory />
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import ClientNav from "../ClientNav.vue";
import Service from "./comp/Service.vue";
import PendingOrders from "./comp/PendingOrders.vue"
import ApprovedOrders from "./comp/ApprovedOrders.vue"
import OrderHistory from "./comp/OrderHistory.vue"
export default {
  components: {
    ClientNav,
    Service,
    PendingOrders,
    ApprovedOrders,
    OrderHistory
  },
  data() {
    return {
      sess: ""
    };
  },
  created() {}
};
</script>
