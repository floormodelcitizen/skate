<script>
  import { Link } from "svelte-routing";
  import {
    Alert,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Row,
  } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="UI Elements" breadcrumbItem="Alerts" />

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Default Alerts</CardTitle>
            <p class="card-title-desc">
              Alerts are available for any length of text, as well as an
              optional dismiss button. For proper styling, use one of the four <strong
                >required</strong
              >
              contextual classes (e.g., <code> .alert-success</code>). For
              inline dismissal, use the alerts jQuery plugin.
            </p>

            <div class="">
              <Alert color="primary">
                A simple primary alert—check it out!
              </Alert>
              <Alert color="secondary" role="alert">
                A simple secondary alert—check it out!
              </Alert>
              <Alert color="success" role="alert">
                A simple success alert—check it out!
              </Alert>
              <Alert color="danger" role="alert">
                A simple danger alert—check it out!
              </Alert>
              <Alert color="warning" role="alert">
                A simple warning alert—check it out!
              </Alert>
              <Alert color="info" class="mb-0" role="alert">
                A simple info alert—check it out!
              </Alert>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Link color</CardTitle>
            <p class="card-title-desc">
              Use the{" "}
              <code class="highlighter-rouge">.alert-link</code>{" "}
              utility className to quickly provide matching colored links within
              any alert.
            </p>

            <div class="">
              <Alert color="primary">
                A simple primary alert with{" "}
                <Link to="#" class="alert-link">an example link</Link>
                . Give it a click if you like.
              </Alert>
              <Alert color="secondary">
                A simple secondary alert with{" "}
                <Link to="#" class="alert-link">an example link</Link>
                . Give it a click if you like.
              </Alert>
              <Alert colr="success">
                A simple success alert with{" "}
                <Link to="#" class="alert-link">an example link</Link>
                . Give it a click if you like.
              </Alert>
              <Alert color="danger">
                A simple danger alert with{" "}
                <Link to="#" class="alert-link">an example link</Link>
                . Give it a click if you like.
              </Alert>
              <Alert color="warning">
                A simple warning alert with{" "}
                <Link to="#" class="alert-link">an example link</Link>
                . Give it a click if you like.
              </Alert>
              <Alert color="info" class="mb-0">
                A simple info alert with{" "}
                <Link to="#" class="alert-link">an example link</Link>
                . Give it a click if you like.
              </Alert>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Dismissing</CardTitle>
            <p class="card-title-desc">
              Add a dismiss button and the <code>.alert-dismissible</code>
              class, which adds extra padding to the right of the alert and positions
              the <code>.btn-close</code> button.
            </p>

            <div class="">
              <Alert color="primary" dismissible>
                A simple primary alert—check it out!
              </Alert>
              <Alert color="secondary" dismissible role="alert">
                A simple secondary alert—check it out!
              </Alert>
              <Alert color="success" dismissible role="alert">
                A simple success alert—check it out!
              </Alert>
              <Alert color="danger" dismissible role="alert">
                A simple danger alert—check it out!
              </Alert>
              <Alert color="warning" dismissible role="alert">
                A simple warning alert—check it out!
              </Alert>
              <Alert color="info" dismissible class="mb-0" role="alert">
                A simple info alert—check it out!
              </Alert>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">With Icon</CardTitle>
            <div class="">
              <Alert
                color="primary"
                class="alert-dismissible fade show"
                dismissible
                role="alert"
              >
                <i class="mdi mdi-bullseye-arrow me-2" />A simple primary
                alert—check it out!
              </Alert>
              <Alert
                color="secondary"
                class="alert-dismissible fade show"
                dismissible
                role="alert"
              >
                <i class="mdi mdi-grease-pencil me-2" />A simple secondary
                alert—check it out!
              </Alert>
              <Alert
                color="success"
                class="alert-dismissible fade show"
                dismissible
                role="alert"
              >
                <i class="mdi mdi-check-all me-2" />A simple success alert—check
                it out!
              </Alert>
              <Alert
                color="danger"
                class="alert-dismissible fade show"
                dismissible
                role="alert"
              >
                <i class="mdi mdi-block-helper me-2" />A simple danger
                alert—check it out!
              </Alert>
              <Alert
                color="warning"
                class="alert-dismissible fade show"
                dismissible
                role="alert"
              >
                <i class="mdi mdi-alert-outline me-2" />A simple warning
                alert—check it out!
              </Alert>
              <Alert
                color="info"
                class="alert-dismissible fade show mb-0"
                dismissible
                role="alert"
              >
                <i class="mdi mdi-alert-circle-outline me-2" />A simple info
                alert—check it out!
              </Alert>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
