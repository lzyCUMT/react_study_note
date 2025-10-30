import useNavigation from "../Context/navigation";
function Route({ path, children }) {
  const { currentPath } = useNavigation();

  if (currentPath === path) {
    return children;
  }

  return null;
}

export default Route;
