import { ExamContext } from "../components/context/ExamContext";
import { useContext } from "react";

export const useExamContext = () => {
    const context = useContext(ExamContext);

    if (!context) {
        throw new Error("useExamContext must be used within a ExamContextProvider");
    }

    return context;
}