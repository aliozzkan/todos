import React, { FormEvent, useState, useRef, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  FormText,
  Button,
  Spinner,
} from "reactstrap";
import { useForm } from "react-hook-form";

interface LoginFormFields {
  username: string;
  password: string;
}

function Login() {
  const { register, handleSubmit, errors, reset } = useForm<LoginFormFields>();
  const [isLoading, setLoading] = useState(false);

  async function onValid(data: LoginFormFields) {
    console.log("onValid =>", { data });
    reset();
  }

  console.log({ errors });

  return (
    <div>
      <Row className="justify-content-center">
        <Col xs={12} sm={9} md={6}>
          <Card>
            <CardBody>
              <h1 className="text-center">Giriş Yap</h1>
              <hr />
              <Form onSubmit={handleSubmit(onValid)}>
                <FormGroup>
                  <Label>Kullanıcı Adı</Label>
                  <Input
                    type="text"
                    placeholder="Lütfen Kullanıcı Adı Giriniz..."
                    name="username"
                    innerRef={register({ required: true })}
                    invalid={!!errors["username"]}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Parola</Label>
                  <Input
                    type="password"
                    placeholder="Lütfen Parola Giriniz..."
                    name="password"
                    innerRef={register({ required: true })}
                    invalid={!!errors["password"]}
                  />
                </FormGroup>
                <FormGroup>
                  <Button
                    type="submit"
                    size="lg"
                    color="primary"
                    block
                    disabled={isLoading}
                  >
                    {isLoading ? <Spinner /> : "Giriş Yap"}
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
