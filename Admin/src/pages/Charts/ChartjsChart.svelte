<script>
  import { Container, Row, Col, Card, CardBody, CardTitle } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";

  // import chartJs
  import LineChart from "../AllCharts/chartjs/linechart.svelte";
  import DountChart from "../AllCharts/chartjs/dountchart.svelte";
  import PieChart from "../AllCharts/chartjs/piechart.svelte";
  import BarChart from "../AllCharts/chartjs/barchart.svelte";
  import RadarChart from "../AllCharts/chartjs/radarchart.svelte";
  import PolarChart from "../AllCharts/chartjs/polarchart.svelte";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Charts" breadcrumbItem="Apex Charts" />

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Line Chart</CardTitle>
            <Row class="justify-content-center">
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">86541</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">2541</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">102030</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </Col>
            </Row>
            <div style="min-height: 474px; min-width:260px">
              <LineChart />
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Bar Chart</CardTitle>
            <Row class="justify-content-center">
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">2541</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">84845</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">12001</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </Col>
            </Row>
            <div style="min-height: 474px; min-width:260px">
              <BarChart />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Pie Chart</CardTitle>
            <Row class="justify-content-center">
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">2536</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">69421</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">89854</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </Col>
            </Row>
            <div style="min-height: 474px; min-width:260px">
              <PieChart />
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Donut Chart</CardTitle>
            <Row class="justify-content-center">
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">9595</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">36524</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">62541</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </Col>
            </Row>
            <div style="min-height: 474px; min-width:260px">
              <DountChart />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Polar Chart</CardTitle>
            <Row class="justify-content-center">
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">4852</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">3652</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">85412</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </Col>
            </Row>
            <div style="min-height: 474px; min-width:260px">
              <PolarChart />
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Radar Chart</CardTitle>
            <Row class="justify-content-center">
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">694</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">55210</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0 font-size-20">489498</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </Col>
            </Row>
            <div style="min-height: 474px; min-width:260px">
              <RadarChart />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
