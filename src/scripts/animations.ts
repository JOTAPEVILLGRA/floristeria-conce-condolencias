import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initializeAnimations = () => {
  const root = document.querySelector<HTMLElement>('[data-page="home"]');
  if (!root) return;

  const header = root.querySelector<HTMLElement>('.site-header');
  const updateHeaderBackground = () => {
    header?.classList.toggle('site-header--transparent', window.scrollY > 24);
  };

  updateHeaderBackground();
  window.addEventListener('scroll', updateHeaderBackground, { passive: true });

  const media = gsap.matchMedia();

  media.add(
    {
      reduceMotion: '(prefers-reduced-motion: reduce)',
      desktop: '(min-width: 800px)',
      mobile: '(max-width: 799px)',
    },
    (context) => {
      const { reduceMotion, desktop } = context.conditions as {
        reduceMotion: boolean;
        desktop: boolean;
        mobile: boolean;
      };

      if (reduceMotion) {
        gsap.set('[data-reveal], [data-product-card], [data-hero-item]', {
          clearProps: 'all',
        });
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .from('.site-header', { y: -24, autoAlpha: 0, duration: 0.7 })
        .from('[data-hero-item]', {
          y: 34,
          autoAlpha: 0,
          duration: 1.05,
          stagger: 0.1,
        }, '-=0.35')
        .from('.hero__background', {
          clipPath: 'inset(0 0 0 100%)',
          duration: 1.35,
          ease: 'power4.inOut',
        }, '-=1.05');

      if (desktop) {
        intro.from('[data-whatsapp]', {
          scale: 0.7,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'back.out(1.8)',
        }, '-=0.35');
      }

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          y: 38,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'clamp(top 86%)',
            once: true,
          },
        });
      });

      if (desktop) {
        gsap.to('.hero__background-image', {
          scale: 1.07,
          yPercent: 4,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.1,
          },
        });

        gsap.to('.hero__orb--one', {
          y: 90,
          rotate: 14,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.4,
          },
        });

      }

      const whatsapp = document.querySelector('[data-whatsapp]');
      if (whatsapp && desktop) {
        gsap.to(whatsapp, {
          keyframes: [
            { scale: 1.06, duration: 0.25 },
            { scale: 1, duration: 0.4 },
          ],
          delay: 3.2,
          ease: 'power2.out',
        });
      }
    },
  );

  const refresh = () => ScrollTrigger.refresh();
  document.fonts?.ready.then(refresh);
  Promise.all(
    Array.from(document.images)
      .filter((image) => !image.complete)
      .map((image) => image.decode().catch(() => undefined)),
  ).then(refresh);

  document.querySelectorAll<HTMLDetailsElement>('[data-catalog-group]').forEach((group) => {
    group.addEventListener('toggle', () => {
      if (!group.open) return;

      const cards = group.querySelectorAll<HTMLElement>('[data-product-card]');
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.fromTo(cards, {
          autoAlpha: 0,
          y: 24,
        }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: 'power3.out',
          clearProps: 'opacity,visibility,transform',
        });
      }
    });
  });

  window.addEventListener('pagehide', () => {
    media.revert();
    window.removeEventListener('scroll', updateHeaderBackground);
  }, { once: true });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAnimations, { once: true });
} else {
  initializeAnimations();
}
