<template>
  <div class="stoutstorm-logo-content">
    <div class="stoutstorm-logo">
      <div class="stoutstorm-logo-part"></div>
      <div class="stoutstorm-logo-part"></div>
      <div class="stoutstorm-logo-part"></div>
      <div class="stoutstorm-logo-part"></div>
      <div class="stoutstorm-logo-part"></div>
    </div>
    <div class="info">
      <h3>烈酒风暴</h3>
      <div>STOUTSTORM</div>
    </div>
  </div>

</template>
<style scoped>
.stoutstorm-logo-content {
  display: flex;
  align-items: center;
  color: var(--logo-color);
}

.info {
  padding-bottom: 6px;
}

.info h3 {
  margin: 0;
  font-size: 28px;
}

.info div {
  font-size: 16px;
}

.stoutstorm-logo {
  margin-right: 20px;
  width: var(--logo-size);
  height: var(--logo-size);
  transform: rotateZ(45deg);
}

.stoutstorm-logo-part {
  position: absolute;
  background-color: var(--logo-color);
  height: var(--line-weight);
}

.stoutstorm-logo-part:nth-child(1) {
  width: 50%;
}

.stoutstorm-logo-part:nth-child(2) {
  width: var(--line-weight);
  height: 50%;
  background-color: rgba(0, 0, 0, 0);
  border: var(--border-width) solid var(--logo-color);
}

.stoutstorm-logo-part:nth-child(3) {
  width: 100%;
  top: calc(50% - 5px);
}

.stoutstorm-logo-part:nth-child(4) {
  top: 50%;
  right: 0;
  width: var(--line-weight);
  height: 50%;
  background-color: rgba(0, 0, 0, 0);
  border: var(--border-width) solid var(--logo-color);
}

.stoutstorm-logo-part:nth-child(5) {
  bottom: 0;
  right: 0;
  width: 50%;
}
</style>