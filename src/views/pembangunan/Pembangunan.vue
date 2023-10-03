<template>
  <div>
    <template v-if="role == 'dei' || role == 'penyedia' || role == 'pengawas'">
      <ListPembangunan></ListPembangunan>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ListPembangunan from "./ListPembangunan.vue";
import UserInfoService from "@/core/services/UserInfoService";

export default defineComponent({
  name: "pembangunan",
  components: {
    ListPembangunan,
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
