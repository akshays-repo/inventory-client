type Props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: Props) => {
  return <div className="container mx-auto px-8 lg:px-32 ">{children}</div>;
};
export default AppContainer;
