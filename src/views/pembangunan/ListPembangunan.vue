<template>
  <!--begin::Row-->
  <div v-if="role == 'dei'" class="row g-5 g-xl-10">
    <div class="col-md-4 col-xl-3">
      <div class="card border" style="background-color: #d4d4d4">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center me-6">
              <img
                :src="getAssetPath('media/desain/icon-1.svg')"
                class="w-30px"
                alt=""
              />
              <span class="fw-bold mt-4 text-center">Total Pembangunan</span>
            </div>
            <div
              class="text-center ps-8"
              style="border-left: 1.4px solid black"
            >
              <span class="fs-6">10</span> <br />
              <span class="pb-3">Pembangunan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-xl-3">
      <div class="card border" style="background-color: #e9faf4">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center me-6">
              <img
                :src="getAssetPath('media/desain/icon-2.svg')"
                class="w-30px"
                alt=""
              />
              <span class="fw-bold mt-4 text-center">Pembangunan Diproses</span>
            </div>
            <div
              class="text-center ps-8"
              style="border-left: 1.4px solid black"
            >
              <span class="fs-6">10</span> <br />
              <span class="pb-3">Pembangunan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-xl-3">
      <div class="card border" style="background-color: #e6cdfe">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center me-6">
              <img
                :src="getAssetPath('media/desain/icon-3.svg')"
                class="w-30px"
                alt=""
              />
              <span class="fw-bold mt-4 text-center">Pembangunan Berjalan</span>
            </div>
            <div
              class="text-center ps-8"
              style="border-left: 1.4px solid black"
            >
              <span class="fs-6">10</span> <br />
              <span class="pb-3">Pembangunan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-xl-3">
      <div class="card border" style="background-color: #fbdae5">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center me-6">
              <img
                :src="getAssetPath('media/desain/icon-4.svg')"
                class="w-30px"
                alt=""
              />
              <span class="fw-bold mt-4 text-center">Pembangunan Selesai</span>
            </div>
            <div
              class="text-center ps-8"
              style="border-left: 1.4px solid black"
            >
              <span class="fs-6">10</span> <br />
              <span class="pb-3">Pembangunan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end::Row-->

  <div class="row mt-18">
    <div class="col-md-12 d-flex justify-content-between mb-5">
      <h1 class="fs-1">List Pembangunan</h1>
      <router-link to="/pembangunan/form/1">
        <button v-if="role == 'penyedia'" class="btn btn-info btn-sm">
          Input Pembangunan
        </button>
      </router-link>
    </div>
    <div class="col-md-12">
      <Datatable
        :loading="tableLoading"
        :is-server-side="true"
        :table-header="tableHeader"
        :table-data="tableData"
        :rows-per-page="10"
        :total="tablePagination.total"
        :enable-items-per-page-dropdown="true"
        @items-per-page-change="onItemsPerPageChange"
        @current-change="onPageChange"
      >
        <template v-slot:cell-action="{ row: data }">
          <div v-if="data">
            <template
              v-if="
                role == 'pengawas' && $route.name == 'verifikasi-pembangunan'
              "
            >
              <router-link to="/pembangunan/verifikasi/1">
                <button type="button" class="btn btn-primary btn-sm">
                  Lihat Detail
                </button>
              </router-link>
            </template>
            <template v-else>
              <router-link to="/pembangunan/detail/1">
                <button type="button" class="btn btn-primary btn-sm">
                  Lihat Detail
                </button>
              </router-link>
            </template>
          </div>
        </template>
        <template v-slot:cell-nomor_pembangunan="{ row: data }">
          {{ data.nomor_pembangunan }}
        </template>
        <template v-slot:cell-nama_ppk="{ row: data }">
          {{ data.nama_ppk }}
        </template>
        <template v-slot:cell-provinsi="{ row: data }">
          {{ data.provinsi }}
        </template>
        <template v-slot:cell-kabupaten="{ row: data }">
          {{ data.kabupaten }}
        </template>
        <template v-slot:cell-kecamatan="{ row: data }">
          {{ data.kecamatan }}
        </template>
        <template v-slot:cell-desa="{ row: data }">
          {{ data.desa }}
        </template>
        <template v-slot:cell-tanggal_pemasangan="{ row: data }">
          {{ data.tanggal_pemasangan }}
        </template>
      </Datatable>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import UserInfoService from "@/core/services/UserInfoService";

export default defineComponent({
  name: "main-dashboard",
  components: {
    Datatable,
  },
  setup() {
    const user = UserInfoService.getData();
    const role = ref(user.role as string);

    const tableHeader = ref([
      {
        name: "Aksi",
        key: "action",
        style: "min-width: 150px",
      },
      {
        name: "Nomor",
        key: "nomor_pembangunan",
        style: "min-width: 120px",
      },
      {
        name: "Nama PPK",
        key: "nama_ppk",
        style: "min-width: 160px",
      },
      {
        name: "Provinsi",
        key: "provinsi",
        style: "min-width: 160px",
      },
      {
        name: "Kabupaten",
        key: "kabupaten",
        style: "min-width: 160px",
      },
      {
        name: "Kecamatan",
        key: "kecamatan",
        style: "min-width: 160px",
      },
      {
        name: "Desa",
        key: "desa",
        style: "min-width: 120px",
      },
      {
        name: "Tanggal Pemasangan",
        key: "tanggal_pemasangan",
        style: "min-width: 180px",
      },
    ]);
    const tableData = ref([] as any);
    const tablePagination = ref({
      total: 0,
      rowsPerpage: 10,
      currentPage: 1,
    });
    const tableLoading = ref(false);
    const onItemsPerPageChange = (rowsPerPage) => {
      tablePagination.value.rowsPerpage = rowsPerPage;
      getList();
    };
    const onPageChange = (page) => {
      tablePagination.value.currentPage = page;
      getList();
    };
    const getList = () => {
      tableData.value = [
        {
          nomor_pembangunan: "1",
          nama_ppk: "John Doe",
          provinsi: "Jawa Barat",
          kabupaten: "Bandung",
          kecamatan: "Bojong Kidul",
          desa: "Ciater",
        },
      ];

      tablePagination.value.total = 1;
    };

    onMounted(() => {
      getList();
    });
    return {
      getAssetPath,
      role,

      tableHeader,
      tableData,
      tableLoading,
      tablePagination,
      onItemsPerPageChange,
      onPageChange,
    };
  },
});
</script>
