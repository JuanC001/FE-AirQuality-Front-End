import { useNavigate } from "react-router-dom"

export const useNavigationLink = (link) => {
  
    const navigate = useNavigate();

    const goToPage = () => {

        navigate(link);

    }

    return goToPage;

}
