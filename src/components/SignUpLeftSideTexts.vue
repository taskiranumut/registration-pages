<script>
import PrivacyFooter from "@/components/PrivacyFooter";

export default {
  name: "SignUpLeftSideTexts",
  components: {
    PrivacyFooter,
  },
};
</script>

<template>
  <div>
    <article>
      <p>
        <span><i class="fas fa-check-circle icon"></i></span>
        <span class="title">Lorem Ipsum</span>
      </p>
      <p class="p-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin augue
        ipsum, aliquam et est quis, maximus tempus ante.
      </p>
    </article>
    <article>
      <p>
        <span><i class="fas fa-check-circle icon"></i></span>
        <strong class="title">Maecenas egestas</strong>
      </p>
      <p class="p-text">
        Maecenas egestas orci mollis nibh pretium, sit amet lacinia mauris
        blandit.
      </p>
    </article>
    <article>
      <p>
        <span><i class="fas fa-check-circle icon"></i></span>
        <strong class="title">Suspendisse faucibus felis</strong>
      </p>
      <p class="p-text">
        Suspendisse faucibus felis id bibendum rhoncus. Phasellus neque metus,
        varius id ultrices in, bibendum eget dolor. Ut augue felis, sodales ud
        diam nec, congue vehicula turpis.
      </p>
    </article>
    <PrivacyFooter />
  </div>
</template>

<style scoped>
p {
  margin: 0;
}

article {
  margin-bottom: 16px;
}

.p-text {
  margin-left: 28px;
  color: #3c4257;
  font-size: 13px;
  font-weight: 600;
  margin-top: 2px;
}

.title {
  color: #1b2037e6;
  font-size: 15px;
  font-weight: bold;
}

.icon {
  font-size: 16px;
  color: #635bff;
  margin-right: 12px;
}
</style>
