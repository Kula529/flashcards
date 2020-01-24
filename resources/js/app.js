require('./bootstrap');
import store from "./store";
import router from "./routes";
import VueRouter from "vue-router";
import LazyLoad from "./lazyload";
import ServiceWorker from "./plugins/ServiceWorker";
import NotificationSystem from "./plugins/NotificationSystem";
import Index from "./Index";
import VueApollo from "vue-apollo";
import apolloClient from "./apollo";
import Vuetify from 'vuetify'
import vuetify from "./vuetify";
import VueClipboard from 'vue-clipboard2'

window.Vue = require('vue');

Vue.use(Vuetify)
Vue.use(VueRouter);
Vue.use(LazyLoad);
Vue.use(ServiceWorker);
Vue.use(NotificationSystem);
Vue.use(VueApollo);
Vue.use(VueClipboard)


const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})


Vue.mixin({
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
        user() {
            return this.$store.getters.user;
        }
    },
})

auth().then(res => {
    setInterval(() => auth(), 60000);
});

function logout() {
    store.dispatch('forceLogout');
    router.push({
        name: "login"
    });
}

function auth() {
    console.log("🙊check auth");
    return new Promise((resolve, reject) => {
        if (store.getters.token) {
            const expiry = store.getters.expiry;
            // if expired - lesser than minute
            if (new Date(new Date(expiry) - 1 * 60000) <= new Date(expiry)) {
                store
                    .dispatch("refresh_token")
                    .then(response => {
                        return store.dispatch("me")
                    })
                    .catch(error => {
                        logout();
                    })
                    .finally(res => {
                        if (!store.getters.started) {
                            start();
                        }
                    })

            }
        } else {
            // if no token
            store
                .dispatch("refresh_token")
                .then(response => {
                    router.push({
                        name: "home"
                    });
                    return store.dispatch("me");
                }).catch(error => {
                    // what if no token and no refresh_token??
                    console.log("You are guest.");
                }).finally(res => {
                    if (!store.getters.started) {
                        start();
                    }
                })


        }
        resolve(true)
    });
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authenticated)) {
        if (!store.getters.isAuthenticated) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.visitor)) {
        if (store.getters.isAuthenticated) {
            next({
                name: 'home',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})



export function start() {
    new Vue({
        el: '#app',
        store,
        router,
        apolloProvider,
        vuetify,
        // components: {
        //     "index": Index
        // },
        components: {
            "index": Index
        },
        // //? add to mixins?
        methods: {
            onStorageUpdate(event) {
                if (event.key === "user") {
                    // if someone removes elsewhere user item
                    if (event.newValue === null) {
                        this.logout();
                    }
                }
                if (event.key === "logout") {
                    console.log("Logout");
                    this.logout();
                }
            },
            auth() {
                return new Promise((resolve, reject) => {
                    if (this.$store.getters.token) {
                        const expiry = this.$store.getters.expiry;
                        // if expired - lesser than minute
                        if (new Date(new Date(expiry) - 1 * 60000) <= new Date(expiry)) {
                            this.$store
                                .dispatch("refresh_token")
                                .then(response => {
                                    this.$store.dispatch("me");
                                })
                                .catch(error => {
                                    this.logout();
                                })
                        }
                    } else {
                        // if no token
                        this.$store
                            .dispatch("refresh_token")
                            .then(response => {
                                this.$store.dispatch("me");
                                this.$router.push({
                                    name: "home"
                                });
                            }).catch(error => {
                                // what if no token and no refresh_token??
                                console.log("You are guest.");
                            })


                    }
                    resolve(true)
                });
            },
            logout() {
                this.$store.dispatch('forceLogout');
                this.$router.push({
                    name: "login"
                });
            }
        },
        beforeCreate() {
            // if ('serviceWorker' in navigator) {
            //     this.$ServiceWorkerActivated();
            //     this.$ServiceWorkerInstalled();
            //     this.$ServiceWorkerRegister();
            // }

            // if ('Notification' in window && navigator.serviceWorker) {
            //     this.$NotificationsInstall();
            // }
            // window.localStorage.removeItem('logout')
        },
        created() {
            this.$store.commit("start");
        },
        mounted() {
            window.addEventListener("storage", this.onStorageUpdate);
        },
        beforeDestroy() {
            clearInterval(this.authInterval)
            window.removeEventListener('storage', this.onStorageUpdate)
            window.localStorage.removeItem('logout')
        },
    })
};
