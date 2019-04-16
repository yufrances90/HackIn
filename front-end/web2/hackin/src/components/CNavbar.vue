<template>
    <div class="page-container">
        <MdToolbar class="md-primary md-medium">
            <MdButton 
                class="md-icon-button"
                :disabled="!isLoggedIn"
                @click="showNavigation = true"
            >
                <md-icon>
                        menu 
                </md-icon> 
            </MdButton>
            <h3 class="md-title" style="flex: 1">
                <router-link 
                    to="/"
                    class="nav-link"
                > 
                    {{ title }}
                </router-link>
            </h3>
            <span v-show="!isLoggedIn">
                <MdButton
                >
                    <router-link 
                        :to="{
                            name: 'PLogin',
                            params: {
                                isSignUpOpt: true
                            }
                        }"
                        class="nav-link"
                    > 
                        Sign up
                    </router-link>
                </MdButton>
                <MdButton
                >
                    <router-link 
                        :to="{
                            name: 'PLogin',
                            params: {
                                isSignUpOpt: false
                            }
                        }"
                        class="nav-link"
                    > 
                        Login
                    </router-link>
                </MdButton>
            </span>
            <MdButton 
                class="md-icon-button"
                v-show="isLoggedIn"
            >
                <md-icon>
                        person
                </md-icon> 
            </MdButton>
        </MdToolbar>
        <MdDrawer
            :md-active.sync="showNavigation"
        >
            <MdToolbar
                class="md-transparent" 
                md-elevation="0"
            >   
                <span class="md-title">
                   {{ title }}
                </span>
            </MdToolbar>

            <MdList>
                <MdListItem>
                    <router-link 
                        :to="{
                            name: 'PCreate',
                            params: {
                                isNewHackathonCreation: true
                            }
                        }"
                        class="nav-link"
                    > 
                        Create New Hackathon
                    </router-link>
                </MdListItem>
                <MdListItem>
                    <router-link 
                        :to="{
                            name: 'PCreate',
                            params: {
                                isNewHackathonCreation: false
                            }
                        }"
                        class="nav-link"
                    > 
                        Apply To Hackathon
                    </router-link>
                </MdListItem>
            </MdList>
        </MdDrawer>
    </div>
</template>

<script>

import Vue from 'vue';
import { 
    MdToolbar,
    MdButton,
    MdDrawer,
    MdList,
    MdSnackbar 
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

Vue.use(MdToolbar);
Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdList);
Vue.use(MdSnackbar);

export default {
    name: 'CNavbar',
    data: () => ({
        title: "HackMMunity",
        isLoggedIn: false,
        showNavigation: false
    })
}

</script>

<style lang="scss" scoped>
    .md-app {
        max-height: 400px;
        border: 1px solid rgba(#000, .12);
    }

    .md-app-toolbar {
        height: 196px;
    }

   // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }

    .nav-link {
        color: inherit !important;
    }

    .nav-link:hover {
        text-decoration: none;
    }
</style>

