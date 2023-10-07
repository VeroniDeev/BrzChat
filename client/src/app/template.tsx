import Header from "@/components/Header";

interface children {
  children: React.ReactNode;
}

const Template: React.FC<children> = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default Template;
