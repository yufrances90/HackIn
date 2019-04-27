import Vue from 'vue';

import { 
    MdList,
    MdButton,
    MdTooltip,
    MdSwitch,
    MdDivider,
    MdSubheader,
    MdDialogConfirm,
    MdCard,
    MdField,
    MdDatepicker,
    MdDialog,
    MdDialogAlert,
    MdCheckbox,
    MdRadio,
    MdMenu,
    MdToolbar,
    MdDrawer,
    MdSnackbar,
    MdAvatar,
    MdChips,
    MdProgress
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App.vue';

import router from './routes';
import utils from './utils';

Vue.config.productionTip = false;

Vue.use(MdList);
Vue.use(MdButton);
Vue.use(MdTooltip);
Vue.use(MdSwitch);
Vue.use(MdDivider);
Vue.use(MdSubheader);
Vue.use(MdDialogConfirm);
Vue.use(MdCard);
Vue.use(MdField);
Vue.use(MdDatepicker);
Vue.use(MdDialog);
Vue.use(MdDialogAlert);
Vue.use(MdCheckbox);
Vue.use(MdRadio);
Vue.use(MdMenu);
Vue.use(MdToolbar);
Vue.use(MdDrawer);
Vue.use(MdSnackbar);
Vue.use(MdAvatar);
Vue.use(MdChips);
Vue.use(MdProgress);

Vue.use(ElementUI, { locale });

Vue.use(VueGoogleMaps, {
    load: {
        key: utils.GoogleApiKey,
    }
});

Vue.config.errorHandler = err => {
    console.log('Exception: ', err)
}

new Vue({
    router,
    store: utils.Store,
    render: h => h(App),
}).$mount('#app');
