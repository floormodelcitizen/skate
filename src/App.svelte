<script lang="ts">
  import { onMount } from "svelte";
  import { supabase } from "./lib/db";
  import { Router, Route } from "svelte-routing";
  import data from "./routes/index";
  import { navigate } from "svelte-routing";
  import type { User } from "@supabase/supabase-js";
  import { activeUser } from "../src/helpers/store";
  let user: User;

  import Layout from "./routes/Layout.svelte";

  export let url = "";

  import { addMessages, init } from "svelte-i18n";
  import en from "./services/lang/en.json";
  addMessages("en", en);
  init({
    fallbackLocale: "en",
    initialLocale: "en",
  });

  onMount(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      user = session?.user ?? null;
    });

    const { subscription: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      const currentUser = session?.user;
      user = currentUser ?? null;

      if (user !== null) {
        $activeUser = user.id;
        localStorage.setItem("authUser", JSON.stringify(user));
      } else {
        localStorage.removeItem("authUser");
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  });

  if (!localStorage.getItem("authUser")) {
    navigate("/login");
  }
  console.log(activeUser);
</script>

<Router {url}>
  {#if user}
    {#each data.authProtectedRoutes as route}
      <Route path={route.path} let:params>
        <Layout>
          <svelte:component this={route.component} />
        </Layout>
      </Route>
    {/each}
  {:else}
    {#each data.publicRoutes as route}
      <Route path={route.path}>
        <svelte:component this={route.component} />
      </Route>
    {/each}
  {/if}
</Router>
