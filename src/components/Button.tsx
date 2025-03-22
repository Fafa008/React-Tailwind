interface ButtonProps {
  link: string;
  children: React.ReactNode;
}

const Button = ({ link, children }: ButtonProps) => {
  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#45a049",
    },
  };

  return (
    <a href={link} style={buttonStyle}>
      {children}
    </a>
  );
};

export default Button;
