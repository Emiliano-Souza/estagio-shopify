class FaqCustom {
  constructor(section) {
    this.section = section;
    this.items = this.section.querySelectorAll('.faq-custom__item');

    if (!this.items.length) return;

    this.init();
  }

  init() {
    this.items.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;

        this.items.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.open = false;
          }
        });
      });
    });
  }
}

function initializeFaqSections(container = document) {
  const sections = container.querySelectorAll('.faq-custom');

  sections.forEach((section) => {
    if (section.dataset.initialized === 'true') return;

    section.dataset.initialized = 'true';

    new FaqCustom(section);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeFaqSections();
});

document.addEventListener('shopify:section:load', (event) => {
  initializeFaqSections(event.target);
});