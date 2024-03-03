import { Header } from "./header";
import { BackButton } from "./backButton";
import { Card, CardHeader, CardFooter } from "../ui/card";

const ErrorCard = () => {
  return (
    <Card>
      <CardHeader className="w-[400px]">
        <Header label="Oops, something went wrong." />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
