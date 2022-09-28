<template>
  <section>
    <h2 class="title">PCI DSS</h2>
    <div class="chapter">
      <h3>1.Introduction of PCI</h3>
      <p
        class="mb-8"
      >The PCI Security Standards Council is a global forum with the aim of establishing security standards for account data protection. The PCI Data Security Standards define operational and technical requirements for entities that store, process or transmit payment card information, including merchants, processors, acquires, issuers and service providers.</p>
    </div>
    <div class="chapter">
      <h3>2. Newland NPT Complies with PCI DSS</h3>
      <p>PCI DSS comprises with 12 requirements covering 6 categories for the applicable entities to assess whether they have maintained a secure environment for the protection of their affiliated payment card account data.including:</p>
    </div>
    <div class="chapter">
      <ul>
        <li>Build and maintain a secure network and systems</li>
        <li>Protect cardholder data</li>
        <li>Maintain a vulnerability management program</li>
        <li>Implement strong access control measures</li>
        <li>Regularly monitor and test networks</li>
        <li>Maintain an information security policy</li>
      </ul>
    </div>
    <img src="~assets/PCI/6.png" class="mb-8 w-full" />
    <div class="chapter">
      <p>Newland NPT engaged with PCI SSC Approved Qualified Security Assessor (QSA) to conduct annual onsite assessment, i.e., PCI DSS v3.2.1 certified. Assessment Scope : TOMS(Terminal Operation Management System).</p>
      <p>
        <i class="font-bold">Date of Issue August 24 2022.</i>
      </p>
    </div>
    <div class="chapter">
      <h3>4.Key-Injection Facilities Security Requirements Technical</h3>
      <ul>
        <li>(Control Objective 1/2/3/4/5/6/7)</li>
      </ul>
    </div> 
  </section>
</template>

<script>
export default {
  layout: "pci",
};
</script>

<style>
</style>