<script>
  import { onMount } from "svelte";
  import { Card, CardBody, NavItem, NavLink } from "sveltestrap";
  let activeTab = "1";
  import { Datatable, dataRows } from "svelte-simple-datatables";
  const settings = {
    sortable: true,
    pagination: true,
    rowPerPage: 10,
  };
  import data from "../../../common/data/crypto";
  dataRows = rows;
  const walletactivityclass = () => {
    document.querySelector(".dt-pagination-buttons").classList.add("btn-group");

    var addnewclasses = document.querySelectorAll("button.svelte-9qvh1i");

    addnewclasses.forEach(function (walletactivity) {
      walletactivity.classList.add("btn");
      walletactivity.classList.add("btn-outline-primary");
    });
  };

  onMount(async () => {
    walletactivityclass();
  });
</script>

<Card>
  <CardBody>
    <h4 class="card-title mb-4">Activities</h4>
    <ul class="nav nav-tabs nav-tabs-custom">
      <NavItem>
        <NavLink
          on:click="{() => (activeTab = '1')}"
          active="{activeTab == '1'}"
        >
          All
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          on:click="{() => (activeTab = '2')}"
          active="{activeTab == '2'}"
        >
          Buy
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          on:click="{() => (activeTab = '3')}"
          active="{activeTab == '3'}"
        >
          Sell
        </NavLink>
      </NavItem>
    </ul>
    <div class="mt-4">
      <div class="table-responsive">
        <div class="table table-hover dt-responsive nowrap">
          <Datatable settings="{settings}" data="{data.wallet.walletHistory}">
            <thead>
              <tr>
                <th style="width: 158px;">ID No</th>
                <th style="width: 219px;">Date</th>
                <th style="width: 142px;">Type</th>
                <th style="width: 215px;">Currency</th>
                <th style="width: 205px;">Amount</th>
                <th style="width: 306px;">Amount in USD</th>
              </tr>
            </thead>
            <tbody>
              {#each $rows as row}
                <tr>
                  <td style="width: 158px;"
                    ><a href="/" class="text-body fw-bold">{row.id}</a></td
                  >
                  <td style="width: 219px;">{row.date}</td>
                  <td style="width: 142px;">{row.type}</td>
                  <td style="width: 215px;">{row.currency}</td>
                  <td style="width: 205px;">{row.amount}</td>
                  <td style="width: 306px;">{row.amountinUSD}</td>
                </tr>
              {/each}
            </tbody>
          </Datatable>
        </div>
      </div>
    </div>
  </CardBody>
</Card>
