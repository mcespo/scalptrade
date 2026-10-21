// This is all you.
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import intersect from '@alpinejs/intersect';

window.Alpine = Alpine;

Alpine.plugin(focus);
Alpine.plugin(intersect);

Alpine.data('cookieConsent', () => ({
  open: false,

  init() {
    try {
      this.open = localStorage.getItem('cookie-consent') === null;
    } catch (e) {
      this.open = true;
    }
  },

  choose(choice) {
    try {
      localStorage.setItem('cookie-consent', choice);
    } catch (e) {}
    window.gtag?.('consent', 'update', { analytics_storage: choice });
    this.open = false;
  },

  reopen() {
    this.open = true;
    this.$nextTick(() => this.$refs.accept?.focus());
  },
}));

Alpine.start();
