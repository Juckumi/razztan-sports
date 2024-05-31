import { useEffect, useState } from "react";
import { getOneField } from "../../api/fieldApi";
import { useParams } from "react-router";

function useGetOneField() {
    const [field, setField] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { fieldId } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const field = await getOneField(fieldId);

                setField(field);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return {
        field,
        isLoading,
        error,
    };
}

export default useGetOneField;
