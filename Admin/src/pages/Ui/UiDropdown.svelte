<script>
  import {
    Button,
    ButtonDropdown,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
  } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="UI Elements" breadcrumbItem="Dropdowns" />

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Single button dropdowns</CardTitle>
            <p class="card-title-desc">
              Any single <code class="highlighter-rouge">.btn</code>{" "}
              can be turned into a dropdown toggle with some markup changes. Here’s
              how you can put them to work with either{" "}
              <code class="highlighter-rouge">&lt;button&gt;</code>{" "}
              elements:
            </p>
            <Row>
              <Col sm={6}>
                <Dropdown>
                  <DropdownToggle class="btn btn-secondary" caret>
                    Dropdown button{" "}
                    <i class="mdi mdi-chevron-down" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
              <Col sm={6}>
                <Dropdown class="mt-4 mt-sm-0">
                  <DropdownToggle class="btn btn-secondary" caret>
                    Dropdown Link{" "}
                    <i class="mdi mdi-chevron-down" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Variant</CardTitle>
            <p class="card-title-desc">
              The best part is you can do this with any button variant, too:
            </p>

            <div class="d-flex gap-2 flex-wrap">
              <Dropdown>
                <DropdownToggle tag="button" class="btn btn-primary">
                  Primary <i class="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>{" "}
              <Dropdown>
                <DropdownToggle tag="button" class="btn btn-secondary">
                  Secondary <i class="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>{" "}
              <Dropdown>
                <DropdownToggle tag="button" class="btn btn-success">
                  Success <i class="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownToggle tag="button" class="btn btn-info">
                  Info <i class="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownToggle tag="button" class="btn btn-warning">
                  Warning <i class="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownToggle tag="button" class="btn btn-danger">
                  Danger <i class="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Split button dropdowns</CardTitle>
            <p class="card-title-desc">
              The best part is you can do this with any button variant, too:
            </p>
            <div class="d-flex gap-2 flex-wrap">
              <div class="btn-group mb-2">
                <ButtonDropdown>
                  <Button id="caret" color="primary">Primary</Button>
                  <DropdownToggle
                    caret
                    color="primary"
                    class="dropdown-toggle-split"
                    ><i class="mdi mdi-chevron-down" /></DropdownToggle
                  >
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div class="btn-group mb-2">
                <ButtonDropdown>
                  <Button id="caret" color="secondary">Secondary</Button>
                  <DropdownToggle
                    caret
                    color="secondary"
                    class="dropdown-toggle-split"
                  >
                    <i class="mdi mdi-chevron-down" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div class="btn-group mb-2">
                <ButtonDropdown>
                  <Button id="caret" color="success">Success</Button>
                  <DropdownToggle
                    caret
                    color="success"
                    class="dropdown-toggle-split"
                  >
                    <i class="mdi mdi-chevron-down" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div class="btn-group mb-2">
                <ButtonDropdown>
                  <Button id="caret" color="info">Info</Button>
                  <DropdownToggle
                    caret
                    color="info"
                    class="dropdown-toggle-split"
                  >
                    <i class="mdi mdi-chevron-down" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div class="btn-group mb-2">
                <ButtonDropdown>
                  <Button id="caret" color="warning">Warning</Button>
                  <DropdownToggle
                    caret
                    color="warning"
                    class="dropdown-toggle-split"
                  >
                    <i class="mdi mdi-chevron-down" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div class="btn-group mb-2">
                <ButtonDropdown>
                  <Button id="caret" color="danger">Danger</Button>
                  <DropdownToggle
                    caret
                    color="danger"
                    class="dropdown-toggle-split"
                  >
                    <i class="mdi mdi-chevron-down" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Sizing</CardTitle>
            <p class="card-title-desc mb-3">
              Button dropdowns work with buttons of all sizes, including default
              and split dropdown buttons.
            </p>
            <div class="btn-group me-1 mt-2">
              <ButtonDropdown>
                <DropdownToggle caret color="primary" class="btn-lg">
                  Large button{" "}
                  <i class="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
            {" "}
            <div class="btn-group me-1 mt-2">
              <Button color="secondary" class="btn btn-secondary btn-lg">
                Large button
              </Button>
              <ButtonDropdown>
                <DropdownToggle
                  caret
                  color="secondary"
                  class="btn btn-secondary btn-lg"
                >
                  <i class="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
            {" "}
            <div class="btn-group me-1 mt-2">
              <ButtonDropdown>
                <DropdownToggle caret color="info" class="btn btn-info btn-sm"
                  >Small button
                  <i class="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
            {" "}
            <div class="btn-group me-1 mt-2">
              <ButtonDropdown>
                <Button class="btn btn-secondary btn-sm">Small button</Button>
                <DropdownToggle
                  caret
                  color="secondary"
                  class="btn btn-secondary btn-sm"
                >
                  <i class="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Dropup variation</CardTitle>
            <p class="card-title-desc">
              Trigger dropdown menus above elements by adding{" "}
              <code class="highlighter-rouge">.dropup</code> to the parent element.
            </p>
            <div class="d-flex gap-2 flex-wrap">
              <Dropdown>
                <DropdownToggle class="btn btn-secondary">
                  Dropup <i class="mdi mdi-chevron-up" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <ButtonDropdown direction="up">
                <Button id="caret" color="secondary">Split dropup</Button>
                <DropdownToggle caret color="secondary">
                  <i class="mdi mdi-chevron-up" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Menu alignment</CardTitle>
            <p class="card-title-desc">
              Add{" "}
              <code class="highlighter-rouge"> .dropdown-menu-end </code>{" "}
              to a{" "}
              <code class="highlighter-rouge">.dropdown-menu</code>{" "}
              to right align the dropdown menu.
            </p>
            <ButtonDropdown direction="right" class="dropdown-menu-end">
              <DropdownToggle caret color="secondary" class="btn btn-secondary">
                Menu is right-aligned{" "}
                <i class="mdi mdi-chevron-down" />
              </DropdownToggle>
              <DropdownMenu class="dropdown-menu-end">
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Dropright variation</CardTitle>
            <p class="card-title-desc">
              Trigger dropdown menus at the right of the elements by adding <code
                >.dropend</code
              > to the parent element.
            </p>

            <div class="d-flex gap-2 flex-wrap">
              <Dropdown direction="right" class="btn-group dropend">
                <DropdownToggle class="btn btn-info" caret>
                  Dropright <i class="mdi mdi-chevron-right" />
                </DropdownToggle>
                <DropdownMenu data-popper-placement="right-start">
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <ButtonDropdown direction="right" class="btn-group dropend">
                <Button id="caret" color="info">Split dropend</Button>
                <DropdownToggle caret color="info">
                  <i class="mdi mdi-chevron-right" />
                </DropdownToggle>
                <DropdownMenu data-popper-placement="right-start">
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Dropleft variation</CardTitle>
            <p class="card-title-desc">
              Trigger dropdown menus at the right of the elements by adding <code
                >.dropstart</code
              > to the parent element.
            </p>

            <div class="d-flex gap-2 flex-wrap">
              <Dropdown direction="left" class="btn-group dropstart">
                <DropdownToggle class="btn btn-info">
                  <i class="mdi mdi-chevron-left" /> Dropleft
                </DropdownToggle>
                <DropdownMenu data-popper-placement="left-start">
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <ButtonDropdown direction="left" class="btn-group dropstart">
                <DropdownToggle caret color="info">
                  <i class="mdi mdi-chevron-left" />
                </DropdownToggle>
                <Button id="caret" color="info">Split dropstart</Button>
                <DropdownMenu data-popper-placement="left-start">
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
