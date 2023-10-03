<template>
  <div class="dataTables_wrapper dt-bootstrap4 no-footer">
    <div class="table-responsive">
      <table
        :class="[loading && 'overlay overlay-block', tableClass]"
        class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"
        role="grid"
      >
        <!--begin::Table head-->
        <thead class="bg-light">
          <!--begin::Table row-->
          <tr
            class="fw-bolder gs-0"
            role="row"
            v-for="(row, row_index) in tableHeaderRows"
            :key="row_index"
          >
            <template v-for="(cell, cell_index) in row" :key="cell_index">
              <th
                v-if="!cell.keyOnly"
                @click="
                  sort(
                    cell.sortingField ? cell.sortingField : cell.key,
                    cell.sortable
                  )
                "
                :class="[
                  cell.sortable !== false && 'sorting',
                  // row.length - 1 === cell_index && 'text-end',
                  currentSort ===
                    `${cell.sortingField ? cell.sortingField : cell.key}desc` &&
                    'sorting_desc',
                  currentSort ===
                    `${cell.sortingField ? cell.sortingField : cell.key}asc` &&
                    'sorting_asc',
                  cell.class || '',
                ]"
                tabindex="0"
                :rowspan="cell.rowspan || '1'"
                :colspan="cell.colspan || '1'"
                style="cursor: pointer"
                :style="cell.style || ''"
              >
                {{ cell.name }}
              </th>
            </template>
          </tr>
          <!--end::Table row-->
        </thead>
        <!--end::Table head-->
        <!--begin::Table body-->
        <tbody class="text-dark-800">
          <template v-if="tableData.length">
            <template
              v-for="(item, i) in isServerSide ? tableData : getItems"
              :key="i"
            >
              <tr :class="[i % 2 ? 'even' : 'odd']">
                <template
                  v-for="(cell, i) in !isMultipleHeader
                    ? tableHeader
                    : tableHeader[bodyIndex]"
                  :key="i"
                >
                  <td>
                    <slot :name="`cell-${cell['key']}`" :row="item">
                      {{ item[cell["key"]] }}
                    </slot>
                  </td>
                </template>
                <!--end::Item=-->
              </tr>
            </template>
          </template>
          <template v-if="!tableData.length">
            <tr class="odd">
              <td colspan="7" class="dataTables_empty">
                {{ emptyTableText }}
              </td>
            </tr>
          </template>
        </tbody>
        <div
          v-if="loading"
          class="overlay-layer card-rounded bg-dark bg-opacity-5"
        >
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <!--end::Table body-->
      </table>
    </div>

    <div
      class="row g-0 bg-white"
      style="
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
      "
    >
      <div
        class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start px-3 py-3"
      >
        <div
          v-if="enableItemsPerPageDropdown"
          class="dataTables_length"
          id="kt_customers_table_length"
        >
          <div class="d-flex gap-1 align-items-center">
            <label>Tampilkan</label>
            <label
              ><select
                name="kt_customers_table_length"
                class="form-select form-select-sm py-2 pe-10"
                @change="setItemsPerPage"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select></label
            >
            <label>Item</label>
            <label>dari total</label>
            <label>{{ Number(total).toLocaleString("id") }}</label>
          </div>
        </div>
      </div>
      <div
        class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"
      >
        <el-pagination
          v-model:current-page="pagination.page"
          @current-change="currentPageChange"
          :page-size="rowsPerPage"
          layout="prev, pager, next"
          :total="total"
          background
          :hide-on-single-page="true"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  onMounted,
  watch,
  getCurrentInstance,
} from "vue";
import arraySort from "array-sort";

interface IPagination {
  page: number;
  total: number;
  rowsPerPage: number;
}

interface IHeaderConfiguration {
  name?: string;
  key: string;
  sortingField?: string;
  sortable?: boolean;
  class?: string;
  style?: string;
}

export default defineComponent({
  name: "kt-datatable",
  emit: ["current-change", "sort", "items-per-page-change"],
  props: {
    tableHeader: { type: Array, required: true },
    // tableHeader: {
    //   type: Array as () => Array<IHeaderConfiguration>,
    //   required: true,
    // },
    tableClass: { type: String, default: "" },
    tableData: { type: Array, required: true },
    emptyTableText: { type: String, default: "No data found" },
    loading: { type: Boolean, default: false },
    currentPage: { type: Number, default: 1 },
    enableItemsPerPageDropdown: { type: Boolean, default: true },
    total: { type: Number, default: 0 },
    rowsPerPage: { type: Number, default: 10 },
    order: { type: String, default: "asc" },
    sortLabel: { type: String, default: "" },
    isServerSide: { Type: Boolean, default: false },
    bodyIndex: { Type: Number, default: 0 },
  },
  setup(props, { emit }) {
    const isMultipleHeader = ref(false);
    const tableHeaderRows = ref<any[]>([]);
    if (props.tableHeader[0] && Array.isArray(props.tableHeader[0])) {
      props.tableHeader.forEach((v, i) => {
        tableHeaderRows.value.push(v);
      });
      isMultipleHeader.value = true;
    } else if (props.tableHeader[0]) {
      tableHeaderRows.value.push(props.tableHeader);
    }

    const data = ref(props.tableData);
    const currentSort = ref<string>("");
    const order = ref(props.order);
    const label = ref(props.sortLabel);
    const pagination = ref<IPagination>({
      page: 1,
      total: props.total,
      rowsPerPage: props.rowsPerPage,
    });

    const vnodeProps = getCurrentInstance()?.vnode.props || {};

    watch(data.value, () => {
      if ("onCurrentChange" in vnodeProps) {
        currentSort.value = label.value + order.value;
      } else {
        pagination.value.total = data.value.length;
      }
    });

    onMounted(() => {
      currentSort.value = label.value + order.value;
      pagination.value.total = props.total ? props.total : data.value.length;
      pagination.value.rowsPerPage = props.rowsPerPage;
    });

    const getItems = computed(() => {
      if ("onCurrentChange" in vnodeProps) {
        return data.value;
      } else {
        const clone = JSON.parse(JSON.stringify(data.value));
        const startFrom =
          pagination.value.page * pagination.value.rowsPerPage -
          pagination.value.rowsPerPage;
        return clone.splice(startFrom, pagination.value.rowsPerPage);
      }
    });

    const currentPageChange = (val) => {
      if ("onCurrentChange" in vnodeProps) {
        emit("current-change", val);
      } else {
        pagination.value.page = val;
      }
    };

    const sort = (columnName, sortable) => {
      if (sortable === false) {
        return;
      }

      if ("onSort" in vnodeProps) {
        if (order.value === "asc") {
          order.value = "desc";
          emit("sort", { columnName: columnName, order: "desc" });
        } else {
          order.value = "asc";
          emit("sort", { columnName: columnName, order: "asc" });
        }
      } else {
        if (order.value === "asc") {
          order.value = "desc";
          arraySort(data.value, columnName, { reverse: false });
        } else {
          order.value = "asc";
          arraySort(data.value, columnName, { reverse: true });
        }
      }
      currentSort.value = columnName + order.value;
    };

    const setItemsPerPage = (event) => {
      data.value = props.tableData;
      if ("onItemsPerPageChange" in vnodeProps) {
        emit("items-per-page-change", parseInt(event.target.value));
      } else {
        pagination.value.rowsPerPage = parseInt(event.target.value);
      }
    };

    return {
      isMultipleHeader,
      tableHeaderRows,

      pagination,
      currentPageChange,
      getItems,
      sort,
      currentSort,
      setItemsPerPage,
    };
  },
});
</script>

<style lang="scss">
table.dataTable {
  clear: both;
  margin-top: 6px !important;
  margin-bottom: 6px !important;
  max-width: none !important;
  border-collapse: collapse !important;
  border-spacing: 0;
}

table.dataTable > thead > tr {
  th.sorting {
    position: relative;
  }
  .sorting:after {
    position: absolute;
  }
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background: none;
  border-radius: 0.475rem;
  font-weight: 500;
  font-size: 1.075rem;
  font-family: "Nunito Sans", Helvetica, sans-serif;
}

.el-pagination.is-background .el-pager li:not(.disabled).is-active {
  background-color: #078299;
}

table.dataTable > thead > tr > th {
  // background-color: white;
  padding: 1rem 1rem !important;
  border: 2px solid #f5f8fa;
}

table.dataTable > tbody > tr.odd > td {
  // background-color: #eef0f7;
  padding: 1rem !important;
  // border: 2px solid #f5f8fa;
}

table.dataTable > tbody > tr.even > td {
  // background-color: white;
  padding: 1rem !important;
  // border: 2px solid #f5f8fa;
}

table.dataTable td.dataTables_empty,
table.dataTable th.dataTables_empty {
  text-align: center;
}

div.dataTables_wrapper div.dataTables_processing {
  position: absolute;
  top: 50%;
  left: 50%;
}

table.dataTable .btn.btn-icon.btn-sm,
table.dataTable .btn-group-sm > .btn.btn-icon {
  height: calc(1.25em + 1rem + 2px);
  width: calc(1.25em + 1rem + 2px);
}
</style>
