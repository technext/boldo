import { docReady } from './utils';
import detectorInit from './detector';
import swiperInit from './swiper';
import isotopeInit from './isotope';
import glightboxInit from './glightbox';
import cursorInit from './cursor';
import navbarInit from "./navbar-darken-on-scroll";

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(swiperInit);
docReady(glightboxInit);
docReady(isotopeInit);
docReady(cursorInit);
docReady(navbarInit)
