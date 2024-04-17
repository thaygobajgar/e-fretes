import { Footer } from "../Footer";
import Header from "../Header";

interface iDefaultTemplateProps {
  children: React.ReactNode;
}

export const DefaultTemplate = ({ children }: iDefaultTemplateProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
