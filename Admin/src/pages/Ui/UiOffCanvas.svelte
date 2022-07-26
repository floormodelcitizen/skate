<script>
  import {
    Button,
    Offcanvas,
    Container,
    Row,
    Col,
    Card,
    CardBody,
  } from "sveltestrap";
  let open = false;
  let endOpen = false;
  let bottomOpen = false;
  let topOpen = false;
  const toggle = () => (open = !open);
  const toggleEnd = () => (endOpen = !endOpen);
  const toggleBottom = () => (bottomOpen = !bottomOpen);
  const toggleTop = () => (topOpen = !topOpen);

  import Breadcrumb from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="UI Elements" breadcrumbItem="OffCanvas" />

    <Row>
      <Col lg={12}>
        <Card>
          <CardBody>

            <div class="h4 card-title">Placement</div>

            <p class="card-title-desc">Offcanvas Diffrent Placement Example: Start, End and Top, Bottom</p>

            <Button color="primary" on:click={toggle}>Start</Button>
            <Button color="primary" on:click={() => (endOpen = !endOpen)}
              >End</Button
            >
            <Button color="primary" on:click={() => (topOpen = !topOpen)}
              >Top</Button
            >
            <Button color="primary" on:click={() => (bottomOpen = !bottomOpen)}>
              Bottom
            </Button>

            <Offcanvas isOpen={open} {toggle} header="Start" placement="start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Offcanvas>

            <Offcanvas
              isOpen={endOpen}
              toggle={toggleEnd}
              placement="end"
              header="Right"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Offcanvas>

            <Offcanvas
              isOpen={topOpen}
              toggle={toggleTop}
              placement="top"
              header="Top"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Offcanvas>

            <Offcanvas
              isOpen={bottomOpen}
              toggle={toggleBottom}
              placement="bottom"
              header="Bottom"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Offcanvas>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
