<template>
  <div class="row">
    <div class="col-md-12">
      <div class="separator mb-4"></div>
      <div class="d-flex justify-content-between align-items-center mb-5">
        <h1 class="fs-3 mb-2">Input Pengadaan</h1>
        <button
          data-bs-toggle="modal"
          data-bs-target="#modalLogAdendum"
          class="btn btn-info btn-sm"
        >
          <KTIcon icon-name="plus" class="fs-2"></KTIcon> Adendum
        </button>
      </div>
    </div>
    <VForm class="form w-100" @submit="onSubmitForm">
      <div class="col-md-12">
        <div class="card border">
          <div class="card-body p-6">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="id_pengusulan" class="fs-6 mb-2"
                    >ID Pengusulan</label
                  >
                  <Field
                    type="text"
                    class="form-control"
                    placeholder="Masukan ID Pengusulan"
                    name="id_pengusulan"
                    disabled
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="id_pengusulan" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="rencana_umum_pengadaan" class="fs-6 mb-2"
                    >Rencana Umum Pengadaan</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="text"
                    class="form-control"
                    placeholder="Masukan Rencana Umum Pengadaan"
                    name="rencana_umum_pengadaan"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="rencana_umum_pengadaan" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="tanggal_mulai" class="fs-6 mb-2"
                    >Tanggal Mulai</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="date"
                    class="form-control"
                    placeholder="Masukan Tanggal Mulai"
                    name="tanggal_mulai"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="tanggal_mulai" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="tanggal_berakhir" class="fs-6 mb-2"
                    >Tanggal Berakhir</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="date"
                    class="form-control"
                    placeholder="Masukan Tanggal Berakhir"
                    name="tanggal_berakhir"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="tanggal_berakhir" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="tanggal_kontrak" class="fs-6 mb-2"
                    >Tanggal Kontrak</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="date"
                    class="form-control"
                    placeholder="Masukan Tanggal Kontrak"
                    name="tanggal_kontrak"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="tanggal_kontrak" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="penyedia" class="fs-6 mb-2">Penyedia</label>
                  <Field
                    :disabled="isDisabledForm"
                    as="select"
                    class="form-control"
                    placeholder="Masukan Penyedia"
                    name="penyedia"
                  >
                    <option value="" selected disabled>Pilih Penyedia</option>
                  </Field>
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="penyedia" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="tahun" class="fs-6 mb-2">Tahun</label>
                  <Field
                    :disabled="isDisabledForm"
                    type="text"
                    class="form-control"
                    placeholder="Masukan Tahun"
                    name="tahun"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="tahun" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="nomor_kontrak" class="fs-6 mb-2"
                    >Nomor Kontrak</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="text"
                    class="form-control"
                    placeholder="Masukan Nomor Kontrak"
                    name="nomor_kontrak"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="nomor_kontrak" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="volume" class="fs-6 mb-2">Volume</label>
                  <Field
                    :disabled="isDisabledForm"
                    type="text"
                    class="form-control"
                    placeholder="Masukan Volume"
                    name="volume"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="volume" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="jenis_pengembangan" class="fs-6 mb-2"
                    >Jenis Pengembangan</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="text"
                    class="form-control"
                    placeholder="Masukan Jenis Pengembangan"
                    name="jenis_pengembangan"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="jenis_pengembangan" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="jumlah_pembangunan" class="fs-6 mb-2"
                    >Jumlah Pembangunan</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="text"
                    class="form-control"
                    placeholder="Masukan Jumlah Pembangunan"
                    name="jumlah_pembangunan"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="jumlah_pembangunan" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="nama_paket_pengadaan" class="fs-6 mb-2"
                    >Nama Paket Pengadaan</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="text"
                    class="form-control"
                    placeholder="Masukan Nama Paket Pengadaan"
                    name="nama_paket_pengadaan"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="nama_paket_pengadaan" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="nilai_pembangunan" class="fs-6 mb-2"
                    >Nilai Pembangunan</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="text"
                    class="form-control"
                    placeholder="Masukan Nilai Pembangunan"
                    name="nilai_pembangunan"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="nilai_pembangunan" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="nilai_kontrak" class="fs-6 mb-2"
                    >Nilai Kontrak</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="text"
                    class="form-control"
                    placeholder="Masukan Nilai Kontrak"
                    name="nilai_kontrak"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="nilai_kontrak" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template v-if="route.name == 'form-pengadaan'">
        <div class="col-md-12 mt-12">
          <h1 class="fs-3 mb-2">Upload Dokumen</h1>
        </div>
        <div class="col-md-12">
          <div class="card border">
            <div class="card-body p-6">
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="alert alert-warning d-flex align-items-center p-4"
                  >
                    <KTIcon
                      icon-name="shield-tick"
                      class="fs-2hx text-warning me-4"
                    ></KTIcon>
                    <span>
                      Pastikan dokumen yang diupload sudah benar dan sesuai!
                    </span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-6">
                    <label for="spek_teknis" class="fs-6 mb-2"
                      >KAK/SPEK TEKNIS</label
                    >
                    <Field
                      :disabled="isDisabledForm"
                      type="file"
                      class="form-control form-control-md"
                      placeholder="Masukan KAK/SPEK TEKNIS"
                      name="spek_teknis"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="spek_teknis" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-6">
                    <label for="rab" class="fs-6 mb-2">RAB</label>
                    <Field
                      :disabled="isDisabledForm"
                      type="file"
                      class="form-control"
                      placeholder="Masukan RAB"
                      name="rab"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="rab" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-6">
                    <label for="surat_perjanjian" class="fs-6 mb-2"
                      >Surat Perjanjian</label
                    >
                    <Field
                      :disabled="isDisabledForm"
                      type="file"
                      class="form-control"
                      placeholder="Masukan Surat Perjanjian"
                      name="surat_perjanjian"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="surat_perjanjian" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-6">
                    <label for="ssuk" class="fs-6 mb-2">SSUK</label>
                    <Field
                      :disabled="isDisabledForm"
                      type="file"
                      class="form-control"
                      placeholder="Masukan SSUK"
                      name="ssuk"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="ssuk" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-6">
                    <label for="ssak" class="fs-6 mb-2">SSAK</label>
                    <Field
                      :disabled="isDisabledForm"
                      type="file"
                      class="form-control"
                      placeholder="Masukan SSAK"
                      name="ssak"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="ssak" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-6">
                    <label for="dokumen_penawaran" class="fs-6 mb-2"
                      >Dokumen Penawaran</label
                    >
                    <Field
                      :disabled="isDisabledForm"
                      type="file"
                      class="form-control"
                      placeholder="Masukan Dokumen Penawaran"
                      name="dokumen_penawaran"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="dokumen_penawaran" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-6">
                    <label for="dokumen_adendum" class="fs-6 mb-2"
                      >Dokumen Adendum</label
                    >
                    <Field
                      :disabled="isDisabledForm"
                      type="file"
                      class="form-control"
                      placeholder="Masukan Dokumen Adendum"
                      name="dokumen_adendum"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="dokumen_adendum" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-6">
                    <label for="as_plan_drawing" class="fs-6 mb-2"
                      >As Plan Drawing</label
                    >
                    <Field
                      :disabled="isDisabledForm"
                      type="file"
                      class="form-control"
                      placeholder="Masukan As Plan Drawing"
                      name="as_plan_drawing"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="as_plan_drawing" />
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
        <div
          class="d-flex justify-content-between align-items-center mt-10 mb-3"
        >
          <h1 class="fs-3">Log Adendum 24 September 2023</h1>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalLogAdendum"
            class="btn btn-primary btn-sm"
          >
            <KTIcon icon-name="document" class="fs-2 me-1"></KTIcon> Lihat Log
            Adendum
          </button>

          <!-- Modal Status Dokumen -->
          <div class="modal fade" tabindex="-1" id="modalLogAdendum">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header align-items-center">
                  <h3 class="modal-title"><span>Log Adendum</span> <br /></h3>
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
                <!-- <VForm class="form w-100" @submit="verifikasiStatusDokumen"> -->
                <div class="modal-body">
                  <div class="row">
                    <div class="col">
                      <div class="card border">
                        <div class="card-body p-6">
                          <div class="row">
                            <div class="col-md-3 mb-6">
                              <div class="form-group mb-6">
                                <label for="nilai_kontrak" class="fs-6 mb-2"
                                  >Nilai Kontrak</label
                                >
                                <Field
                                  :disabled="isDisabledAdendum"
                                  type="text"
                                  class="form-control"
                                  placeholder="Masukan Nilai Kontrak"
                                  name="nilai_kontrak"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="nilai_kontrak" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-3 mb-6">
                              <div class="form-group mb-6">
                                <label for="volume" class="fs-6 mb-2"
                                  >Volume</label
                                >
                                <Field
                                  :disabled="isDisabledAdendum"
                                  type="text"
                                  class="form-control"
                                  placeholder="Masukan Volume"
                                  name="volume"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="volume" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-3 mb-6">
                              <div class="form-group mb-6">
                                <label for="tanggal_berakhir" class="fs-6 mb-2"
                                  >Tanggal Berakhir</label
                                >
                                <Field
                                  :disabled="isDisabledAdendum"
                                  type="date"
                                  class="form-control"
                                  placeholder="Masukan Tanggal Berakhir"
                                  name="tanggal_berakhir"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="tanggal_berakhir" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-3 mb-6">
                              <div class="form-group mb-6">
                                <label for="tanggal_berakhir" class="fs-6 mb-2"
                                  >Tahun</label
                                >
                                <Field
                                  :disabled="isDisabledAdendum"
                                  type="year"
                                  class="form-control"
                                  placeholder="Masukan Tahun"
                                  name="tanggal_berakhir"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="tanggal_berakhir" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              v-if="!isDisabledAdendum"
                              class="col-md-12 d-flex justify-content-end"
                            >
                              <button class="btn btn-info btn-sm">
                                Simpan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    <template v-slot:cell-nilai="{ row: data }">
                      {{ data.nilai }}
                    </template>
                    <template v-slot:cell-nilai_kontrak="{ row: data }">
                      {{ data.nilai_kontrak }}
                    </template>
                    <template v-slot:cell-tanggal_akhir="{ row: data }">
                      {{ data.tanggal_akhir }}
                    </template>
                    <template v-slot:cell-tahun="{ row: data }">
                      {{ data.tahun }}
                    </template>
                    <template v-slot:cell-tanggal_adendum="{ row: data }">
                      {{ data.tanggal_adendum }}
                    </template>
                    <template v-slot:cell-dokumen_adendum="{ row: data }">
                      {{ data.dokumen_adendum }}
                    </template>
                  </Datatable>
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
                </div>
                <!-- </VForm> -->
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card border">
              <div class="card-body p-6">
                <div class="row">
                  <div class="col-md-3 mb-6">
                    <div class="form-group mb-6">
                      <label for="nilai_kontrak" class="fs-6 mb-2"
                        >Nilai Kontrak</label
                      >
                      <Field
                        :disabled="true"
                        type="text"
                        class="form-control"
                        placeholder="Masukan Nilai Kontrak"
                        name="nilai_kontrak"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="nilai_kontrak" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-6">
                    <div class="form-group mb-6">
                      <label for="volume" class="fs-6 mb-2">Volume</label>
                      <Field
                        :disabled="true"
                        type="text"
                        class="form-control"
                        placeholder="Masukan Volume"
                        name="volume"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="volume" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-6">
                    <div class="form-group mb-6">
                      <label for="tanggal_berakhir" class="fs-6 mb-2"
                        >Tanggal Berakhir</label
                      >
                      <Field
                        :disabled="true"
                        type="date"
                        class="form-control"
                        placeholder="Masukan Tanggal Berakhir"
                        name="tanggal_berakhir"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="tanggal_berakhir" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-6">
                    <div class="form-group mb-6">
                      <label for="tanggal_berakhir" class="fs-6 mb-2"
                        >Tahun</label
                      >
                      <Field
                        :disabled="true"
                        type="year"
                        class="form-control"
                        placeholder="Masukan Tahun"
                        name="tanggal_berakhir"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="tanggal_berakhir" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 class="fs-3 mt-8">List Dokumen</h1>
        <div class="row">
          <div class="col">
            <div class="card border">
              <div class="card-body p-6">
                <div class="row">
                  <div class="col-md-3 mb-6">
                    <KTFile
                      file-title="KAK/SPEK TEKNIS"
                      file-type="pdf"
                    ></KTFile>
                  </div>
                  <div class="col-md-3 mb-6">
                    <KTFile file-title="RAB" file-type="pdf"></KTFile>
                  </div>
                  <div class="col-md-3 mb-6">
                    <KTFile
                      file-title="Surat Perjanjian"
                      file-type="pdf"
                    ></KTFile>
                  </div>
                  <div class="col-md-3 mb-6">
                    <KTFile file-title="SSUK" file-type="pdf"></KTFile>
                  </div>
                  <div class="col-md-3 mb-6">
                    <KTFile file-title="SSAK" file-type="pdf"></KTFile>
                  </div>
                  <div class="col-md-3 mb-6">
                    <KTFile
                      file-title="Dokumen Penawaran"
                      file-type="pdf"
                    ></KTFile>
                  </div>
                  <div class="col-md-3 mb-6">
                    <KTFile
                      file-title="Ddkumen Adendum"
                      file-type="pdf"
                    ></KTFile>
                  </div>
                  <div class="col-md-3 mb-6">
                    <KTFile
                      file-title="As Plan Drawing"
                      file-type="pdf"
                    ></KTFile>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </VForm>
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
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps, UploadUserFile } from "element-plus";
import KTFile from "@/components/files/File.vue";
import UserInfoService from "@/core/services/UserInfoService";

export default {
  name: "form-pengadaan",
  components: {
    ErrorMessage,
    Field,
    VForm,
    Editor,
    Datatable,
    KTFile,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const user = UserInfoService.getData();
    const role = ref(user.role as string);

    const isDisabledForm = ref(false as boolean);
    const isDisabledAdendum = ref(false as boolean);
    if (route.name == "detail-pengadaan") {
      isDisabledForm.value = true;
      isDisabledForm.value = true;
      if (role.value == "ppk") {
        isDisabledAdendum.value = false;
      }
    }

    const onSubmitForm = (values) => {
      Swal.fire({
        icon: "warning",
        title: "Konfirmasi",
        html: "Apakah anda yakin akan menyimpan pengadaan?",
        showCancelButton: true,
        confirmButtonText: "Yakin!",
        cancelButtonText: "Batal",
        confirmButtonColor: "#F1BC00",
        cancelButtonColor: "#9FA4AA",
      }).then((result) => {
        if (result.value) {
          // document.getElementById("btnCloseVerifikasiStatusDokumen")!.click();
          Swal.fire({
            title: "Success",
            text: "Success",
            html: "Pengadaan berhasil disimpan!",
            icon: "success",
            confirmButtonText: "Tutup",
          });
          router.go(-1);
        }
      });
    };

    // Adendum
    const tableHeader = ref([
      {
        name: "Nilai",
        key: "nilai",
        style: "min-width: 160px",
      },
      {
        name: "Nilai Kontrak",
        key: "nilai_kontrak",
        style: "min-width: 160px",
      },
      {
        name: "Tanggal Akhir",
        key: "tanggal_akhir",
        style: "min-width: 160px",
      },
      {
        name: "Tahun",
        key: "tahun",
        style: "min-width: 120px",
      },
      {
        name: "Tanggal Adendum",
        key: "tanggal_adendum",
        style: "min-width: 160px",
      },
      {
        name: "Dokumen Adendum",
        key: "dokumen_adendum",
        style: "min-width: 160px",
      },
    ]);
    const tableData = ref([
      {
        nilai: "-",
        nilai_kontrak: "-",
        tanggal_akhir: "-",
        tahun: "-",
        tanggal_adendum: "-",
        dokumen_adendum: "-",
      },
    ] as any);
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
      tableData.value = [];

      tablePagination.value.total = 1;
    };

    onMounted(() => {
      // getList();
    });

    return {
      router,
      route,

      // form
      isDisabledForm,
      isDisabledAdendum,
      onSubmitForm,

      // adendum
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

<style scoped>
.el-upload-list--picture-card .el-upload-list__item {
  width: 200px !important;
  height: 200px !important;
}
</style>
