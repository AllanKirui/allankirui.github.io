<template>
  <header class="header" ref="header">
    <nav class="nav flex flex-jc-sb flex-ai-c">
      <a href="/" class="header__logo" aria-label="home"
        >a<span class="text-alt-color">k</span></a
      >

      <label class="header__toggler" aria-label="Switch theme">
        <input
          ref="check"
          type="checkbox"
          @change="$emit('change-theme', this.$refs.check)"
        />
        <span class="toggle"></span>
      </label>

      <div class="header__links hide-for-small">
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>

        <div class="resume-btn-wrapper">
          <a
            href="/allan-kirui-resume.pdf"
            class="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            >resume</a
          >
        </div>
      </div>

      <button
        type="button"
        aria-label="Toggle menu"
        :class="[isMenuOpen ? 'open' : '', 'header__burger hide-for-large']"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <div
      :class="[
        isMenuOpen ? 'open' : '',
        'header__menu flex flex-fd-c hide-for-large',
      ]"
    >
      <a href="#about" @click="closeMenu">about</a>
      <a href="#projects" @click="closeMenu">projects</a>
      <a href="#contact" @click="closeMenu">contact</a>
      <a
        href="/allan-kirui-resume.pdf"
        class="resume-btn"
        target="_blank"
        rel="noopener noreferrer"
        @click="closeMenu"
        >resume</a
      >
      <small>Designed & Built by Allan Kirui.</small>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    preCheckDarkToggle() {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        this.$refs.check.checked = true;
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;

      document.body.classList.toggle("no-scroll");
    },
    closeMenu() {
      // remove "no-scroll" class on body
      document.body.classList.remove("no-scroll");

      // close mobile menu if it was open
      this.isMenuOpen = false;
    },
    closeMenuOnResize() {
      let viewportWidth = window.innerWidth;

      if (viewportWidth > 768) {
        this.closeMenu();
      }
    },
    checkWindowSize() {
      window.addEventListener("resize", this.closeMenuOnResize);
    },
    checkWindowScrollPosition() {
      const headerEl = this.$refs.header;
      let lastScrollPosY = 0;

      window.addEventListener("scroll", () => {
        let currentScrollPosY = window.scrollY;

        // hide the header while scrolling down
        if (currentScrollPosY > lastScrollPosY) {
          headerEl.style.top = `-${headerEl.clientHeight}px`;

          // show the header if the mobile menu is open
          if (this.isMenuOpen) {
            headerEl.style.top = 0;
          }
        } else {
          // show the header while scrolling up
          headerEl.style.top = 0;
        }

        lastScrollPosY = currentScrollPosY;
      });
    },
  },
  mounted() {
    this.preCheckDarkToggle();
    this.checkWindowScrollPosition();
  },
  beforeUpdate() {
    this.checkWindowSize();
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  margin-bottom: 2.5rem;
  position: fixed;
  top: 0;
  background-color: var(--header-bg-color);
  backdrop-filter: blur(10px);
  transition: all var(--transition-300);
  z-index: 4;
}

.nav {
  padding: var(--p-step-0) var(--p-step-1);
  margin: 0 auto;
  max-width: 86.25rem;
  position: relative;
}

.header__logo {
  font-size: 2rem;
  font-weight: 700;
  z-index: 3;
}

.header__toggler {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.header__toggler input[type="checkbox"] {
  visibility: none;
  display: none;
}

.header__toggler .toggle {
  position: relative;
  display: block;
  width: 2.5rem;
  height: 22px;
  background-color: hsl(210, 3%, 75%);
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  transition: ease-in;
}

.header__toggler input[type="checkbox"]:checked ~ .toggle {
  background-color: hsl(13, 50%, 69%);
}

.header__toggler .toggle::before,
.header__toggler .toggle::after {
  content: "";
  position: absolute;
  top: 2.5px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  transition: 0.5s;
}

.header__toggler .toggle::before {
  left: 2.5px;
  background-color: hsl(0, 0%, 100%);
}

.header__toggler input[type="checkbox"]:checked ~ .toggle::before {
  transform: translateX(-50px);
}

.header__toggler .toggle::after {
  right: 2.5px;
  background: hsl(211, 66%, 7%);
  transform: translateX(50px);
}

.header__toggler input[type="checkbox"]:checked ~ .toggle::after {
  transform: translateX(0);
}

.header__links a {
  position: relative;
  font-size: var(--step-1);
  font-weight: 500;
  transition: color var(--transition-300);
}

.header__links a:not(:last-child) {
  margin-right: 2.5rem;
}

.header__links a::before {
  content: "";
  display: block;
  position: absolute;
  height: 3px;
  left: 0;
  right: 0;
  bottom: -24px;
  background: var(--nav-link-underline-color);
  border-radius: 50px;
  opacity: 0;
  transition: opacity var(--transition-300);
}

.header__links a:hover {
  color: var(--nav-link-color);
}

.header__links a:hover::before {
  opacity: 1;
}

.header__links .resume-btn-wrapper {
  display: inline;
}

.header__links a.resume-btn {
  background-color: var(--resume-btn-bg-color);
  color: var(--resume-btn-text-color);
  padding: 8px 14px;
  border-radius: 5px;
  transition: background-color var(--transition-300);
}

.header__links a.resume-btn::before {
  display: none;
}

.header__links a.resume-btn:hover {
  background-color: var(--resume-btn-bg-alt-color);
}

.header__burger {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 3;
}

.header__burger span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--text-alt-color);
  transition: all var(--transition-300);
  transform-origin: 2.3px 1.2px;
}

.header__burger span:nth-child(1) {
  width: 20px;
}

.header__burger span:nth-child(2) {
  width: 15px;
}

.header__burger span:not(:last-child) {
  margin-bottom: 5px;
}

.header__burger.open span:nth-child(1) {
  width: 22px;
  transform-origin: right center;
  transform: translateY(0.6px) rotate(-45deg);
}

.header__burger.open span:nth-child(2) {
  opacity: 0;
}

.header__burger.open span:nth-child(3) {
  width: 22px;
  transform-origin: right center;
  transform: translateY(2.5px) rotate(45deg);
}

.header__menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-height: -webkit-fill-available;
  padding: 6rem 2rem;
  background-color: var(--bg-alt-color);
  border-radius: 50rem 0 50rem 50rem;
  transform-origin: top right;
  transform: scale(0);
  visibility: hidden;
  transition: all var(--transition-300);
  z-index: 2;
}

.header__menu.open {
  transform: scale(1);
  border-radius: 0;
  visibility: visible;
}

.header__menu a {
  padding: 0.625rem;
  text-align: center;
  font-size: var(--step-1);
}

.header__menu a:not(:last-child) {
  margin-bottom: 5px;
}

.header__menu a:hover {
  color: var(--nav-link-color);
}

.header__menu small {
  margin: auto auto 100px auto;
  transition: color var(--transition-300);
}

@media (min-width: 1001px) {
  .hide-for-large {
    display: none;
  }
}

@media (max-width: 1000px) {
  .hide-for-small {
    display: none;
  }
}
</style>