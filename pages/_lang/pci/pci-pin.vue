<template>
  <section>
    <h2 class="title">
      {{$t('pci.pcipin.title')}}
      <div class="badge">{{$t('pci.pcipin.badge')}}</div>
    </h2>
    <div class="chapter">
      <h3>{{$t('pci.pcipin.header1')}}</h3>
      <p
        class="mb-8"
      >{{$t('pci.pcipin.p1')}}</p>
      <p>{{$t('pci.pcipin.p2')}}</p>
    </div>
    <div class="chapter" id="transaction">
      <h3>{{$t('pci.pcipin.header2')}}</h3>
      <div v-html="$t('pci.pcipin.list')">      
      </div>
    </div>
    <div class="chapter">
      <h3>{{$t('pci.pcipin.header3')}}</h3>
      <ul>
        <li>
          {{$t('pci.pcipin.p3')}}
          <a v-scroll-to="{element: '#transaction', offset: -100}" class="underline">{{$t('pci.pcipin.link1')}}</a>
        </li>
        <li>{{$t('pci.pcipin.p4')}} <a v-scroll-to="{element: '#control-3', offset: -100}" class="underline">{{$t('pci.pcipin.link2')}}</a></li>
      </ul>
    </div>
    <div class="chapter">
      <h3>{{$t('pci.pcipin.header4')}}</h3>
      <p class="text-lg font-bold"><a v-scroll-to="{element: '#transaction', offset: -100}" class="underline">{{$t('pci.pcipin.link3')}}</a></p>
    </div>
    <img src="~assets/PCI/7.png" class="mb-5 w-full" />
  </section>
</template>

<script>
export default {
  layout: "pci",
};
</script>

<style>
</style>
