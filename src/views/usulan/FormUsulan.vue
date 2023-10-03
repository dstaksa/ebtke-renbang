<template>
  <div class="row">
    <div class="col-md-12">
      <div class="separator mb-4"></div>
      <h1 class="fs-3 mb-2">Input Usulan Pembangunan PLTS Terpadu</h1>
    </div>
    <div class="col-md-12">
      <div class="card border">
        <div class="card-body p-6">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="id_usulan" class="fs-6 mb-2">ID Usulan</label>
                <Field
                  :disabled="isDisabledForm"
                  type="text"
                  class="form-control"
                  placeholder="Masukan ID Usulan"
                  name="id_usulan"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="id_usulan" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="tanggal" class="fs-6 mb-2">Tanggal</label>
                <Field
                  :disabled="isDisabledForm"
                  type="date"
                  class="form-control"
                  placeholder="Masukan Tanggal"
                  name="tanggal"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="tanggal" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="nomor_surat" class="fs-6 mb-2">Nomor Surat</label>
                <Field
                  :disabled="isDisabledForm"
                  type="text"
                  class="form-control"
                  placeholder="Masukan Nomor Surat"
                  name="nomor_surat"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="nomor_surat" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="asal_usulan" class="fs-6 mb-2">Asal Usulan</label>
                <Field
                  :disabled="isDisabledForm"
                  type="text"
                  class="form-control"
                  placeholder="Masukan Asal Usulan"
                  name="asal_usulan"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="asal_usulan" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="nama_pengusul" class="fs-6 mb-2"
                  >Nama Pengusul</label
                >
                <Field
                  :disabled="isDisabledForm"
                  type="text"
                  class="form-control"
                  placeholder="Masukan Nama Pengusul"
                  name="nama_pengusul"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="nama_pengusul" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="kapasitas" class="fs-6 mb-2">Kapasitas</label>
                <Field
                  :disabled="isDisabledForm"
                  type="text"
                  class="form-control"
                  placeholder="Masukan Kapasitas"
                  name="kapasitas"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="kapasitas" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="pengusul_pembangunan" class="fs-6 mb-2"
                  >Pengusul Pembangunan</label
                >
                <Field
                  :disabled="isDisabledForm"
                  type="text"
                  class="form-control"
                  placeholder="Masukan Pengusul Pembangunan"
                  name="pengusul_pembangunan"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="pengusul_pembangunan" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="jumlah" class="fs-6 mb-2">Jumlah</label>
                <Field
                  :disabled="isDisabledForm"
                  type="text"
                  class="form-control"
                  placeholder="Masukan Jumlah"
                  name="jumlah"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="jumlah" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="nomor_telepon" class="fs-6 mb-2"
                  >Nomor Telepon Pengusul</label
                >
                <Field
                  :disabled="isDisabledForm"
                  type="text"
                  class="form-control"
                  placeholder="Masukan Nomor Telepon Pengusul"
                  name="nomor_telepon"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="nomor_telepon" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="nilai" class="fs-6 mb-2">Nilai</label>
                <Field
                  :disabled="isDisabledForm"
                  type="text"
                  class="form-control"
                  placeholder="Masukan Nilai"
                  name="nilai"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="nilai" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="provinsi" class="fs-6 mb-2">Provinsi</label>
                <Field
                  :disabled="isDisabledForm"
                  as="select"
                  class="form-control"
                  placeholder="Masukan Provinsi"
                  name="provinsi"
                >
                  <option value="" selected disabled>Pilih Provinsi</option>
                </Field>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="provinsi" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="detail_usulan" class="fs-6 mb-2"
                  >Detail Usulan</label
                >
                <Field
                  :disabled="isDisabledForm"
                  as="textarea"
                  class="form-control"
                  rows="5"
                  placeholder="Masukan Detail Usulan"
                  name="detail_usulan"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="detail_usulan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="route.name == 'form-usulan'">
      <div class="col-md-12 mt-12">
        <h1 class="fs-3 mb-2">Upload Dokumen</h1>
      </div>
      <div class="col-md-12">
        <div class="card border">
          <div class="card-body p-6">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="usulan_pembangunan" class="fs-6 mb-2"
                    >Usulan Pembangunan</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="file"
                    class="form-control form-control-md"
                    placeholder="Masukan Usulan Pembangunan"
                    name="usulan_pembangunan"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="usulan_pembangunan" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label
                    for="surat_pernyataan_kesediaan_hibah"
                    class="fs-6 mb-2"
                    >Surat Pernyataan Kesediaan Menerima dan Mengelola
                    Hibah</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="file"
                    class="form-control"
                    placeholder="Masukan Surat Pernyataan Kesediaan Menerima dan Mengelola Hibah"
                    name="surat_pernyataan_kesediaan_hibah"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="surat_pernyataan_kesediaan_hibah" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label
                    for="surat_pernyataan_kesediaan_lahan"
                    class="fs-6 mb-2"
                    >Surat Pernyataan Ketersediaan Lahan</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="file"
                    class="form-control"
                    placeholder="Masukan Surat Pernyataan Ketersediaan Lahan"
                    name="surat_pernyataan_kesediaan_lahan"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="surat_pernyataan_kesediaan_lahan" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label
                    for="surat_pernyataan_kesediaan_pembinaan"
                    class="fs-6 mb-2"
                    >Surat Pernyataan Kesediaan Melakukan Pembinaan dan
                    Pengawasan</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="file"
                    class="form-control"
                    placeholder="Masukan Surat Pernyataan Kesediaan Melakukan Pembinaan dan Pengawasan"
                    name="surat_pernyataan_kesediaan_pembinaan"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage
                        name="surat_pernyataan_kesediaan_pembinaan"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="surat_penetapan_pengelola" class="fs-6 mb-2"
                    >Surat Penetapan Pengelola</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="file"
                    class="form-control"
                    placeholder="Masukan Surat Penetapan Pengelola"
                    name="surat_penetapan_pengelola"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="surat_penetapan_pengelola" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label
                    for="surat_pernyataan_keabsahan_dan_kebenaran_dokumen"
                    class="fs-6 mb-2"
                    >Surat Pernyataan Keabsahan dan Kebenaranan Dokumen</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="file"
                    class="form-control"
                    placeholder="Masukan Surat Pernyataan Keabsahan dan Kebenaranan Dokumen"
                    name="surat_pernyataan_keabsahan_dan_kebenaran_dokumen"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage
                        name="surat_pernyataan_keabsahan_dan_kebenaran_dokumen"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="dokumen_ijin_lingkungan" class="fs-6 mb-2"
                    >Dokumen Ijin Lingkungan (SPPL/UKL-UPL/AMDAL)</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="file"
                    class="form-control"
                    placeholder="Masukan Dokumen Ijin Lingkungan (SPPL/UKL-UPL/AMDAL)"
                    name="dokumen_ijin_lingkungan"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="dokumen_ijin_lingkungan" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="fs_dan_ded" class="fs-6 mb-2">FS dan DED</label>
                  <Field
                    :disabled="isDisabledForm"
                    type="file"
                    class="form-control"
                    placeholder="Masukan FS dan DED"
                    name="fs_dan_ded"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="fs_dan_ded" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="surat_pernyataan_hibah_lahan" class="fs-6 mb-2"
                    >Surat Pernyataan Hibah Lahan dari Pemilik Tanah atau Hak
                    Ulayat</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="file"
                    class="form-control"
                    placeholder="Masukan Surat Pernyataan Hibah Lahan dari Pemilik Tanah atau Hak Ulayat"
                    name="surat_pernyataan_hibah_lahan"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="surat_pernyataan_hibah_lahan" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-6 d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">Simpan</button>
      </div>
    </template>
    <template v-else>
      <div class="col-md-12 mt-12">
        <div class="card border boder-secondary">
          <div class="card-body p-6">
            <h1 class="fs-3">Status Nadine dan Anggaran</h1>

            <div class="d-flex align-items-center gap-10 mt-6">
              <span>
                Nadine:
                <div class="badge badge-success ms-5">Disetujui</div>
              </span>
              <span>
                Anggaran:
                <div class="badge badge-danger ms-5">Tidak Tersedia</div>
              </span>
            </div>
            <button
              v-if="role == 'dei'"
              data-bs-toggle="modal"
              data-bs-target="#modalVerifikasiStatus"
              class="btn btn-primary btn-sm mt-6"
            >
              Verifikasi Status
            </button>
          </div>
        </div>
      </div>
      <h1 class="fs-3 mt-8">Dokumen Usulan</h1>
      <div class="row">
        <div class="col">
          <div class="card border">
            <div class="card-body p-6">
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
                    <button class="btn btn-primary btn-sm">Lihat File</button>
                    <button
                      v-if="role == 'dei'"
                      data-bs-toggle="modal"
                      data-bs-target="#modalStatusDokumen"
                      class="btn btn-primary btn-sm ms-3"
                    >
                      Status Dokumen
                    </button>
                  </div>
                </template>
                <template v-slot:cell-no="{ row: data }">
                  {{ data.no }}
                </template>
                <template v-slot:cell-nama_dokumen="{ row: data }">
                  {{ data.nama_dokumen }}
                </template>
                <template v-slot:cell-dokumen="{ row: data }">
                  {{ data.dokumen }}
                </template>
              </Datatable>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Verifikasi Status -->
      <div class="modal fade" tabindex="-1" id="modalVerifikasiStatus">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header align-items-center">
              <h3 class="modal-title">
                <span>Verifikasi Nadine dan Anggaran</span> <br />
                <p class="fs-6 fw-normal">Untuk Usulan B</p>
              </h3>
              <div
                class="btn btn-icon btn-sm btn-active-light-primary ms-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="ki-duotone ki-cross fs-1"
                  ><span class="path1"></span><span class="path2"></span
                ></i>
              </div>
            </div>
            <VForm class="form w-100" @submit="verifikasiStatus">
              <div class="modal-body">
                <div class="alert alert-warning d-flex align-items-center p-4">
                  <KTIcon
                    icon-name="shield-tick"
                    class="fs-2hx text-warning me-4"
                  ></KTIcon>
                  <span>
                    Pastikan Status Nadine SAMA dengan status NADINE pada
                    Aplikasi
                  </span>
                </div>
                <div
                  class="form-group d-flex align-items-center justify-content-center gap-20 mb-5 py-3"
                >
                  <div>
                    <span class="fs-6 fw-bold">Status NADINE</span>
                  </div>
                  <div
                    class="form-check form-switch form-check-custom form-check-solid"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="statusNadine"
                    />
                    <label class="form-check-label" for="statusNadine">
                      Disetujui
                    </label>
                  </div>
                </div>
                <div
                  class="form-group d-flex align-items-center justify-content-center gap-16 mb-5 py-3"
                >
                  <div>
                    <span class="fs-6 fw-bold">Status Anggaran</span>
                  </div>
                  <div
                    class="form-check form-switch form-check-custom form-check-solid"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="statusAnggaran"
                    />
                    <label class="form-check-label" for="statusAnggaran">
                      Tersedia
                    </label>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  id="btnCloseVerifikasiStatus"
                  type="button"
                  class="btn btn-light"
                  data-bs-dismiss="modal"
                >
                  Batal
                </button>
                <button type="submit" class="btn btn-primary">Simpan</button>
              </div>
            </VForm>
          </div>
        </div>
      </div>

      <!-- Modal Status Dokumen -->
      <div class="modal fade" tabindex="-1" id="modalStatusDokumen">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header align-items-center">
              <h3 class="modal-title">
                <span>Verifikasi Dokumen</span> <br />
              </h3>
              <div
                class="btn btn-icon btn-sm btn-active-light-primary ms-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="ki-duotone ki-cross fs-1"
                  ><span class="path1"></span><span class="path2"></span
                ></i>
              </div>
            </div>
            <VForm class="form w-100" @submit="verifikasiStatusDokumen">
              <div class="modal-body">
                <div class="form-group mb-5">
                  <label class="form-label mb-2">Status Dokumen</label>
                  <div class="d-flex align-items-center gap-8">
                    <div
                      class="form-check form-check-custom form-check-success form-check-solid"
                    >
                      <input
                        class="form-check-input"
                        name="statusDokumen"
                        type="radio"
                        value=""
                        id="flexRadioDefault"
                      />
                      <label
                        class="form-check-label text-success"
                        for="flexRadioDefault"
                      >
                        Diterima
                      </label>
                    </div>

                    <label
                      class="form-check form-check-custom form-check-danger form-check-solid"
                      id="flexRadioDefault"
                    >
                      <input
                        class="form-check-input"
                        name="statusDokumen"
                        type="radio"
                        value=""
                      />
                      <span
                        class="form-check-label text-danger"
                        for="flexRadioDefault"
                      >
                        Ditolak
                      </span>
                    </label>
                  </div>
                </div>

                <div class="form-group mb-5">
                  <label for="" class="form-label mb-2">Catatan</label>
                  <Field
                    as="textarea"
                    rows="5"
                    name="catatan"
                    class="form-control"
                    placeholder="Masukan Catatan"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="catatan" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  id="btnCloseVerifikasiStatusDokumen"
                  type="button"
                  class="btn btn-light"
                  data-bs-dismiss="modal"
                >
                  Batal
                </button>
                <button type="submit" class="btn btn-primary">Simpan</button>
              </div>
            </VForm>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import Editor from "@tinymce/tinymce-vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useRouter, useRoute } from "vue-router";
// import { ref } from "vue";
// import ApiService from "@/core/services/ApiService";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import UserInfoService from "@/core/services/UserInfoService";

export default {
  name: "form-usulan",
  components: {
    ErrorMessage,
    Field,
    VForm,
    Editor,
    Datatable,
  },
  setup() {
    const user = UserInfoService.getData();
    const role = ref(user.role as string);
    const router = useRouter();
    const route = useRoute();

    const isDisabledForm = ref(false as boolean);
    if (route.name == "detail-usulan") {
      isDisabledForm.value = true;
    }

    const tableHeader = ref([
      {
        name: "No",
        key: "no",
        style: "min-width: 50px",
      },
      {
        name: "Nama Dokumen",
        key: "nama_dokumen",
        style: "min-width: 120px",
      },
      {
        name: "Dokumen Administrasi",
        key: "dokumen",
        style: "min-width: 120px",
      },
      {
        name: "Aksi",
        key: "action",
        style: "min-width: 150px",
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
          no: 1,
          nama_dokumen: "Surat Pernyataan Tidak",
          dokumen: "File.pdf",
        },
        {
          no: 2,
          nama_dokumen: "Surat Pernyataan Mampu",
          dokumen: "Surat.pdf",
        },
      ];

      tablePagination.value.total = 100;
    };

    const verifikasiStatus = () => {
      Swal.fire({
        icon: "warning",
        title: "Konfirmasi",
        html: "Apakah Anda yakin ingin verifikasi usulan?",
        showCancelButton: true,
        confirmButtonText: "Yakin!",
        cancelButtonText: "Batal",
        confirmButtonColor: "#F1BC00",
        cancelButtonColor: "#9FA4AA",
      }).then((result) => {
        if (result.value) {
          document.getElementById("btnCloseVerifikasiStatus")!.click();
          Swal.fire({
            title: "Success",
            text: "Success",
            html: "Usulan berhasil diverifikasi",
            icon: "success",
            confirmButtonText: "Tutup",
          });
        }
      });
    };
    const verifikasiStatusDokumen = () => {
      Swal.fire({
        icon: "warning",
        title: "Konfirmasi",
        html: "Apakah anda yakin akan memproses dokumen ini?",
        showCancelButton: true,
        confirmButtonText: "Yakin!",
        cancelButtonText: "Batal",
        confirmButtonColor: "#F1BC00",
        cancelButtonColor: "#9FA4AA",
      }).then((result) => {
        if (result.value) {
          document.getElementById("btnCloseVerifikasiStatusDokumen")!.click();
          Swal.fire({
            title: "Success",
            text: "Success",
            html: "Dokumen berhasil diproses!",
            icon: "success",
            confirmButtonText: "Tutup",
          });
        }
      });
    };

    onMounted(() => {
      getList();
    });

    return {
      router,
      route,
      isDisabledForm,
      role,

      verifikasiStatus,
      verifikasiStatusDokumen,

      tableHeader,
      tableData,
      tableLoading,
      tablePagination,
      onItemsPerPageChange,
      onPageChange,
    };
  },
};
</script>
