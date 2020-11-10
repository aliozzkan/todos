import React, {  useState  } from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Spinner
} from "reactstrap";
import { useForm } from "react-hook-form";

interface LoginFormFields {
    name: string;
    surname: string;
    username: string;
    password: string;
}

function Register() {
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
                            <h1 className="text-center">Üye Ol</h1>
                            <hr />
                            <Form onSubmit={handleSubmit(onValid)}>
                                <FormGroup>
                                    <Label>İsim</Label>
                                    <Input
                                        type="text"
                                        placeholder="Lütfen İsminizi Giriniz..."
                                        name="name"
                                        innerRef={register({ required: true })}
                                        invalid={!!errors["name"]}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Soyisim</Label>
                                    <Input
                                        type="text"
                                        placeholder="Lütfen Soyisminizi Giriniz..."
                                        name="surname"
                                        innerRef={register({ required: true })}
                                        invalid={!!errors["surname"]}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Kullanıcı Adı</Label>
                                    <Input
                                        type="text"
                                        placeholder="Lütfen Kullanıcı Adınızı Giriniz..."
                                        name="username"
                                        innerRef={register({ required: true })}
                                        invalid={!!errors["username"]}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Parola</Label>
                                    <Input
                                        type="text"
                                        placeholder="Lütfen Parolanızı Giriniz..."
                                        name="password"
                                        innerRef={register({ required: true })}
                                        invalid={!!errors["password"]}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit" size="lg" color="primary" block disabled={isLoading}>

                                        {isLoading ? <Spinner /> : "Üye Ol"}
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

export default Register;
