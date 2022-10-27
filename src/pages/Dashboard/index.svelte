<script lang="ts">
  import { Container } from "sveltestrap";
  import type { User } from "@supabase/supabase-js";
  let user: User;

  //Import Breadcrumb
  import Breadcrumbs from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumbs title="Dashboards" breadcrumbItem="Dashboard" />
  </Container>
</div>
