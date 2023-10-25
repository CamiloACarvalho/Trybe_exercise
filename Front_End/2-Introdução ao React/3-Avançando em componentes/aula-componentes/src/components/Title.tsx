type TitleProps = {
  children: React.ReactNode;
};

function Title({ children }: TitleProps) {
  // const { title } = props;

  return (<h1>{children}</h1>);
}

export default Title;
