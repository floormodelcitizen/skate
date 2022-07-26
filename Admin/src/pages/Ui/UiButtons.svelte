<script>
  import { Link } from "svelte-routing";
  import {
    Button,
    Dropdown,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    Label,
    Input,
  } from "sveltestrap";

  import Breadcrumb from "../../common/Breadcrumb.svelte";
  
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="UI Elements" breadcrumbItem="Buttons" />

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Default buttons</CardTitle>
            <p class="card-title-desc">
              Bootstrap includes six predefined button styles, each serving its
              own semantic purpose.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button color="success">Success</Button>
              <Button color="info">Info</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
              <Button color="dark">Dark</Button>
              <Button color="link">Link</Button>
              <Button color="light">Light</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Outline buttons</CardTitle>
            <p class="card-title-desc">
              Replace the default modifier classes with the
              <code class="highlighter-rouge">.btn-outline-*</code>
              ones to remove all background images and colors on any button.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <Button color="primary" outline>Primary</Button>
              <Button color="secondary" outline>Secondary</Button>
              <Button color="success" outline>Success</Button>
              <Button color="info" outline>Info</Button>
              <Button color="warning" outline>Warning</Button>
              <Button color="danger" outline>Danger</Button>
              <Button color="dark" outline>Dark</Button>
              <Button color="light" outline>Light</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Rounded buttons</CardTitle>
            <p class="card-title-desc">
              Use class <code>.btn-rounded</code> for button round border.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <Button color="primary" class="btn-rounded">Primary</Button>
              <Button color="secondary" class="btn-rounded">Secondary</Button>
              <Button color="success" class="btn-rounded">Success</Button>
              <Button color="info" class="btn-rounded">Info</Button>
              <Button color="warning" class="btn-rounded">Warning</Button>
              <Button color="danger" class="btn-rounded">Danger</Button>
              <Button color="dark" class="btn-rounded">Dark</Button>
              <Button color="link" class="btn-rounded">Link</Button>
              <Button color="light" class="btn-rounded">Light</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Buttons with icon</CardTitle>
            <p class="mb-3 card-title-desc">Add icon in button.</p>

            <div class="d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary">
                <i class="bx bx-smile font-size-16 align-middle me-2" />
                Primary
              </button>
              <button type="button" class="btn btn-success">
                <i class="bx bx-check-double font-size-16 align-middle me-2" />
                Success
              </button>
              <button type="button" class="btn btn-warning">
                <i class="bx bx-error font-size-16 align-middle me-2" />
                Warning
              </button>
              <button type="button" class="btn btn-danger">
                <i class="bx bx-block font-size-16 align-middle me-2" />
                Danger
              </button>
              <button type="button" class="btn btn-dark">
                <i
                  class="bx bx-loader bx-spin font-size-16 align-middle me-2"
                />
                Loading
              </button>
              <button type="button" class="btn btn-light">
                <i
                  class="bx bx-hourglass bx-spin font-size-16 align-middle me-2"
                />
                Loading
              </button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xl={12}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Snip Buttons</CardTitle>

            <Row>
              <Col xl={4}>
                <div class="mt-4">
                  <h5 class="font-size-15 mb-3">Example 1</h5>

                  <div>
                    <div class="btn-group btn-group-example mb-3" role="group">
                      <button
                        type="button"
                        class="btn btn-outline-primary w-sm"
                      >
                        Left
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-primary w-sm"
                      >
                        Middle
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-primary w-sm"
                      >
                        Right
                      </button>
                    </div>

                    <div>
                      <div
                        class="btn-group btn-group-example mb-3"
                        role="group"
                      >
                        <button type="button" class="btn btn-primary w-xs">
                          <i class="mdi mdi-thumb-up" />
                        </button>
                        <button type="button" class="btn btn-danger w-xs">
                          <i class="mdi mdi-thumb-down" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <div class="btn-group btn-group-example" role="group">
                        <button
                          type="button"
                          class="btn btn-outline-secondary w-xs"
                        >
                          <i class="bx bx-menu-alt-right" />
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-secondary w-xs"
                        >
                          <i class="bx bx-menu" />
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-secondary w-xs"
                        >
                          <i class="bx bx-menu-alt-left" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <div class="col-xl-4">
                <div class="mt-4">
                  <h5 class="font-size-15 mb-3">Example 2</h5>

                  <div class="d-flex flex-wrap gap-2">
                    <button type="button" class="btn btn-primary btn-label">
                      <i class="bx bx-smile label-icon" /> Primary
                    </button>
                    <button type="button" class="btn btn-success btn-label">
                      <i class="bx bx-check-double label-icon" />
                      Success
                    </button>
                    <button type="button" class="btn btn-warning btn-label">
                      <i class="bx bx-error label-icon " />
                      Warning
                    </button>
                    <button type="button" class="btn btn-danger btn-label">
                      <i class="bx bx-block label-icon " />Danger
                    </button>
                    <button type="button" class="btn btn-dark btn-label">
                      <i class="bx bx-loader label-icon " />Dark
                    </button>
                    <button type="button" class="btn btn-light btn-label">
                      <i class="bx bx-hourglass label-icon " />
                      Light
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-xl-4">
                <div class="mt-4">
                  <h5 class="font-size-15 mb-3">Example 3</h5>

                  <div class="d-flex flex-wrap gap-2">
                    <button type="button" class="btn btn-primary w-sm">
                      <i class="mdi mdi-download d-block font-size-16" />
                      Download
                    </button>
                    <button type="button" class="btn btn-light w-sm">
                      <i class="mdi mdi-upload d-block font-size-16" />
                      Upload
                    </button>
                    <button type="button" class="btn btn-success w-sm">
                      <i class="mdi mdi-pencil d-block font-size-16" />
                      Edit
                    </button>
                    <button type="button" class="btn btn-danger w-sm">
                      <i class="mdi mdi-trash-can d-block font-size-16" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Buttons Sizes</CardTitle>
            <p class="card-title-desc">
              Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.
            </p>

            <div class="d-flex flex-wrap gap-2 align-items-center">
              <Button color="primary" class="btn btn-primary btn-lg">
                Large button
              </Button>
              <Button color="secondary" class="btn btn-secondary btn-lg">
                Large button
              </Button>
              <Button color="primary" class="btn btn-primary btn-sm">
                Small button
              </Button>
              <Button color="secondary" class="btn btn-secondary btn-sm">
                Small button
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Buttons width</CardTitle>
            <p class="card-title-desc">
              Add <code>.w-xs</code>, <code>.w-sm</code>,
              <code>.w-md</code> and <code> .w-lg</code> className for additional
              buttons width.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary w-xs"> Xs </button>
              <button type="button" class="btn btn-danger w-sm"> Small </button>
              <button type="button" class="btn btn-warning w-md">
                Medium
              </button>
              <button type="button" class="btn btn-success w-lg">
                Large
              </button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Button tags</CardTitle>
            <p class="card-title-desc">
              The <code class="highlighter-rouge">.btn</code>
              classes are designed to be used with the
              <code class="highlighter-rouge"> &lt;button&gt; </code>
              element. However, you can also use these classes on
              <code class="highlighter-rouge">&lt;Link&gt;</code> or
              <code class="highlighter-rouge">&lt;input&gt;</code>
              elements (though some browsers may apply a slightly different rendering).
            </p>

            <div class="d-flex flex-wrap gap-2">
              <Link class="btn btn-primary" to="#" role="button">Link</Link>
              <Button color="success" class="btn btn-success" type="submit">
                Button
              </Button>
              <input class="btn btn-info" type="button" value="Input" />
              <input class="btn btn-danger" type="submit" value="Submit" />
              <input class="btn btn-warning" type="reset" value="Reset" />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Toggle states</CardTitle>
            <p class="card-title-desc">
              Add
              <code class="highlighter-rouge">
                data-toggle=&quot;button&ldquo;
              </code>
              to toggle a button’s
              <code class="highlighter-rouge">active</code>
              state. If you’re pre-toggling a button, you must manually add the
              <code class="highlighter-rouge"> .active </code>
              class
              <strong>and</strong>
              <code class="highlighter-rouge">
                aria-pressed= &quot;true &ldquo;
              </code>
              to the
              <code class="highlighter-rouge">&lt;button&gt;</code>.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <Button
                color="primary"
                class="btn btn-primary"
                data-toggle="button"
                aria-pressed="false"
              >
                Single toggle
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Block Buttons</CardTitle>
            <p class="card-title-desc">
              Create block level buttons—those that span the full width of a
              parent—by adding
              <code class="highlighter-rouge">.btn-block</code>.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <Button color="primary" class="btn btn-primary btn-lg btn-block">
                Block level button
              </Button>
              <Button
                color="secondary"
                class="btn btn-secondary btn-sm btn-block"
              >
                Block level button
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Checkbox & Radio Buttons</CardTitle>
            <p class="card-title-desc">
              Bootstrap’s
              <code class="highlighter-rouge">.button</code> styles can be
              applied to other elements, such as
              <code class="highlighter-rouge">&lt;label&gt;</code>s, to provide
              checkbox or radio style button toggling. Add
              <code class="highlighter-rouge">
                data-toggle=&quot;buttons&ldquo;
              </code>
              to a<code class="highlighter-rouge">.btn-group</code>
              containing those modified buttons to enable toggling in their respective
              styles.
            </p>

            <Row>
              <Col xl={6}>
                <div class="btn-group mt-2 mt-xl-0" data-toggle="buttons">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck1"
                    autoComplete="off"
                    defaultChecked
                  />
                  <Label class="btn btn-primary" htmlFor="btncheck1"
                    >Checkbox 1</Label
                  >
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck2"
                    autoComplete="off"
                  />
                  <Label class="btn btn-primary" htmlFor="btncheck2"
                    >Checkbox 2</Label
                  >
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck3"
                    autoComplete="off"
                  />
                  <Label class="btn btn-primary" htmlFor="btncheck3"
                    >Checkbox 3</Label
                  >
                </div>
              </Col>
              <Col xl={6}>
                <div
                  class="btn-group mt-2 mt-xl-0"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autoComplete="off"
                    defaultChecked
                  />
                  <Label class="btn btn-secondary" htmlFor="btnradio1"
                    >Radio 1</Label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autoComplete="off"
                  />
                  <Label class="btn btn-secondary" htmlFor="btnradio2"
                    >Radio 2</Label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio3"
                    autoComplete="off"
                  />
                  <Label class="btn btn-secondary" htmlFor="btnradio3"
                    >Radio 3</Label
                  >
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Button group</CardTitle>
            <p class="card-title-desc">
              Wrap a series of buttons with
              <code class="highlighter-rouge">.btn</code> in
              <code class="highlighter-rouge">.btn-group</code>.
            </p>

            <Row>
              <Col md={6}>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <Button color="primary">Left</Button>
                  <Button color="primary">Middle</Button>
                  <Button color="primary">Right</Button>
                </div>
              </Col>

              <Col md={6}>
                <div
                  class="btn-group mt-4 mt-md-0"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" class="btn btn-secondary">
                    <i class="bx bx-menu-alt-right" />
                  </button>
                  <button type="button" class="btn btn-secondary">
                    <i class="bx bx-menu" />
                  </button>
                  <button type="button" class="btn btn-secondary">
                    <i class="bx bx-menu-alt-left" />
                  </button>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Button toolbar</CardTitle>
            <p class="card-title-desc">
              Combine sets of button groups into button toolbars for more
              complex components. Use utility classNamees as needed to space out
              groups, buttons, and more.
            </p>

            <div
              class="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="btn-group me-2" role="group" aria-label="First group">
                <Button color="secondary" class="btn btn-secondary">1</Button>
                <Button color="secondary" class="btn btn-secondary">2</Button>
                <Button color="secondary" class="btn btn-secondary">3</Button>
                <Button color="secondary" class="btn btn-secondary">4</Button>
              </div>
              <div
                class="btn-group me-2"
                role="group"
                aria-label="Second group"
              >
                <Button color="secondary" class="btn btn-secondary">5</Button>
                <Button color="secondary" class="btn btn-secondary">6</Button>
                <Button color="secondary" class="btn btn-secondary">7</Button>
              </div>
              <div class="btn-group" role="group" aria-label="Third group">
                <Button color="secondary" class="btn btn-secondary">8</Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Sizing</CardTitle>
            <p class="card-title-desc">
              Instead of applying button sizing classes to every button in a
              group, just add
              <code class="highlighter-rouge">.btn-group-*</code> to each
              <code class="highlighter-rouge">.btn-group</code>
              , including each one when nesting multiple groups.
            </p>

            <div
              class="btn-group btn-group-lg"
              role="group"
              aria-label="Basic example"
            >
              <Button color="primary">Left</Button>
              <Button color="primary">Middle</Button>
              <Button color="primary">Right</Button>
            </div>

            <br />

            <div class="btn-group mt-2" role="group" aria-label="Basic example">
              <Button color="secondary" class="btn btn-secondary">Left</Button>
              <Button color="secondary" class="btn btn-secondary">
                Middle
              </Button>
              <Button color="secondary" class="btn btn-secondary">Right</Button>
            </div>

            <br />

            <div
              class="btn-group btn-group-sm mt-2"
              role="group"
              aria-label="Basic example"
            >
              <Button color="danger">Left</Button>
              <Button color="danger">Middle</Button>
              <Button color="danger">Right</Button>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Vertical variation</CardTitle>
            <p class="card-title-desc">
              Make a set of buttons appear vertically stacked rather than
              horizontally. Split button dropdowns are not supported here.
            </p>

            <div
              class="btn-group-vertical"
              role="group"
              aria-label="Vertical button group"
            >
              <Button type="button" color="secondary" class="btn btn-secondary">
                Button
              </Button>

              <Dropdown>
                <DropdownToggle caret color="secondary">
                  Dropdown <i class="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Dropdown link</DropdownItem>
                  <DropdownItem>Dropdown link</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Button color="secondary" type="button" class="btn btn-secondary">
                Button
              </Button>
              <Button color="secondary" type="button" class="btn btn-secondary">
                Button
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>