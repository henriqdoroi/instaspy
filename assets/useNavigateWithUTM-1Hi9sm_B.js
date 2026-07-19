import { t as useNavigate } from "./chunk-EPOLDU6W-CkoexLYk.js";
export function useNavigateWithUTM() {
  const navigate = useNavigate();
  return (to, options) => {
    const target = typeof to === "string" && window.location.search && !to.includes("?") ? `${to}${window.location.search}` : to;
    return navigate(target, options);
  };
}
export default useNavigateWithUTM;
