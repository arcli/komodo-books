/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { md2 } from "vuetify/blueprints";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    blueprint: md2,
    theme: {
        themes: {
            light: {
                colors: {
                    primary: "#172e44",
                    secondary: "#5CBBF6",
                },
            },
        },
    },
});
