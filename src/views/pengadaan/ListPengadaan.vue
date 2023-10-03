<template>
  <!--begin::Row-->
  <div v-if="role == 'dei'" class="row g-5 g-xl-10 justify-content-center">
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
              <span class="fw-bold mt-4 text-center">Total Lelang Masuk</span>
            </div>
            <div
              class="text-center ps-8"
              style="border-left: 1.4px solid black"
            >
              <span class="fs-6">10</span> <br />
              <span class="pb-3">Lelang</span>
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
              <span class="fw-bold mt-4 text-center"
                >Lelang <br />
                Diproses</span
              >
            </div>
            <div
              class="text-center ps-8"
              style="border-left: 1.4px solid black"
            >
              <span class="fs-6">10</span> <br />
              <span class="pb-3">Lelang</span>
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
              <span class="fw-bold mt-4 text-center">Lelang Dianggarkan</span>
            </div>
            <div
              class="text-center ps-8"
              style="border-left: 1.4px solid black"
            >
              <span class="fs-6">10</span> <br />
              <span class="pb-3">Lelang</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end::Row-->

  <div class="row mt-18">
    <div class="col-md-12 d-flex justify-content-between mb-5">
      <h1 class="fs-1">List Pengadaan</h1>
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
            <router-link to="/pengadaan/detail/1">
              <button type="button" class="btn btn-primary btn-sm">
                Lihat Detail
              </button>
            </router-link>
          </div>
        </template>
        <template v-slot:cell-nomor_kontrak="{ row: data }">
          {{ data.nomor_kontrak }}
        </template>
        <template v-slot:cell-tanggal_kontrak="{ row: data }">
          {{ data.tanggal_kontrak }}
        </template>
        <template v-slot:cell-jenis_pembangunan="{ row: data }">
          {{ data.jenis_pembangunan }}
        </template>
        <template v-slot:cell-nama_paket_pembangunan="{ row: data }">
          {{ data.nama_paket_pembangunan }}
        </template>
        <template v-slot:cell-penyedia="{ row: data }">
          {{ data.penyedia }}
        </template>
        <template v-slot:cell-nilai_kontrak="{ row: data }">
          {{ data.nilai_kontrak }}
        </template>
        <template v-slot:cell-jumlah="{ row: data }">
          {{ data.jumlah }}
        </template>
        <template v-slot:cell-instansi="{ row: data }">
          {{ data.instansi }}
        </template>
        <template v-slot:cell-tahun="{ row: data }">
          {{ data.tahun }}
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
        name: "Nomor Kontrak",
        key: "nomor_kontrak",
        style: "min-width: 160px",
      },
      {
        name: "Tanggal Kontrak",
        key: "tanggal_kontrak",
        style: "min-width: 160px",
      },
      {
        name: "Jenis Pembangunan",
        key: "jenis_pembangunan",
        style: "min-width: 180px",
      },
      {
        name: "Nama Paket Pembangunan",
        key: "nama_paket_pembangunan",
        style: "min-width: 210px",
      },
      {
        name: "Penyedia",
        key: "penyedia",
        style: "min-width: 160px",
      },
      {
        name: "Nilai Kontrak",
        key: "nilai_kontrak",
        style: "min-width: 160px",
      },
      {
        name: "Jumlah",
        key: "jumlah",
        style: "min-width: 160px",
      },
      {
        name: "Instansi",
        key: "instansi",
        style: "min-width: 160px",
      },
      {
        name: "Tahun",
        key: "tahun",
        style: "min-width: 160px",
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
          nomor_kontrak: "kontrak 1",
          tanggal_kontrak: "24 September 2023",
          jenis_pembangunan: "-",
          nama_paket_pembangunan: "-",
          penyedia: "PT Sejahtera",
          nilai_kontrak: "Rp. 200.000.000",
          jumlah: "2",
          instansi: "PT Membangun",
          tahun: "2023",
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
