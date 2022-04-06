<template>
            <li v-if="!isAuthenticated && !isLoading" class="item">
              <button
                id="qsLoginBtn"
                class="btn btn-primary btn-margin"
                @click.prevent="login"
              >Login</button>
            </li>

            
              <a
                class="link dropdown-toggle"
                href="#"
                id="profileDropDown"
                data-toggle="dropdown"
              >
                <img
                  :src="user.picture"
                  alt="User's profile picture"
                  class="user-profile rounded-circle"
                  width="50"
                />
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <div class="dropdown-header">{{ user.name }}</div> <br/>
                <router-link to="/profile" class="dropdown-item dropdown-profile">
                  <font-awesome-icon class="mr-3" icon="user" />Profile <br/>
                </router-link>
                <a id="qsLogoutBtn" href="#" class="dropdown-item" @click.prevent="logout">
                  <font-awesome-icon class="mr-3" icon="power-off" />Log out
                </a>
              </div>
            
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: "NavBar",
  setup() {
    const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0();
    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({
          returnTo: window.location.origin
        });
      },
      isAuthenticated,
      isLoading,
      user,
    }
  }
};
</script>

<style>
#mobileAuthNavBar {
  min-height: 125px;
  justify-content: space-between;
}
</style>
