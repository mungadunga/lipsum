import "./HeaderButton.css";

interface iProps {
   title: string;
   action: any;
}

const HeaderButton = (props: iProps) => {
   return (
      <p className="HeaderButtonP" onClick={props.action}>{props.title}</p>
   )
}

export default HeaderButton;