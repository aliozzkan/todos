import React, { FormEvent, useState } from "react";
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
} from "reactstrap";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formValues = {
      username,
      password,
    };

    console.log({formValues});
  }

  return (
    <div>
      <Row className="justify-content-center">
        <Col xs={12} sm={9} md={6}>
          <Card>
            <CardBody>
              <h1 className="text-center">Giriş Yap</h1>
              <hr />
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Kullanıcı Adı</Label>
                  <Input
                    type="text"
                    placeholder="Lütfen Kullanıcı Adı Giriniz..."
                    value={username}
                    onChange={(e) => {
                      setUsername(e.currentTarget.value);
                    }}
                  />
                  <FormText>Lorem ipsum dolor sit.</FormText>
                </FormGroup>
                <FormGroup>
                  <Label>Parola</Label>
                  <Input
                    type="password"
                    placeholder="Lütfen Parola Giriniz..."
                    value={password}
                    onChange={(e) => {
                      setPassword(e.currentTarget.value);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Button type="submit" size="lg" color="primary" block>
                    Giriş Yap
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
