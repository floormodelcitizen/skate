<script lang="ts">
  import { supabase } from "../../lib/db";
  import { navigate } from "svelte-routing";
  import { Container, Row, Col, Card, CardBody, Button } from "sveltestrap";
  import { Link } from "svelte-routing";

  interface HelperText {
    error: boolean;
    text: string | null;
  }

  let email: string = "";
  let password: string = "";
  let helperText: HelperText = { error: null, text: null };

  const handleRegisterForm = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({ email, password });

    if (error) {
      helperText = { error: true, text: error.message };
    } else if (!user && !error) {
      helperText = {
        error: false,
        text: "An email has been sent to you for verification!",
      };
      navigate("/login");
    }
  };
</script>

<div class="account-pages my-5 pt-sm-5">
  <Container>
    <Row class="justify-content-center">
      <Col md={8} lg={8} xl={5}>
        <Card class="overflow-hidden">
          <div class="bg-primary bg-soft">
            <Row>
              <Col class="col-7">
                <div class="text-primary p-4">
                  <h5 class="text-primary">Register</h5>
                  <p>Get your account now.</p>
                </div>
              </Col>
              <Col class="col-5 align-self-end">
                <img src="assets/images/profile-img.png" alt="" class="img-fluid" />
              </Col>
            </Row>
          </div>
          <CardBody class="pt-0">
            <div>
              <Link to="/">
                <div class="avatar-md profile-user-wid mb-4">
                  <span class="avatar-title rounded-circle bg-light">
                    <img src="assets/images/logo.svg" alt="" class="rounded-circle" height="34" />
                  </span>
                </div>
              </Link>
            </div>
            <div class="p-2">
              <form on:submit|preventDefault={handleRegisterForm}>
                <div class="mb-3">
                  <label for="useremail" class="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email" />
                  <div class="invalid-feedback">Please Enter Email</div>
                </div>

                <div class="mb-3">
                  <label for="userpassword" class="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter password" />
                  <div class="invalid-feedback">Please Enter Password</div>
                </div>

                <div class="mt-4 d-grid">
                  <button class="btn btn-primary w-md waves-effect waves-light" type="submit"
                    >Register</button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
        <div class="mt-5 text-center">
          <p>
            Already have an account ?
            <Link to="/login" class="fw-medium text-primary">Login</Link>
          </p>
          <p>
            © {new Date().getFullYear()} Skote. Crafted with
            <i class="mdi mdi-heart text-danger" /> by Themesbrand
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</div>
