import { useState } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/AppContext";
import { gql, useMutation } from "@apollo/client";
import Cookie from "js-cookie";
import Link from "next/link";

import Form from "@/components/Form";
import Loader from "@/components/Loader";

const REGISTER_MUTATION = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        username
        email
      }
    }
  }
`;

export default function RegisterRoute() {
  const { setUser } = useAppContext();
  const router = useRouter();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [registerMutation, { loading, error }] = useMutation(REGISTER_MUTATION);
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = async () => {
    const { email, password } = formData;
    const { data } = await registerMutation({
      variables: { username: email, email: email, password },
    });
    if (data?.register.user) {
      setUser(data.register.user);
      Cookie.set("token", data.register.jwt);
      setSuccessMessage("Account created successfully!");
    }
  };

  const handleOrderFood = () => {
    router.push("/");
  };

  if (loading) return <Loader />;

  return (
    <>
      {successMessage && (
        <div className="success-message">
          <div className="card text-center">
            <strong>{successMessage}</strong> 
            You should check our pizzas, pastas and pastries.
            <br/>
              <Link href="/"onClick={handleOrderFood}>
                Order Food
              </Link>
          </div>
        </div>
      )}
      <Form
        title="Sign Up"
        buttonText="Create Account"
        formData={formData}
        setFormData={setFormData}
        callback={handleRegister}
        error={error}
      />

      <style jsx>{`
        .success-message {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .card {
          padding: 2rem;
          background-color: #dff0d8;
          border-color: #d6e9c6;
          color: #3c763d;
          width: 400px;
        }

        .btn-primary {
          color: #fff;
          background-color: #337ab7;
          border-color: #2e6da4;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
