# Feedback do zadania rekrutacyjnego

Komponent Nav powinien zawierać mniejsze komponenty typu `NavItem`

`src/components/Nav.vue`

```vue
<template>
  <div>
    <div class="wrapper"></div> <!-- Dlaczego ten wrapper jest pusty? -->
    <div id="nav">
      <router-link to="/"><div class="back"></div></router-link>
      <div class="title">{{title}}</div>
      <router-link v-if='type === "product"' to="/cart">
        <div class="cart">
          <div v-if="cartElements.length > 0" class="count">{{cartElements.length}}</div>
        </div>
      </router-link>
      <div v-if='type === "cart"' @click="clearCart" class="trash"></div>
    </div>
  </div>

</template>
```

1. W obecnej formie zrobiła się tam duża ifologia, która w projekcie o dużej strukturze będzie ciężka do zarządzania.
2. Na dobrą sprawę, powinny być dwa komponenty: NavStoreComponent i NavCartComponent
3. A jego renderowanie ustawić na zasadzie `component :is="handleActiveRoute"`

```vue
// src.components/Home.vue
<template>
  <div class="home">
    <component :is="RouteBasedNavigation" />
    <ProductList/>
  </div>
</template>

<style scoped> <!-- Niepotrzebny style tag -->
</style>

<script>
import ProductList from '@/components/ProductList.vue';
import NavStoreComponent from '@/components/NavStoreComponent.vue'
import NavCartComponent from '@/components/NavCartComponent.vue'

export default {
  name: 'Home',
  components: {
    ProductList,
    NavStoreComponent,
    NavCartComponent
  },
  computed: {
    RouteBasedNavigation() {
      return this.$route.path === 'cart' ? 'NavCartComponent' : 'NavStoreComponent'
    }
  },
};
</script>

```

I tutaj tego jak mógłby wyglądać taki komponent:

```vue
<template>
  <nav>
    <div class="cart">
      <div
        v-if="itemsNumber"
        class="count"
      >
        {{ itemsNumber }}
      </div>
    </div>
    <div @click="clearCart" class="trash"></div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NavCartComponent',
  computed: {
    ...mapGetters('cart', ['cartElements']),
    itemsNumber() {
      return this.cartElements.length;
    },
  },
  methods: {
    ...mapActions('cart', ['addToCart', 'clearCart']),
  },
};
</script>

```
