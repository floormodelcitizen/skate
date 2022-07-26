<script>
  import Doughnut from "svelte-chartjs/src/Doughnut.svelte";

  const data = {
    width: 474,
    height: 300,
    labels: ["Desktops", "Tablets"],
    datasets: [
      {
        data: [300, 210],
        backgroundColor: ["#556ee6", "#ebeff2"],
        hoverBackgroundColor: ["#556ee6", "#ebeff2"],
        hoverBorderColor: "#fff",
      },
    ],
  };
</script>

<Doughnut {data} width={474} height={300} class="apex-charts" />