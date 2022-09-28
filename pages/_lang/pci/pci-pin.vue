<template>
  <section>
    <h2 class="title">PCI PIN</h2>
    <div class="chapter">
      <h3>1.Introduction of PCI</h3>
      <p
        class="mb-8"
      >PCI PIN standard contains a complete set of requirements for the secure management, processing, and transmission of personal identification number (PIN) data during online and offline payment card transaction processing at ATMs and point-of-sale (POS) terminals.</p>
      <p>PCI PIN requirements are intended for use by all acquiring institutions and agents (e.g., key-injection facilities and certificate processors) responsible for PIN transaction processing on the payment card industry participants’ denominated accounts and should be used in conjunction with other applicable industry standards.The individual payment brands are responsible for defining and managing compliance programs associated with these requirements:</p>
    </div>
    <div class="chapter">
      <h3>2.Transaction Processing Operations</h3>
      <ul>
        <li>PINs used in transactions governed by these requirements are processed using equipment and methodologies that ensure they are kept secure.</li>
        <li>Cryptographic keys used for PIN encryption/decryption and related key management are created using processes that ensure that it is not possible to predict any key or determine that certain keys are more probable than other keys.</li>
        <li>Keys are conveyed or transmitted in a secure manner.</li>
        <li>Key-loading to HSMs and POI PIN-acceptance devices is handled in a secure manner.</li>
        <li>Keys are used in a manner that prevents or detects their unauthorized usage.</li>
        <li>Keys are administered in a secure manner.</li>
        <li>Equipment used to process PINs and keys is managed in a secure manner.</li>
      </ul>
    </div>
    <div class="chapter">
      <h3>3.Symmetric Key Distribution using Asymmetric Techniques</h3>
      <ul>
        <li>A1 – Remote Key Distribution Using Asymmetric Techniques Operations (Control Objective 1/2/3/4/5/6)</li>
        <li>A2 – Certification and Registration Authority Operations (Control Objective 3/4/5/6/7)</li>
      </ul>
    </div>
    <div class="chapter">
      <h3>4.Key-Injection Facilities Security Requirements Technical</h3>
      <ul>
        <li>(Control Objective 1/2/3/4/5/6/7)</li>
      </ul>
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