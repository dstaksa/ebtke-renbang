<template>
  <div>
    <template v-if="role == 'pengusul'">
      <PilihUsulan></PilihUsulan>
    </template>
    <template v-if="role == 'dei' || role == 'ppk'">
      <ListUsulan></ListUsulan>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PilihUsulan from "./PilihUsulan.vue";
import ListUsulan from "./ListUsulan.vue";
import UserInfoService from "@/core/services/UserInfoService";

export default defineComponent({
  name: "usulan",
  components: {
    PilihUsulan,
    ListUsulan,
  },
  setup() {
    const user = UserInfoService.getData();
    const role = ref(user.role as string);

    return {
      role,
    };
  },
});
</script>
