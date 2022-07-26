<script>
  import { Link } from "svelte-routing";
  import { Container, Row, Col } from "sveltestrap";
  import Countdown from "svelte-countdown";
</script>

<div class="home-btn d-none d-sm-block">
  <Link to="/" class="text-white">
    <i class="fas fa-home h2" />
  </Link>
</div>

<div class="my-5 pt-sm-5">
  <Container>
    <Row>
      <Col lg="12">
        <div class="text-center">
          <Link to="/">
            <img src="assets/images/logo-dark.png" alt="" height="20" />
          </Link>
          <Row class="justify-content-center mt-5">
            <Col sm="4">
              <div class="maintenance-img">
                <img
                  src="assets/images/coming-soon.svg"
                  alt=""
                  class="img-fluid mx-auto d-block"
                />
              </div>
            </Col>
          </Row>
          <h4 class="mt-5">Let&#39;s get started with Skote</h4>
          <p class="text-muted">
            It will be as simple as Occidental in fact it will be Occidental.
          </p>

          <Row class="justify-content-center mt-5">
            <Col md="8">
              <div class="counter-number">
                <Countdown
                  from="2021/12/31 09:30:59"
                  format="YYYY-MM-DD"
                  zone="Europe/Athens"
                  let:remaining
                >
                  {#if remaining.done === false}
                    <div class="coming-box">
                      {remaining.days} <span>Days</span>
                    </div>
                    {" "}
                    <div class="coming-box">
                      {remaining.hours} <span>Hours</span>
                    </div>
                    {" "}
                    <div class="coming-box">
                      {remaining.minutes} <span>Minutes</span>
                    </div>
                    {" "}
                    <div class="coming-box">
                      {remaining.seconds} <span>Seconds</span>
                    </div>
                  {:else}
                    <h2>The time has come!</h2>
                  {/if}
                </Countdown>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </Container>
</div>
