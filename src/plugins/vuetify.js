import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#07B1D4',
        secondary: '#8ACE6C',
        accent: '#5C3B24',
        error: '#E79AC6',
        info: '#E5A788',
        success: '#A1D563',
        warning: '#F0E04A'
      },
    },
  },
});
