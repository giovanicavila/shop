import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { signUp } from "../sign-up";

export const useSignUp = () => {
	const { mutateAsync, isPending } = useMutation({
		mutationFn: signUp,
		onSuccess: () => {
			toast.success("Cadastro realizado com sucesso");
		},
		onError: () => {
			toast.error("Houve um erro ao cadastrar o restaurante");
		},
	});

	return {
		RegisterRestaurant: mutateAsync,
		isLoadingRegisterRestaurant: isPending,
	};
};
