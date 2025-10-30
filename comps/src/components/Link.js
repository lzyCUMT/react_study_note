import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";
function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation;

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );
  const handleClick = (event) => {
    // 允许在新标签打开
    if (event.metaKey || event.ctrlKey || event.button === 1) return;
    event.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
export default Link;
