<template>
  <section id="contact" class="contact fade-in" ref="contact">
    <div class="contact__text">
      <h2 class="contact__text-title">
        feel free to <span class="text-alt-color">contact me</span>
      </h2>
      <p class="contact__text-description text-1">
        Connect with me and let's build a world of websites together. I am
        seeking new opportunities and exciting challenges.
      </p>
      <p class="contact__text-description text-2">
        Feel free to also just <span class="semi-bold">say hi</span> and I'll
        try my best to get back to you soon!
      </p>
    </div>

    <div class="contact__link">
      <a href="mailto:allan.kirui@outlook.com" class="cta">Say Hello</a>
    </div>
  </section>
</template>

<script>
export default {
  inject: ["fadeHandler"],
  methods: {
    showFadingElement() {
      const fadingEl = this.$refs.contact;
      const fadingPoint = 150; // pixel value
      this.fadeHandler(fadingEl, fadingPoint);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.showFadingElement);
  },
};
</script>

<style scoped>
.contact {
  height: 90vh;
  text-align: center;
}

.contact__text-title {
  text-align: center;
}

.contact__text {
  margin-bottom: 5rem;
}

.contact__text-title {
  text-align: center;
}

.contact__text-description.text-1 {
  width: 31.25rem;
  margin: 0 auto;
  margin-bottom: var(--m-step--1);
}

.contact__link {
  height: fit-content;
}

.contact__link .cta {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  background-color: var(--cta-bg-color);
  color: var(--cta-text-color);
  font-size: var(--step-1);
  font-weight: 500;
  transition: all var(--transition-200);
  box-shadow: var(--cta-shadow);
}

.contact__link .cta:hover {
  background-color: var(--cta-hover-bg-color);
  color: var(--cta-hover-text-color);
  outline: 1px solid var(--cta-outline-color);
  outline-offset: 5px;
}

@media (max-width: 768px) {
  .contact {
    text-align: left;
  }

  .contact__text-description.text-1 {
    width: 100%;
  }

  .contact__link {
    text-align: center;
  }
}
</style>