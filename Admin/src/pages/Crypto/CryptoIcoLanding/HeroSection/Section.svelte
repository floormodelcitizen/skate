<script>
  import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    Button,
  } from "sveltestrap";
  import { Link } from "svelte-routing";

  //Import Countdown
  import Countdown from "svelte-countdown";
</script>

<section class="section hero-section bg-ico-hero" id="home">
  <div class="bg-overlay bg-primary" />
  <Container>
    <Row class="align-items-center">
      <Col lg="5">
        <div class="text-white-50">
          <h1 class="text-white fw-semibold mb-3 hero-title">
            Skote - Ico Landing for a cryptocurrency business
          </h1>
          <p class="font-size-14">
            It will be as simple as occidental in fact to an English person, it
            will seem like simplified as a skeptical Cambridge
          </p>

          <div class="d-flex flex-wrap gap-2 mt-4">
            <Link to="#" class="btn btn-success">Get Whitepaper</Link>{" "}
            <Link to="#" class="btn btn-light">How it work</Link>
          </div>
        </div>
      </Col>
      <Col lg="5" md="8" sm="10" class="ms-lg-auto">
        <Card class="overflow-hidden mb-0 mt-5 mt-lg-0">
          <CardHeader class="text-center">
            <h5 class="mb-0">ICO Countdown time</h5>
          </CardHeader>
          <CardBody>
            <div class="text-center">
              <h5>Time left to Ico :</h5>
              <div class="mt-4">
                  <Countdown
                    from="2021/12/31 09:30:00"
                    dateFormat="YYYY-MM-DD"
                    zone="Europe/Athens"
                    let:remaining
                  >
                    <div class="counter-number ico-countdown">
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
                    </div>
                  </Countdown>
              </div>

              <div class="mt-4">
                <Button type="button" color="success" class="w-md">
                  Get Token
                </Button>
              </div>

              <div class="mt-5">
                <h4 class="fw-semibold">1 ETH = 2235 SKT</h4>
                <div class="clearfix mt-4">
                  <h5 class="float-end font-size-14">5234.43</h5>
                </div>
                <div class="progress p-1 progress-xl softcap-progress">
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    style="width: 15%"
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-label">15 %</div>
                  </div>
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style="width: 30%"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-label">30 %</div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</section>