import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faGithub, faLinkedin, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin, faFacebook, faInstagram);

const root = createApp(App);
root.component("font-awesome-icon", FontAwesomeIcon);
root.mount('#app');
