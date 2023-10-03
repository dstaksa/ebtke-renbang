<template>
  <div>
    <template v-if="role == 'dei' || role == 'ppk'">
      <ListPengadaan></ListPengadaan>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ListPengadaan from "./ListPengadaan.vue";
import UserInfoService from "@/core/services/UserInfoService";

export default defineComponent({
  name: "pengadaan",
  components: {
    ListPengadaan,
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
