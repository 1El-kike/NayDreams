
import { useState } from "react";
import { Card, CardBody, CardHeader, Tab, Tabs } from "@heroui/react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const Login = () => {
    const [selected, setSelected] = useState("login");

    const handleRegisterSuccess = () => {
        setSelected("login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold text-center">Welcome</h1>
                    <p className="text-sm text-gray-600 text-center">
                        Sign in to your account or create a new one
                    </p>
                </CardHeader>
                <CardBody>
                    <Tabs
                        selectedKey={selected}
                        onSelectionChange={(key) => setSelected(key as string)}
                        aria-label="Login/Register tabs"
                        className="w-full"
                    >
                        <Tab key="login" title="Login">
                            <LoginForm />
                        </Tab>
                        <Tab key="register" title="Register">
                            <RegisterForm onSuccess={handleRegisterSuccess} />
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
};

