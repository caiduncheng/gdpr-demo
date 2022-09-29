<template>
  <section>
    <h2 class="title">{{$t('pci.p2pe.title')}}<div class="badge">{{$t('pci.p2pe.badge')}}</div></h2>
    <div class="chapter">
      <h3>{{$t('pci.p2pe.header1')}}</h3>
      <p>{{$t('pci.p2pe.p1')}}</p>
    </div>
    <div class="chapter">
      <table border="1" class="pci-table">
        <thead>
          <tr>
            <th>{{$t('pci.p2pe.table.head1')}}</th>
            <th>{{$t('pci.p2pe.table.head2')}}</th>
            <th>{{$t('pci.p2pe.table.head3')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="first-col">
              {{$t('pci.p2pe.table.r1c1')}}
            </td>
            <td>{{$t('pci.p2pe.table.r1c2')}}</td>
            <td>
              <ul class="list" v-html="$t('pci.p2pe.table.r1c3')">                
              </ul>
            </td>
          </tr>
          <tr>
            <td class="first-col">{{$t('pci.p2pe.table.r2c1')}}</td>
            <td>{{$t('pci.p2pe.table.r2c2')}}</td>
            <td>
              <ul class="list" v-html="$t('pci.p2pe.table.r2c3')">
               
              </ul>
            </td>
          </tr>
          <tr>
            <td class="first-col">
              {{$t('pci.p2pe.table.r3c1')}}
            </td>
            <td>{{$t('pci.p2pe.table.r3c2')}}</td>
            <td>
              <ul class="list" v-html="$t('pci.p2pe.table.r3c3')">
               
              </ul>
            </td>
          </tr>
          <tr>
            <td class="first-col">
              {{$t('pci.p2pe.table.r4c1')}}
            </td>
            <td>{{$t('pci.p2pe.table.r4c2')}}</td>
            <td>
              <ul class="list" v-html="$t('pci.p2pe.table.r4c3')">
               
              </ul>
            </td>
          </tr>
          <tr>
            <td class="first-col">
          {{$t('pci.p2pe.table.r5c1')}}
            </td>
            <td>{{$t('pci.p2pe.table.r5c2')}}</td>
            <td>
              <ul class="list" v-html="$t('pci.p2pe.table.r5c3')">
              
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <img src="~assets/PCI/8.png" class="mb-5 w-full" />
  </section>
</template>
   
<script>
export default {
  layout: "pci",
};
</script>

<style lang="scss">
.pci-table {
  .list {
    margin-left: 0;
    list-style: none;
    li {
      margin: 0;
    }
  }
}
</style>

<style lang="scss" scoped>
.pci-table {
  thead {
    background: #126c84;
    color: #ffffff;
    tr th {
      padding: 10px 0;
    }
  }
  tbody tr td {
    padding: 10px;
    border: 1px solid #000000;
  }
  tbody td.first-col {
    background: #cbd4d5;
    font-weight: 700;
  }

}
</style>